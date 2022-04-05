const express = require('express');
const bodyParser = require("body-parser");

const bookControllers = require('./controllers/bookControllers');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/books', bookControllers);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));