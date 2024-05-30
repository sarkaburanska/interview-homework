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
  const itemsToUpdate = shipment.items.filter(item => item._id);
  const itemsToCreate = shipment.items.filter(item => !item._id);

  const createdItem = await ProductInShipment.insertMany(itemsToCreate);
  await Promise.all(itemsToUpdate.map(item => ProductInShipment.updateOne({_id: item._id}, item)));

  //TODO solve when items update with missing item or quantity=0

  const ids = [...createdItem, ...itemsToUpdate].map(item => item._id);
  const updated = {...original.toObject(), ...shipment, items: ids};
  return Shipment.updateOne({_id: shipmentId}, updated);
}

function remove(shipmentId) {
  Shipment.deleteOne({id: shipmentId});
}

function list() {
  return Shipment.find().populate('items');
}

module.exports = {create, update, remove, list};
