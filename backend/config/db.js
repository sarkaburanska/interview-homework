const mongoose = require("mongoose");
const {omit} = require('ramda');
const Product = require('../models/product');
const Shipment = require('../models/shipment');
const ProductInShipment = require('../models/productInShipment');
const {UNITS, STATUS} = require('../models/types');

var uri = "mongodb://localhost:27017/homework";

mongoose.connect(uri);

const connection = mongoose.connection;

createDummyData = async () => {
  console.log('createDummyData')
  try {
    const products = await Product.insertMany([
      {
        label: 'Product 1',
        name: 'product1',
        quantity: 4,
        price: 100,
        description: 'Description 1',
        unit: UNITS.LITER
      },
      {
        label: 'Product 2',
        name: 'product2',
        price: 200,
        quantity: 3,
        description: 'Description 2',
        unit: UNITS.KG,
      },
      {
        name: 'product3',
        label: 'Product 3',
        price: 300,
        quantity: 2,
        unit: UNITS.KG,
        description: 'Description 3',
      }
    ]);
    const productsForShipment = products.map(item => omit(['_id', 'name', 'unit'], ({
      ...item.toObject(),
      quantity: 1
    })));

    console.log('productsForShipment', productsForShipment)
    const productsInShipment = await ProductInShipment.insertMany(productsForShipment);
    // console.log('productsInShipment', productsInShipment);
    const shipments = await Shipment.insertMany([
      {
        companyName: 'Shipment 1',
        createdAt: new Date(),
        shipmentDate: new Date().setDate(new Date().getDate() + 7),
        items: productsInShipment,
        status: STATUS.CREATED
      },
    ]);

  } catch (err) {
    console.error(err);
  }
}

connection.once('open', async () => {
  console.log("MongoDB database connection established successfully");
  try {
    await createDummyData();

  } catch (err) {
    console.error(err);
  }
});

connection.once('close', async () => {
  await connection.db.dropDatabase();
  console.log('MongoDB database connection closed');
});

process.on('SIGINT', async function () {
  await connection.db.dropDatabase();
  console.log('MongoDB database dropped');
  process.exit(0);
});
