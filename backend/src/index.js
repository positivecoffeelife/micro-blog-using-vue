// imports what app depends upon
const express = require('express'); //express application defined
const bodyParser = require('body-parser'); //middleware
const cors = require('cors'); //middleware
const helmet = require('helmet'); //middleware
const morgan = require('morgan'); //middleware
const routes = require('./routes');

//define express app
const app = express(); //application
app.use(helmet()); //middleware
app.use(bodyParser.json()); //middleware
app.use(cors()); //middleware
app.use(morgan('combined')); //middleware
app.use('/micro-posts', routes);

//listen for changes, live updating app
app.listen(8081, () => console.log('listening on port 8081'));