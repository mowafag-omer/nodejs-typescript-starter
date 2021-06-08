import { Request, Response } from "express";
import { DeleteUser } from "./deleteUser";

export class DeleteUserController {
  private useCase: DeleteUser

  constructor(deleteUser: DeleteUser) {
    this.useCase = deleteUser   
  }

  public async execute(req: Request, res: Response) {
    const id = +req.params.id
    
    try {
      const deletedUser = await this.useCase.execute(id)
    
      return res.status(200).json(deletedUser)
    } 
    catch (error) {
      return res.status(400).json(error.message)
    }  
  }  
}