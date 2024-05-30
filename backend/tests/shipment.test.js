const request = require('supertest');
const mongoose = require('mongoose');

const app = require('../app');
describe('Shipments API Endpoints', () => {
  beforeEach(async () => {
    mongoose.connect("mongodb://localhost:27017/homework_test");
    await db.createDummyData();
  });

  afterEach(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  it('should get all shipments', async () => {
    const res = await request(app)
      .get('/api/shipments')
      .expect('Content-Type', /json/)
      .expect(200);
    const shipments = res.body;
    expect(shipments).toBeInstanceOf(Array);
    expect(shipments).toHaveLength(1);
    expect(shipments[0]).toHaveProperty('companyName');
    expect(shipments[0].status).be.equal('created');
  });

  it.skip('should create a new shipment', async () => {
    const res = await request(app)
      .post('/api/shipments')
      .send({
        name: 'Test Shipment',
      })
      .expect('Content-Type', /json/)
      .expect(201);
  });
});
