import { UpdateCategory } from "./updateCategory";
import { Request, Response } from "express";

export class UpdateCategoryController {
  private useCase: UpdateCategory;

  constructor(updateCategory: UpdateCategory) {
    this.useCase = updateCategory;
  }

  public async execute(req: Request, res: Response) {
    // We get the body
    const id: number = +req.params.id;
    const { name, description } = req.body;
    console.log(req.body);


    // If the body is not valid, we return a 400
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

    const category = await this.useCase.execute(id, req.body);
    console.log("Controller category result", category);

    return res.status(200).json(category);
  }
}
