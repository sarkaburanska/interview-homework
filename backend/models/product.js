const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productSchema = new Schema({
  id: ObjectId,
  label: {type: String, required: true},
  name: {type: String, required: true},
  quantity: {type: Number, required: true},
  price: {type: Number, required: true},
  unit: {type: String},
});

module.exports = mongoose.model('product', productSchema);
