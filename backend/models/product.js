const mongoose = require('mongoose');
const {UNITS} = require("./types");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productSchema = new Schema({
  id: ObjectId,
  label: {type: String, required: true, length: 3},
  name: {type: String, required: true, length: 3, lowercase: true},
  quantity: {type: Number, required: true, min: 0},
  price: {type: Number, required: true, min: 0},
  unit: {type: String, lowercase: true, enum: UNITS},
});

module.exports = mongoose.model('product', productSchema);
