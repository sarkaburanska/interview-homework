const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductInShipmentSchema = new Schema({
  id: ObjectId,
  label: {type: String, required: true},
  quantity: {type: Number, required: true, min: 0},
  price: {type: Number, required: true, min: 0},
});

module.exports = mongoose.model('productInShipment', ProductInShipmentSchema);
