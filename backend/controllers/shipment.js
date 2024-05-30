const Shipment = require('../models/shipment');
const ProductInShipment = require('../models/productInShipment');
const {STATUS} = require("../models/types");

async function create(shipment) {
  const newShipment = new Shipment({
    ...shipment,
    createdAt: new Date(),
    status: STATUS.CREATED
  });
  const items = await ProductInShipment.insertMany(shipment.items);
  newShipment.items = items.map(item => item._id);
  return Shipment.insertMany(newShipment);
}

async function update(shipmentId, shipment) {
  const original = await Shipment.findById(shipmentId);
  if (!original) {
    return;
  }
  const updated = {...original, ...shipment};
  return Shipment.updateOne(updated);
}

function remove(shipmentId) {
  Shipment.deleteOne({id: shipmentId});
}

function list() {
  return Shipment.find().populate('items');
}

module.exports = {create, update, remove, list};
