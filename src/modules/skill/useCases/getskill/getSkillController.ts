import { Request, Response } from "express";
import { GetSkill } from './getSkill'

export class GetSkillController {
  private useCase: GetSkill

  constructor(getSkill: GetSkill) {
    this.useCase = getSkill
  }

  public async execute(req: Request, res: Response) {
    const id: number = +req.params.id 
   
    try {
      const skill = await this.useCase.execute(id)

      typeof skill === "undefined" &&
        res.status(404).json("This skill doesn't existe !")

      return res.status(200).json(skill)
    } 
    catch (error) {
      return res.status(400).json(error.message)
    }
    
  }
}