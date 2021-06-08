import { Request, Response } from "express";
import { GetSkills } from "./getSkills";

export class GetSkillsController {
  private useCase: GetSkills;

  constructor(getSkills: GetSkills) {
    this.useCase = getSkills;
  }

  public async execute(_: Request, res: Response) {
    try {
      const skills = await this.useCase.execute();

      return res.status(200).json(skills);
    } 
    catch (error) {
      return res.status(400).json(error.message);
    }
  }
}
