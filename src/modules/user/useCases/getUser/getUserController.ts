import { Request, Response } from "express"
import { GetUser } from "./getUser"

export class GetUserController {
  private useCase: GetUser;

  constructor(getUser: GetUser) {
    this.useCase = getUser;
  }

  public async execute(req: Request, res: Response) {
    const id: number= +req.params.id

    try {
      const user = await this.useCase.execute(id);

      return res.status(200).json(user);
    } 
    catch (error) {
      return res.status(400).json(error.message)
    }
  }
}
