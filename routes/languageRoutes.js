const express = require("express");
const languageController = require("../controller/languageController");
const joiSchemaValidation = require("../middleware/joiSchemaValidation");
const languageSchema = require("../apiSchema/languageSchemaValidator");
const adminValidation = require("../middleware/adminValidation");

const router = express.Router();

router.get("/", joiSchemaValidation.validateQueryParams(languageSchema.getLanguageQueryParams),  languageController.getAllLanguages);

router.post("/", adminValidation.validateAdminToken, joiSchemaValidation.validateBody(languageSchema.createLanguage), languageController.createLanguage);

router.get("/:name", adminValidation.validateAdminToken, joiSchemaValidation.validateQueryParams(languageSchema.getLanguageQuerryParams), languageController.findLanguageByName);

router.put("/:id",adminValidation.validateAdminToken, joiSchemaValidation.validateQueryParams(languageSchema.getLanguageQuerryParams), languageController.updateLanguage);

router.delete("/:id", adminValidation.validateAdminToken, joiSchemaValidation.validateQueryParams(languageSchema.getLanguageQuerryParams), languageController.deleteLanguage );

module.exports = router;