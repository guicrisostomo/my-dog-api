import express, { Response } from "express";

const router = express.Router();

router.get("/api", (req: any, res: Response) => {
  res.status(200).send({
    success: "true",
    message: "Seja bem-vindo(a) a API Node.js + PostgreSQL + Azure!",
    version: "1.0.0",
  });
});

export default router;
