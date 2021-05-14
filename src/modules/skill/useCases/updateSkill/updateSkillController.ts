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

    // If the body is not valid, we return a 400
    Object.values({name, description, categoryId}).forEach((elm, index): any => {
      if (!elm) {
        return res.status(400).json({
          error: {
            message: `${Object.keys({name, description, categoryId})[index]} is required`
          }
        })
      }
    })
    
    try {
      const skill = await this.useCase.execute(id, req.body);
  
      return res.status(200).json(skill);
    } 
    catch (error) {
      return res.status(400).json("Something went wrong, may be this skill doesn't exist.")
    }
  }
}