const router = require("express").Router();
const controller = require("../../controllers/controller");

// Matches with "/api/admin"
router.route("/")
  .get(controller.findAll)
  .post(controller.create);

// Matches with "/api/admin/:id" 
router
  .route("/:id")
  .get(controller.findById)
  .delete(controller.remove)
  .post(controller.updateBrewery)

module.exports = router;