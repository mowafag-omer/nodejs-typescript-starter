import { Router } from "express";
import { createUserController } from "./useCases/createUser";
import { deleteUserController } from "./useCases/deleteUser";
import { getUserController } from "./useCases/getUser";
import { getUsersController } from "./useCases/getUsers";
import { updateUserController } from "./useCases/updateUser";

const userRouter: Router = Router();

userRouter.post("/create", (req, res) => createUserController.execute(req, res));
userRouter.get("/getAll", (req, res) => getUsersController.execute(req, res));
userRouter.get("/get/:id", (req, res) => getUserController.execute(req, res));
userRouter.put("/update/:id", (req, res) => updateUserController.execute(req, res));
userRouter.delete("/delete/:id", (req, res) => deleteUserController.execute(req, res));

export { userRouter };
