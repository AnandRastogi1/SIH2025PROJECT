const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/app');

let token;
beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/alumni_test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  await mongoose.connection.db.dropDatabase();
  const res = await request(app).post('/api/auth/register').send({
    name: 'JobPoster', email: 'job@example.com', password: 'password'
  });
  token = res.body.token;
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.disconnect();
});

test('post and list job', async () => {
  const post = await request(app).post('/api/jobs').set('Authorization', `Bearer ${token}`).send({
    title: 'Senior Dev', company: 'Acme Inc', description: 'Great role'
  });
  expect(post.status).toBe(201);
  const list = await request(app).get('/api/jobs');
  expect(list.status).toBe(200);
  expect(list.body.length).toBe(1);
  expect(list.body[0].title).toBe('Senior Dev');
});
