import { Request, Response } from "express";
import { UpdateUser } from "./updateUser";

export class UpdateUserController {
  private useCase: UpdateUser;

  constructor(updateUser: UpdateUser) {
    this.useCase = updateUser;
  }

  public async execute(req: Request, res: Response) {
    const id: number = +req.params.id;
    const { firstName, lastName } = req.body;

    if (!firstName) {
      return res.status(400).json({
        error: {
          message: "firstName is required",
        },
      });
    }

    if (!lastName) {
      return res.status(400).json({
        error: {
          message: "lastName is required",
        },
      });
    }

    try {
      const user = await this.useCase.execute(id, req.body);
  
      return res.status(200).json(user);  
    } 
    catch (error) {
      return res.status(400).json("something went wrong !")
    }
  }
}
