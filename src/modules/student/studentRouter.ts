import { Router } from "express";
import { createStudentController } from "./useCases/createStudent";
import { deleteStudentController } from "./useCases/deleteStudent";
import { getStudentController } from "./useCases/getStudent";
import { getStudentsController } from "./useCases/getStudents";
import { updateSkillController } from "../skill/useCases/updateSkill";

const studentRouter: Router = Router();

studentRouter.post("/create", (req, res) => createStudentController.execute(req, res));
studentRouter.get("/getAll", (req, res) => getStudentsController.execute(req, res));
studentRouter.get("/get/:id", (req, res) => getStudentController.execute(req, res));
studentRouter.put("/update/:id", (req, res) => updateSkillController.execute(req, res));
studentRouter.delete("/delete/:id", (req, res) => deleteStudentController.execute(req, res));

export { studentRouter };
