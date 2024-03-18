const express = require("express");
const storyRoutes = require("../utils/routes/story.route");
const lullabyRoutes = require("../utils/routes/lullaby.route");

const routerStory = express.Router();
const routerLullaby = express.Router();

routerStory.use("/stories", storyRoutes);
routerLullaby.use("/lullabies", lullabyRoutes);

module.exports = { routerStory, routerLullaby };