const express = require("express");
const adminController = require("../controller/adminController");
const joiSchemaValidation = require("../middleware/joiSchemaValidation");
const adminSchema = require("../apiSchema/adminUserSchemaValidator");
const tokenValidation = require("../middleware/tokenValidation")
const adminValidation = require("../middleware/adminValidation");

const router = express.Router();

router.get("/login", tokenValidation.validateToken, (req, res) => res.render('login'));
router.post("/login", tokenValidation.validateToken, joiSchemaValidation.validateBody(adminSchema.loginAdminSchema), adminController.adminlogin
);
router.get("/dashboard", adminValidation.validateAdminToken, adminController.adminDashboard);

module.exports = router;
