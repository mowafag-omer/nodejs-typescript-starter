import { Login } from "./login"
import { Request, Response } from "express"
import { RequestLoginDto } from './loginDto'

export class LoginController {
  private useCase: Login;

  constructor(login: Login) {
    this.useCase = login;
  }

  public async execute(req: Request, res: Response) {

    
    try {
      const requestUserDto = new RequestLoginDto(req.body)
      const dtoErrors = await requestUserDto.isValid(requestUserDto)
  
      !!dtoErrors && res.status(400).json(dtoErrors)

      const result = await this.useCase.execute(req.body)

      if (!result.success) { 
        return res.status(400).json(result.message)
      }

      let data;
      if (result.payload) {
        const { id, password, ...userWithoutPasswordAndId } = result.payload.user
        console.log('user controller without id and password', userWithoutPasswordAndId);
        data = userWithoutPasswordAndId
      }
      
      return res.cookie('token', result.payload?.token,{ maxAge: 24 * 60 * 60 })
        .status(200).json(data) 
    } 
    catch (error) {
      return res.status(401).json("something went wrong !")
    }
  }
}
