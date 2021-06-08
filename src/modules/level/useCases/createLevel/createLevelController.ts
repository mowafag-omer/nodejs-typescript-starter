import { CreateLevel } from "./createLevel"
import { Request, Response } from "express"

export class CreateLevelController {
  private useCase: CreateLevel;

  constructor(createLevel: CreateLevel) {
    this.useCase = createLevel;
  }

  public async execute(req: Request, res: Response) {
    const {number, name} = req.body;

    Object.values({number, name}).forEach((elm, index): any => {
      if (!elm) {
        return res.status(400).json({
          error: {
            message: `${Object.keys({number, name})[index]} is required hina`
          }
        })
      }
    })

    try {
      const skill = await this.useCase.execute(req.body);

      return res.status(200).json(skill);

    } catch (error) {
      console.log(error);
      return res.status(400).json("something went wrong !")
    }
  }
}
