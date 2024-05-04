const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Habibi! Come to Egypt'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
