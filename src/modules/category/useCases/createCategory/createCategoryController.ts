import { CreateCategory } from './createCategory'
import { Request, Response } from 'express'
//Controller

export class CreateCategoryController {
    private useCase: CreateCategory;

    constructor(createCategory: CreateCategory) {
        this.useCase = createCategory;
    }

    public async execute(_: Request, res: Response) {
        const categories = await this.useCase.getCategories();
        console.log('Controller categories result', categories);

        res.status(200).json(categories);
    }
}