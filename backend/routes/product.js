var express = require('express');
const {list} = require("../controllers/product");
var router = express.Router();

router.get('/', async (req, res, next) => {
    try {
      const products = await list();
      res.json(products);
    } catch (e) {
      //TODO logger here
      res.status(400).json('Can`t get products');
    }
  }
);

module.exports = router;
