const express = require('express');
const pars = require('body-parser');
const mongo = require('mongoose');
const app = express();

mongo.connect('mongodb://localhost/products', {
  useMongoClient: true,
});
mongo.Promise = global.Promise;

app.use(pars.json());
app.use(pars.urlencoded({ extended: true }));
app.use('/api', require('./routes/routes'));

app.use(function(req, res, next) {
  res.status(404);
  res.send({ error: 'Not found' });
  return;
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({ error: err.message });
  return;
});

app.listen(process.env.port || 8080, function() {
  console.log('Server running on port 8080');
});

module.exports = app;