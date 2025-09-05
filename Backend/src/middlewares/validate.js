const validate = (schema) => (req, res, next) => {
  try {
    // parse throws on error, returns safe data otherwise
    req.body = schema.parse(req.body);
    next();
  } catch (err) {
    if (err.errors) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: err.errors.map((e) => ({
          field: e.path.join("."), // support nested fields
          message: e.message,
        })),
      });
    }
    // fallback for unexpected issues
    next(err);
  }
};

module.exports = validate;
