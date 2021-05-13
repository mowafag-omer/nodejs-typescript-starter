import { Request, Response } from "express";
import { GetCategory } from './getCategory'

export class GetCategoryController {
  private useCase: GetCategory

  constructor(getCategory: GetCategory) {
    this.useCase = getCategory
  }

  public async execute(req: Request, res: Response) {
    const id: number = +req.params.id 
    const category = await this.useCase.execute(id)
    console.log("Controller category result", category)

    return res.status(200).json(category)
  }
}