const User = require('../models/User');
const { signToken } = require('../utils/token');
const mailService = require('../services/mailService');
const { welcomeTemplate } = require('../utils/emailTemplates');

async function register(req, res) {
  const { name, email, password, graduationYear, city, role } = req.body;

  // Check existing email
  const existing = await User.findOne({ email });
  if (existing) {
    return res.status(400).json({ message: 'Email already registered' });
  }

  // Validate role
  if (!['admin', 'alumni'].includes(role)) {
    return res.status(400).json({ message: 'Role must be either admin or alumni' });
  }

  // Alumni must have extra fields
  if (role === 'alumni') {
    if (!graduationYear || !city) {
      return res.status(400).json({
        message: 'Graduation year and city are required for alumni',
      });
    }
  }

  // Create user
  const user = await User.create({
    name,
    email,
    password,
    graduationYear: role === 'alumni' ? graduationYear : undefined,
    city: role === 'alumni' ? city : undefined,
    role,
  });

  const token = signToken({ id: user._id, role: user.role });

  // Fire & forget welcome email
  mailService
    .sendMail({ to: user.email, ...welcomeTemplate(user.name) })
    .catch(() => {});

  res.status(201).json({
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      graduationYear: user.graduationYear,
      city: user.city,
    },
    token,
  });
}

async function login(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  const ok = await user.comparePassword(password);
  if (!ok) return res.status(400).json({ message: 'Invalid credentials' });

  const token = signToken({ id: user._id, role: user.role });

  res.json({
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      graduationYear: user.graduationYear,
      city: user.city,
    },
  });
}

async function me(req, res) {
  res.json({ user: req.user });
}

module.exports = { register, login, me };
