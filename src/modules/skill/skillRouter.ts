import { Router } from "express";
import { createSkillController } from "./useCases/createSkill";
import { getSkillController } from "./useCases/getskill";
import { getSkillsController } from "./useCases/getSkills";
import { updateSkillController } from "./useCases/updateSkill";
import { deleteSkillController } from "./useCases/deleteSkill";

const skillRouter: Router = Router();

skillRouter.post('/create', (req, res) => createSkillController.execute(req, res))
skillRouter.get('/getAll', (req, res) => getSkillsController.execute(req, res))
skillRouter.get('/get/:id', (req, res) => getSkillController.execute(req, res))
skillRouter.put('/update/:id', (req, res) => updateSkillController.execute(req, res))
skillRouter.delete('/delete/:id', (req, res) => deleteSkillController.execute(req, res))

export { skillRouter };
