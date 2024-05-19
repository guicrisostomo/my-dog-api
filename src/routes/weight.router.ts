const weightRouter = require("express-promise-router")();

import { getWeight, updateWeight } from "../controllers/weight.controller";

weightRouter.get("/weight", getWeight);
weightRouter.put("/weight/:id", updateWeight);

export default weightRouter;