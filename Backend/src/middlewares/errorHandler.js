function errorHandler(err, req, res, next) {
  // Log the full error in dev, only essentials in production
  if (process.env.NODE_ENV === 'development') {
    console.error('❌ Error:', err);
  } else {
    console.error('❌ Error:', err.message);
  }

  const status = err.statusCode && Number.isInteger(err.statusCode) 
    ? err.statusCode 
    : 500;

  res.status(status).json({
    success: false,
    message: err.message || 'Internal Server Error',
    details: err.details || undefined,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
}

module.exports = errorHandler;
