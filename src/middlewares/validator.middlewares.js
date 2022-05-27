const validator = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validate(req.body, { abortEarly: false, stripUnknown: true });

      return next();
    } catch (err) {
      return res.status(400).json({ message: err.message, errors: err.errors });
    }
  };
};

module.exports = validator;
