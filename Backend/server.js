require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/db');
const logger = require('./src/utils/logger');

const PORT = process.env.PORT || 5000;

async function start() {
  await connectDB(process.env.MONGO_URI || 'mongodb://localhost:27017/alumni_db');
  app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
}

start();
