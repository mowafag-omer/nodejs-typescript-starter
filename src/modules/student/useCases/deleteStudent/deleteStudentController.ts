import { Request, Response } from "express";
import { DeleteStudent } from "./deleteStudent";

export class DeleteStudentController {
  private useCase: DeleteStudent

  constructor(deleteStudent: DeleteStudent) {
    this.useCase = deleteStudent   
  }

  public async execute(req: Request, res: Response) {
    const id = +req.params.id
    
    try {
      const deletedStudent = await this.useCase.execute(id)
    
      return res.status(200).json(deletedStudent)
    } 
    catch (error) {
      return res.status(400).json("something went wrong !")
    }  
  }  
}