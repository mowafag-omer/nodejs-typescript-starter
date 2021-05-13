import { CreateCategory } from "./createCategory";
import { Request, Response } from "express";
//Controller

export class CreateCategoryController {
  private useCase: CreateCategory;

  constructor(createCategory: CreateCategory) {
    this.useCase = createCategory;
  }

  public async execute(req: Request, res: Response) {
    const { name, description } = req.body
    
    if (!name) {
      return res.status(400).json({
        error: {
          message: "Name is required"
        },
      });
    }

    if (!description) {
      return res.status(400).json({
        error: {
          message: "Description is required"
        }
      });
    }

    const categories = await this.useCase.execute(req.body)
    console.log("Controller categories result", categories)

    return res.status(200).json(categories)
  }
}
