import { Request, Response } from "express";
import { validate } from 'class-validator'
import { UpdateUser } from "./updateUser";
import { RequestCreateUserDto } from "../createUser/createUserDto";

export class UpdateUserController {
  private useCase: UpdateUser;

  constructor(updateUser: UpdateUser) {
    this.useCase = updateUser;
  }

  public async execute(req: Request, res: Response) {
    const id: number = +req.params.id;
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({
        error: {
          message: "email is required",
        },
      });
    }

    if (!password) {
      return res.status(400).json({
        error: {
          message: "password is required",
        },
      });
    }

    try {
      const requestUserDto = new RequestCreateUserDto({email, password})
      const errorsDto = await validate(requestUserDto)
      const user = await this.useCase.execute(id, req.body);
  
      return res.status(200).json(user);  
    } 
    catch (error) { 
      return res.status(400).json("something went wrong !")
    }
  }
}
