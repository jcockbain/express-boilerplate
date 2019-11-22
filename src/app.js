require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');

const port = process.env.PORT || 5000;

const middleware = require('./middleware');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1/', routes);

app.use(middleware.errorHandler.handleErrors);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
