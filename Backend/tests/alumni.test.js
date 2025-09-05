const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/app');
const User = require('../src/models/User');
const Alumni = require('../src/models/Alumni');

let token;
beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/alumni_test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  await User.deleteMany({});
  const res = await request(app).post('/api/auth/register').send({
    name: 'A', email: 'a@example.com', password: 'password'
  });
  token = res.body.token;
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.disconnect();
});

describe('Alumni', () => {
  afterEach(async () => {
    await Alumni.deleteMany({});
  });

  test('create and fetch alumni', async () => {
    const created = await request(app).post('/api/alumni').set('Authorization', `Bearer ${token}`).send({
      name: 'John Doe', batch: '2018-22', branch: 'CSE'
    });
    expect(created.status).toBe(201);
    const list = await request(app).get('/api/alumni');
    expect(list.status).toBe(200);
    expect(list.body.length).toBe(1);
    expect(list.body[0].name).toBe('John Doe');
  });
});
