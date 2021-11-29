import { Router, Request, Response } from "express"
import { skillRouter } from "../../modules/skill/skillRouter"
import { categoryRouter } from "../../modules/category/categoryRouter"
import { userRouter } from "../../modules/user/userRouter"
import { levelRouter } from "../../modules/level/levelRouter"

const v1Router: Router = Router()

v1Router.get("/", (_: Request, response: Response) => {
  response.json("Skilltree API V1")
})

v1Router.use("/skills", skillRouter)
v1Router.use("/categories", categoryRouter)
v1Router.use("/users", userRouter)
v1Router.use("/levels", levelRouter)

export { v1Router }