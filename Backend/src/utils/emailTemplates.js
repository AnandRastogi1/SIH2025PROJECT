function welcomeTemplate(name) {
  return {
    subject: 'Welcome to Alumni Network',
    html: `<p>Hi ${name},</p><p>Welcome to the Alumni Network. Stay in touch!</p>`
  };
}

function resetPasswordTemplate(link) {
  return {
    subject: 'Reset Your Password',
    html: `<p>Click <a href="${link}">here</a> to reset your password. If you didn't request this, ignore.</p>`
  };
}

module.exports = { welcomeTemplate, resetPasswordTemplate };
