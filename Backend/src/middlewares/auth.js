const { verifyToken } = require('../utils/token');
const User = require('../models/User');

// ✅ Protect middleware: ensure user is logged in
async function protect(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = verifyToken(token);

    // exclude password field
    const user = await User.findById(decoded.id).select('-password');
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user = user; // attach user to request
    next();
  } catch (err) {
    console.error('Auth error:', err.message);
    return res.status(401).json({ message: 'Token invalid or expired' });
  }
}

// ✅ Role-based authorization
function authorizeRoles(...roles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Not authenticated' });
    }
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: `Forbidden: requires role(s) ${roles.join(', ')}` });
    }
    next();
  };
}

module.exports = { protect, authorizeRoles };
