import express from "express";
import cors from "cors";
import router from "./routes/ip-config.routes";
import { router as index } from "./routes";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());

app.use(index);
app.use("/api/", router);
