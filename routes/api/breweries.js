const router = require("express").Router();
const controller = require("../../controllers/controller");

// Matches with "/api/breweries"
router.route("/")
  .get(controller.findAll)
  .post(controller.create);

// Matches with "/api/breweries/:id" 
router
  .route("/:breweryURL")
  .get(controller.findById)
  .post(controller.update)
  .delete(controller.remove)

module.exports = router;
