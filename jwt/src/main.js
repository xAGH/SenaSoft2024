const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const jwt = require("jsonwebtoken");

const app = express()
const port = process.env.PORT || 3000

app.use(express.json());
app.use(morgan("dev"))
app.use(cors())

app.post("/login", (req, res) => {
    const secretKey = process.env.SECRET_KEY
    const refreshSecretKey = process.env.REFRESH_SECRET_KEY
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
        }
        if (username === "admin" && password === "123") {
            const token = jwt.sign({ username }, secretKey, { expiresIn: "1h", subject: "1" });
            const refresh = jwt.sign({ id: 1 }, refreshSecretKey, { expiresIn: "1d" });
            return res.status(200).json({ token, refresh });
        } else {
            return res.status(401).json({ message: "Authentication failed" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" + error });
    }
});

function verifyToken(req, res, next) {
    const secretKey = process.env.SECRET_KEY
    const header = req.header("Authorization") || "";
    const token = header.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Token not provied" });
    }
    try {
        const payload = jwt.verify(token, secretKey);
        req.username = payload.username;
        next();
    } catch (error) {
        return res.status(403).json({ message: "Token not valid " + error });
    }
}

app.get('/', verifyToken, (req, res) => {
    res.json({ money: 3000000, user: req.username }).status(200).send();
});

app.listen(port, () => {
    console.log(`Server listen on http://localhost:${port}`);
});