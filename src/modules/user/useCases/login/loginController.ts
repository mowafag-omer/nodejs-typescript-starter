import { Login } from "./login"
import { Request, Response } from "express"
import { RequestLoginDto } from './loginDto'

export class LoginController {
  private useCase: Login;

  constructor(login: Login) {
    this.useCase = login;
  }

  public async execute(req: Request, res: Response) {

    const requestUserDto = new RequestLoginDto(req.body)
    const dtoErrors = await requestUserDto.isValid(requestUserDto)

    !!dtoErrors && res.status(400).json(dtoErrors)

    try {
      const result = await this.useCase.execute(req.body)

      if (!result.success) {
        console.log(result);
        
        return res.status(400).json(result)
      }
      
      return res.cookie('token', result.token,{ maxAge: 24 * 60 * 60 })
        .status(200).json() 
    } 
    catch (error) {
      return res.status(401).json("something went wrong !")
    }
  }
}
