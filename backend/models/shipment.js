const mongoose = require('mongoose');
const {STATUS} = require("./types");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const shipmentSchema = new Schema({
  id: ObjectId,
  companyName: {type: String, required: true, length: 3},
  status: {type: String, required: true, lowercase: true, enum: STATUS},
  createdAt: {type: Date, required: true},
  shipmentDate: {
    type: Date, required: true, validate: [dateValidator, '{PATH} expects a future date.']
  },
  items: {
    type: [{type: Schema.Types.ObjectId, ref: 'productInShipment'}],
    validate: [arrayLimit, '{PATH} expects at least 1 item.']
  },
});

function arrayLimit(val) {
  return val.length > 0;
}

function dateValidator(val) {
  return val > new Date();
}

module.exports = mongoose.model('shipment', shipmentSchema);
