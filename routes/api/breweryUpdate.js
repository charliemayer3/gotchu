const router = require("express").Router();
const controller = require("../../controllers/controller");

// Matches with "/api/breweryUpdate/:id" 
router
  .route("/:id")
  .get(controller.findById)
  .delete(controller.remove)
  .post(controller.updateBreweryInfo)

module.exports = router;