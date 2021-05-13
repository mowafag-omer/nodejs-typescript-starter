import { CategoryRepo } from "../../categoryRepo";

export class GetCategories {
  private categoryRepo: CategoryRepo;

  constructor(categoryRepo: CategoryRepo) {
    this.categoryRepo = categoryRepo
  }

  public async execute() {
    return await this.categoryRepo.getAll()
  }
}