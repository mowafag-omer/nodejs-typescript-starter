//UseCase -> Service -> de la logique
import { CategoryRepo } from "../../categoryRepo";

export class CreateCategory {
    private categoryRepo: CategoryRepo;

    constructor(categoryRepo: CategoryRepo) {
        this.categoryRepo = categoryRepo
    }

    public async getCategories() {
        return await this.categoryRepo.getCategories();
    }
}