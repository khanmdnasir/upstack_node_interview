const Joi = require("joi");

const jobSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  location: Joi.string().required(),
  salaryRange: Joi.string().required()
});

const validateJob = (req, res, next) => {
  const { error } = jobSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({
      error_type: "validation_error",
      errors: error.details.map((err) => err.message),
    });
  }
  next();
};

const jobFilterSchema = Joi.object({
  title: Joi.string(),
  location: Joi.string(),
  salaryRange: Joi.string(),
});

const validateJobFilter = (req, res, next) => {
  const { error } = jobFilterSchema.validate(req.query, { abortEarly: false });
  if (error) {
    return res.status(400).json({
      error_type: "validation_error",
      errors: error.details.map((err) => err.message),
    });
  }
  next();
};

module.exports = { validateJob, validateJobFilter };