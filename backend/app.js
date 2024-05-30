var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var db = require('./config/db');

var productRouter = require('./routes/product');
var shipmentRouter = require('./routes/shipment');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/products', productRouter);
app.use('/api/shipments', shipmentRouter);

app.use(function (err, req, res, next) {
  console.error(err.stack) // log error stack trace to the console
  res.status(500).send('Something broke!')
});

module.exports = app;
