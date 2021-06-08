import { CreateStudent } from "./createStudent"
import { Request, Response } from "express"
//Controller

export class CreateStudentController {
  private useCase: CreateStudent;

  constructor(createStudent: CreateStudent) {
    this.useCase = createStudent;
  }

  public async execute(req: Request, res: Response) {
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
      const skill = await this.useCase.execute({firstName, lastName, user});

      return res.status(200).json(skill);
    } 
    catch (error) {
      return res.status(400).json("something went wrong !")
    }
  }
}
