const express = require('express');
const pars = require('body-parser');
const mongo = require('mongoose');
const app = express();

mongo.connect('mongodb://localhost/products');
mongo.Promise = global.Promise;

//app.use(pars.json());
//app.use('/api', require('./routes/routes'));

app.listen(process.env.port || 8080, function() {
  console.log('Server running on port 8080')
})