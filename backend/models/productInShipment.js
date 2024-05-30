const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductInShipmentSchema = new Schema({
  id: ObjectId,
  label: {type: String, required: true},
  quantity: {type: Number, required: true},
  price: {type: Number, required: true},
});

module.exports = mongoose.model('productInShipment', ProductInShipmentSchema);
