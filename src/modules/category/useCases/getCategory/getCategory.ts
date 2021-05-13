import { CategoryRepo } from "../../categoryRepo";

export class GetCategory {
  private categoryRepo: CategoryRepo;

  constructor(categoryRepo: CategoryRepo) {
    this.categoryRepo = categoryRepo
  }

  public async execute(id: number) {
    return await this.categoryRepo.get(id)
  }
}