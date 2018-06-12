const router = require("express").Router();
const breweryRoutes = require("./breweries");
const adminRoutes = require("./admin");
const breweryUpdateRoutes = require("./breweryUpdate");
const beerSearchRoutes = require("./beerSearch");
// const userRoutes = require("./user");

router.use("/breweries", breweryRoutes);
router.use("/admin", adminRoutes);
router.use("/breweryUpdate", breweryUpdateRoutes);
router.use("/beerSearch", beerSearchRoutes);
// router.use("/user", userRoutes);

module.exports = router;
