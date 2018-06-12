const router = require("express").Router();
const controller = require("../../controllers/controller");

// Matches with "/api/admin"
router.route("/")
  .post(controller.createUser);


module.exports = router;