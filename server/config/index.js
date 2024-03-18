import { express } from "express";
import storyRoutes from "../utils/routes/story.route";
import lullabyRoutes from "../utils/routes/lullaby.route";

const routerStory = express.Router();
const routerLullaby = express.Router();

routerStory.use("/stories", storyRoutes);
routerLullaby.use("/lullabies", lullabyRoutes);

module.exports = { routerStory, routerLullaby };