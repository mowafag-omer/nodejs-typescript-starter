import { Request, Response } from "express"
import { GetStudents } from "./getStudents"

export class GetStudentsController {
  private useCase: GetStudents;

  constructor(getStudents: GetStudents) {
    this.useCase = getStudents;
  }

  public async execute(_: Request, res: Response) {
    try {
      const student = await this.useCase.execute();

      return res.status(200).json(student);
    } 
    catch (error) {
      return res.status(400).json("something went wrong !")
    }
  }
}
