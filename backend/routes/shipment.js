const express = require('express');
const ShipmentController = require("../controllers/shipment");
const {create, update, remove, list} = require("../controllers/shipment");
const router = express.Router();

function isShipmentValid(shipment) {
  return shipment?.companyName && shipment?.shipmentDate && shipment?.items?.length > 0;
}

router
  .post('/', async (req, res) => {
    // create shipment
    try {
      if (isShipmentValid(req.body)) { // easy validation of incoming data
        const newShipment = await create(req.body);
        res.status(201).json(newShipment);
      } else {
        res.status(404).send('Not Found');
      }
    } catch (e) {
      res.status(400).send('Bad Request');
    }
  })
  .put('/:shipmentId', async (req, res) => {
    // update shipment
    try {
      if (req.params.shipmentId && isShipmentValid(req.body)) {
        const updated = await update(req.params.shipmentId, req.body);
        if (!updated) {
          res.status(404).send('Not Found');
        }
        res.json(updated);
      } else {
        res.status(404).send('Not Found');
      }
    } catch (e) {
      res.status(400).send('Bad Request');
    }
  })
  .delete('/:shipmentId', async (req, res) => {
    // delete shipment
    try {
      if (req.params.shipmentId) {
        await remove(req.params.shipmentId);
        res.send('Shipment deleted');
      } else {
        res.status(404).send('Not Found');
      }
    } catch (e) {
      res.status(400).send('Bad Request');
    }
  })
  .get('/', async (req, res) => {
    try {
      const shipments = await list();
      res.json(shipments);
    } catch (e) {
      res.status(400).send('Bad Request');
    }
  });

module.exports = router;
