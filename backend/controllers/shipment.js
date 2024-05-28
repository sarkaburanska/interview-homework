let {shipments, STATUS} = require("../fakeDB");

function create(shipment) {
  const newShipment = {
    ...shipment,
    id: `shipment-${shipments.length}`,
    created_at: new Date(),
    status: STATUS.CREATED
  };
  shipments.push(newShipment);
  return newShipment;
}

function update(shipmentId, shipment) {
  const original = shipments.find(shipment => shipment.id === shipmentId);
  if (!original) {
    return;
  }
  const index = shipments.indexOf(original);
  const updated = {...original, ...shipment};
  shipments[index] = updated;
  return updated;
}

function remove(shipmentId) {
  shipments = shipments.filter(item => item.id !== shipmentId);
}

function list() {
  return shipments;
}

module.exports = {create, update, remove, list};
