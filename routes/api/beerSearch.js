const router = require("express").Router();
const controller = require("../../controllers/controller");

// Matches with "/api/admin"
router.route("/")
  .get(controller.findAll)

// Matches with "/api/admin/:id" 
router.route("/:id")
  .get(controller.findById)
  .get(controller.findBeer)

module.exports = router;