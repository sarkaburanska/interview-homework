const express = require('express');
const ShipmentController = require("../controllers/shipment");
const router = express.Router();

function isShipmentValid(shipment) {
  return shipment?.company_name && shipment?.shipment_date && shipment?.items?.length > 0;
}

router
  .post('/', function (req, res) {
    // create shipment
    if (isShipmentValid(req.body)) { // easy validation of incoming data
      const newShipment = ShipmentController.create(req.body);
      res.json(newShipment);
    } else {
      res.status(400).send('Bad Request');
    }
  })
  .put('/:shipmentId', function (req, res) {
    // update shipment
    if (req.params.shipmentId && isShipmentValid(req.body)) {
      const updated = ShipmentController.update(req.params.shipmentId, req.body);
      if (!updated) {
        res.status(404).send('Not Found');
      }
      res.json(updated);
    } else {
      res.status(400).send('Bad Request');
    }
  })
  .delete('/:shipmentId', function (req, res) {
    // delete shipment
    if (req.params.shipmentId) {
      ShipmentController.remove(req.params.shipmentId);
      res.send('Shipment deleted');
    } else {
      res.status(400).send('Bad Request');
    }
  })
  .get('/list', function (req, res) {
    // list of shipments
    res.json(ShipmentController.list());
  })
  .get('/:shipmentId/status', function (req, res) {
    // status change?
    res.send('respond with a resource');
  });

module.exports = router;