const {products} = require("../fakeDB");

function list(){
  return products;
}

module.exports = {list};
