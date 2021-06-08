import { Request, Response } from "express";
import { DeleteCategory } from "./deleteCategory";

export class DeleteCategoryController {
  private useCase: DeleteCategory

  constructor(deleteCategory: DeleteCategory) {
    this.useCase = deleteCategory   
  }

  public async execute(req: Request, res: Response) {
    const id = +req.params.id
    
    try {
      const deletedCategory = await this.useCase.execute(id)
    
      return res.status(200).json(deletedCategory)
    } 
    catch (error) {
      return res.status(400).json("something went wrong !")
    }  
  }  
}