import { Request, Response } from "express";
import { GetCategory } from './getCategory'

export class GetCategoryController {
  private useCase: GetCategory

  constructor(getCategory: GetCategory) {
    this.useCase = getCategory
  }

  public async execute(req: Request, res: Response) {
    const id: number = +req.params.id 
   
    try {
      const category = await this.useCase.execute(id)

      typeof category === "undefined" &&
        res.status(404).json("This category doesn't existe !")

      return res.status(200).json(category)
    } 
    catch (error) {
      return res.status(400).json(error.message)
    }
  }
}