var express = require('express');
const {list} = require("../controllers/product");
var router = express.Router();

router.get('/', async (req, res, next) => {
    const products = await list();
    res.json(products);
  }
);

module.exports = router;
