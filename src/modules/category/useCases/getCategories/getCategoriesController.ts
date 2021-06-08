import { Request, Response } from "express";
import { GetCategories } from './getCategories'

export class GetCategoriesController {
  private useCase: GetCategories

  constructor(getCategories: GetCategories) {
    this.useCase = getCategories
  }

  public async execute(_: Request, res: Response) {
    const categories = await this.useCase.execute()

    return res.status(200).json(categories)
  }
}