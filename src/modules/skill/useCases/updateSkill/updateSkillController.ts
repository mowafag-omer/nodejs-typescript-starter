import { UpdateSkill } from "./updateSkill";
import { Request, Response } from "express";

export class UpdateSkillController {
  private useCase: UpdateSkill;

  constructor(updateskill: UpdateSkill) {
    this.useCase = updateskill;
  }

  public async execute(req: Request, res: Response) {
    // We get the body
    const id: number = +req.params.id;
    const { name, description, categoryId } = req.body
    console.log(req.body);

    // If the body is not valid, we return a 400
    if (!name) {
      return res.status(400).json({
        error: {
          message: "Name is required",
        },
      });
    }

    if (!description) {
      return res.status(400).json({
        error: {
          message: "Description is required",
        },
      });
    }

    if (!categoryId) {
      return res.status(400).json({
        error: {
          message: "category id is required"
        }
      });
    }

    

    try {
      const skill = await this.useCase.execute(id, req.body);
  
      return res.status(200).json(skill);
    } 
    catch (error) {
      return res.status(400).json("Something went wrong, may be this skill doesn't exist.")
    }
  }
}
