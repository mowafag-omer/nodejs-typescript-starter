import { CreateUser } from "./createUser"
import { Request, Response } from "express"
//DTO
import { RequestCreateUserDto } from './createUserDto'
export class CreateUserController {
  private useCase: CreateUser;

  constructor(createUser: CreateUser) {
    this.useCase = createUser;
  }

  public async execute(req: Request, res: Response) {
    
    const requestUserDto = new RequestCreateUserDto(req.body)
    const dtoErrors = await requestUserDto.isValid(requestUserDto)

    !!dtoErrors && res.status(400).json(dtoErrors)

    try {
      const result = await this.useCase.execute(req.body);

      if (!result.success) {
        return res.status(400).json(result)
      }

      return res.status(201).json();
    } 
    catch (err) {
      return res.status(400).json("something went wrong !")
    }
  }
}
