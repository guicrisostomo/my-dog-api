import express from "express";
import cors from "cors";
import ipConfigRoute from "./routes/ip-config.routes";
import router from "./routes";
import weightRouter from "./routes/weight.router";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());

app.use(router);
app.use("/api/", ipConfigRoute);
app.use("/api/", weightRouter);

module.exports = app;

export default app;