const Product = require('../models/product');

async function list() {
  return Product.find()
    .then((products) => {
      return products;
    })
    .catch((err) => console.log(err));
}

module.exports = {list};
