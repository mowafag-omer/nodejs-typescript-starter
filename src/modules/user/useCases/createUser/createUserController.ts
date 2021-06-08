import { CreateUser } from "./createUser"
import { Request, Response } from "express"
//Controller

export class CreateUserController {
  private useCase: CreateUser;

  constructor(createUser: CreateUser) {
    this.useCase = createUser;
  }

  public async execute(req: Request, res: Response) {
    const { email, password } = req.body;

    Object.values({ email, password }).forEach((elm, index): any => {
      if (!elm) {
        return res.status(400).json({
          error: {
            message: `${Object.keys({ email, password })[index]} is required`
          }
        })
      }
    })

    try {
      const skill = await this.useCase.execute(req.body);

      return res.status(200).json(skill);
    } 
    catch (error) {
      return res.status(400).json("something went wrong !")
    }
  }
}
