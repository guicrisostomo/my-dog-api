const router = require("express-promise-router")();

import { getWeight, updateWeight } from "../controllers/weight.controller";

router.get("/weight", getWeight);
router.put("/weight/:id", updateWeight);

export default router;