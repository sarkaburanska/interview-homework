var express = require('express');
const ProductController = require("../controllers/product");
const {products} = require("../fakeDB");
var router = express.Router();

router.get('/', function (req, res, next) {
  res.json(ProductController.list());
});

module.exports = router;
