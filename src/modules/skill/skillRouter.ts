import { Router } from "express";

const skillRouter: Router = Router();

skillRouter.get("/", (_, res) => {
  res.json("Skills");
});

export { skillRouter };
