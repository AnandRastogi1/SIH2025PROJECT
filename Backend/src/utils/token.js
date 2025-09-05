const jwt = require('jsonwebtoken');
const { JWT_SECRET = 'changeme', JWT_EXPIRES_IN = '7d' } = process.env;

function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

module.exports = { signToken, verifyToken };
