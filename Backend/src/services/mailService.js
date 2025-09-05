const transporter = require('../config/email');
const logger = require('../utils/logger');

async function sendMail({ to, subject, html }) {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html
    });
    logger.info('Email sent', info.messageId);
    return info;
  } catch (err) {
    logger.error('Email send failed', err);
    throw err;
  }
}

module.exports = { sendMail };
