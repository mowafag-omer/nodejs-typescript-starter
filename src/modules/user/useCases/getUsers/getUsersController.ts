import { Request, Response } from "express"
import { GetUsers } from "./getUsers"

export class GetUsersController {
  private useCase: GetUsers;

  constructor(getUsers: GetUsers) {
    this.useCase = getUsers;
  }

  public async execute(_: Request, res: Response) {
    try {
      const user = await this.useCase.execute();

      return res.status(200).json(user);
    } 
    catch (error) {
      return res.status(400).json(error.message)
    }
  }
}
