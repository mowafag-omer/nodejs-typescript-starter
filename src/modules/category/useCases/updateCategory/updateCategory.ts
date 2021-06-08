//UseCase -> Service -> de la logique
import { CategoryRepo } from "../../categoryRepo";
import { categoryProps } from "../../categoryTypes";

export class UpdateCategory {
  private categoryRepo: CategoryRepo;

  constructor(categoryRepo: CategoryRepo) {
    this.categoryRepo = categoryRepo;
  }

  public async execute(id: number, props: categoryProps) {
    return await this.categoryRepo.update(id, props);
  }
}
