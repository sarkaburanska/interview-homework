const UNITS = {
  KG: 'kg',
  LITER: 'l',
}

const STATUS = {
  CREATED: 'CREATED',
  PREPARED: 'PREPARED',
  SHIPPED: 'SHIPPED',
}
const product1 = {
  id: 1,
  name: 'apple1', // unique identifier
  label: 'Apple',
  quantity: 10,
  price: 5.5,
  unit: UNITS.KG
};
const product2 = {
  id: 2,
  name: 'apple_juice1',
  label: 'Apple juice',
  quantity: 80,
  price: 12,
  unit: UNITS.LITER,
};

const product3 = {
  id: 3,
  name: 'orange1',
  label: 'Orange',
  quantity: 5,
  price: 10.8,
  unit: UNITS.KG
};

const products = [product1, product2, product3];

const newShipment = {
  id: 1,
  companyName: 'DHL',
  shipmentDate: '2024-06-26T10:46:35.437Z',
  items: [{
    name: 'apple1',
    label: 'Apple',
    quantity: 10,
    price: 5.5,
    unit: UNITS.KG
  },
    {
      name: 'orange1',
      label: 'Orange',
      quantity: 5,
      price: 10.8,
      unit: UNITS.KG
    }
  ]
};

const shipments = [];

module.exports = {products, shipments, STATUS, UNITS};
