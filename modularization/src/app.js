const { addRoutes } = require('./routes');
const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());
addRoutes(app)
app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
