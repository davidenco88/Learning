import { Router } from "express";

export const rootRouter = Router();

rootRouter.get("/", (req, res) => {
  res.status(200).json({ message: "Server is up and running" });
});
