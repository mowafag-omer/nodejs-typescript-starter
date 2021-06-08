import { Request, Response } from "express"
import { GetStudent } from "./getStudent"

export class GetStudentController {
  private useCase: GetStudent;

  constructor(getStudent: GetStudent) {
    this.useCase = getStudent;
  }

  public async execute(req: Request, res: Response) {
    const id: number= +req.params.id

    try {
      const student = await this.useCase.execute(id);

      return res.status(200).json(student);
    } 
    catch (error) {
      return res.status(400).json("something went wrong !")
    }
  }
}
