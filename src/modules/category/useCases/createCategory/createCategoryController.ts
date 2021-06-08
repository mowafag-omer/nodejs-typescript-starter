import { CreateCategory } from "./createCategory";
import { Request, Response } from "express";
//Controller

export class CreateCategoryController {
  private useCase: CreateCategory;

  constructor(createCategory: CreateCategory) {
    this.useCase = createCategory;
  }

  public async execute(req: Request, res: Response) {
    const { name, description } = req.body;
    
    if (!name) {
      return res.status(400).json({
        error: {
          message: "Name is required",
        },
      });
    }

    if (!description) {
      return res.status(400).json({
        error: {
          message: "Description is required",
        },
      });
    }

    try {
      const categories = await this.useCase.execute(req.body);

      return res.status(200).json(categories);

    } catch (error) {
      return res.status(400).json(error.message)
    }
  }
}
