const router = require("express").Router();
const characterRoutes = require("./characters");
const seriesRoutes = require("./series");
const notesRoutes = require("./notes");

// const heroinforoutes = require("./https://superheroapi.com/");


// api routes
router.use("/characters", characterRoutes);
router.use("/series", seriesRoutes);
router.use("/notes", notesRoutes);
// router.use("https://superheroapi.com/", heroinforoutes);
module.exports = router;