import { Request, Response } from "express";
import { UpdateStudent } from "./updateStudent";

export class UpdateStudentController {
  private useCase: UpdateStudent;

  constructor(updateStudent: UpdateStudent) {
    this.useCase = updateStudent;
  }

  public async execute(req: Request, res: Response) {
    const id: number = +req.params.id;
    const {firstName, lastName, user} = req.body;

    Object.values({firstName, lastName, user}).forEach((elm, index): any => {
      if (!elm) {
        return res.status(400).json({
          error: {
            message: `${Object.keys({firstName, lastName, user})[index]} is required`
          }
        })
      }
    })

    try {
      const student = await this.useCase.execute(id, req.body);
  
      return res.status(200).json(student);  
    } 
    catch (error) { 
      return res.status(400).json("something went wrong !")
    }
  }
}
