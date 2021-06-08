import { Request, Response } from "express";
import { DeleteSkill } from "./deleteSkill";

export class DeleteSkillController {
  private useCase: DeleteSkill

  constructor(deleteSkill: DeleteSkill) {
    this.useCase = deleteSkill   
  }

  public async execute(req: Request, res: Response) {
    const id = +req.params.id
    
    try {
      const deletedSkill = await this.useCase.execute(id)
    
      return res.status(200).json(deletedSkill)
    } 
    catch (error) {
      return res.status(400).json("something went wrong !")
    }  
  }  
}