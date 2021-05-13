import { CreateSkill } from "./createSkill";
import { Request, Response } from "express";
//Controller

export class CreateSkillController {
  private useCase: CreateSkill;

  constructor(createSkill: CreateSkill) {
    this.useCase = createSkill;
  }

  public async execute(req: Request, res: Response) {
    const { name, description, categoryId } = req.body;

    Object.values({ name, description, categoryId })
      .forEach((elm: string | number, index): any => {
      if (!elm) {
        return res.status(400).json({
          error: {
            message: `${Object.keys({ name, description, categoryId })[index]} is required`
          }
        })
      }
    })

    try {
      const skill = await this.useCase.execute(req.body);

      return res.status(200).json(skill);

    } catch (error) {
      return res.status(400).json(error.message)
    }
  }
}
