  const express = require("express");
const {
    getApplications,
    createApplication
  } = require("../controllers/application.controller");
  const {
    validateApplication,
    validateApplicationFilter
  } = require("../validators/application.validator");

  const router = express.Router();

  router.get("/", validateApplicationFilter, getApplications);
  router.post("/", validateApplication, createApplication);

  module.exports = router;