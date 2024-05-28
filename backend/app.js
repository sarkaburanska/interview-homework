var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var productRouter = require('./routes/product');
var shipmentRouter = require('./routes/shipment');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/product', productRouter);
app.use('/api/shipment', shipmentRouter);

app.use(function (err, req, res) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
