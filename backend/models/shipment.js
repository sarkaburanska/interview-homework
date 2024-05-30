const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const shipmentSchema = new Schema({
  id: ObjectId,
  companyName: {type: String, required: true},
  status: {type: String, required: true},
  createdAt: {type: Date, required: true},
  shipmentDate: {type: Date, required: true},
  items: [{type: Schema.Types.ObjectId, ref: 'productInShipment'}],
});

module.exports = mongoose.model('shipment', shipmentSchema);
