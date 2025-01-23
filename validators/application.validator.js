const Joi = require("joi");

const applicationSchema = Joi.object({
  candidateName: Joi.string().required(),
  email: Joi.string().email().required(),
  jobId: Joi.string().required(),
});

const validateApplication = (req, res, next) => {
  const { error } = applicationSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({
      error_type: "validation_error",
      errors: error.details.map((err) => err.message),
    });
  }
  next();
};

const applicationFilterSchema = Joi.object({
  email: Joi.string(),
  jobId: Joi.string(),
});

const validateApplicationFilter = (req, res, next) => {
  const { error } = applicationFilterSchema.validate(req.query, { abortEarly: false });
  if (error) {
    return res.status(400).json({
      error_type: "validation_error",
      errors: error.details.map((err) => err.message),
    });
  }
  next();
};

module.exports = { validateApplication, validateApplicationFilter };