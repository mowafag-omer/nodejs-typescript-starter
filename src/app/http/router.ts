import { Router, Request, Response } from "express";
import { skillRouter } from "../../modules/skill/skillRouter";
import { categoryRouter } from "../../modules/category/categoryRouter";
import { userRouter } from "../../modules/user/userRouter";

const v1Router: Router = Router();

v1Router.get("/", (_: Request, response: Response) => {
  response.json({ message: "Hello world !" });
});

v1Router.use("/skills", skillRouter);
v1Router.use("/categories", categoryRouter);
v1Router.use("/user", userRouter);

export { v1Router };
