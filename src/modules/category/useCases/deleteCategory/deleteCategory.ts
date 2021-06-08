import { CategoryRepo } from "../../categoryRepo";

export class DeleteCategory {
  private categoryRepo: CategoryRepo

  constructor(categoryRepo: CategoryRepo) {
    this.categoryRepo = categoryRepo
  }

  public async execute(id: number) {
    return await this.categoryRepo.delete(id)
  }
}