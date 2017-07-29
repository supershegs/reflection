const http = require('http');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

import Reflection from './server/app/controllers/Reflection';

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

//get all reflections route
app.get('/reflections', Reflection.get);

// create a reflection
app.post('/reflections', Reflection.create);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to reflection.',
}));

const server = http.createServer(app);
server.listen(port);
console.log('Server listening PORT', port);

