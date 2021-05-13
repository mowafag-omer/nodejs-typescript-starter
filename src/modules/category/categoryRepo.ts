import { categoryProps } from "./categoryTypes";

export class CategoryRepo {
  private entities: any;

  constructor(entities: any) {
    //Category //User //Skill
    this.entities = entities;
  }

  public async create(categoryProps: categoryProps) {
    const CategoryEntity = this.entities.Category;

    return await CategoryEntity.create({
      name: categoryProps.name,
      description: categoryProps.description,
    }).save();
  }

  public async getAll() {
    const CategoryEntity = this.entities.Category;

    return await CategoryEntity.find();
  }

  public async get(id: number) {
    const CategoryEntity = this.entities.Category;
    
    return await CategoryEntity.findOne({id});
  }

  public async update(id: number, categoryProps: categoryProps) {
    const CategoryEntity = this.entities.Category;
    const categoryToUpdate = await CategoryEntity.findOne({id});

    categoryToUpdate.name= categoryProps.name
    categoryToUpdate.description= categoryProps.description
    
    return await CategoryEntity.save(categoryToUpdate);
  }

  public async delete(id: number) {
    const CategoryEntity = this.entities.Category;

    const categoryToDelete = await CategoryEntity.findOne({id});
    
    return await CategoryEntity.remove(categoryToDelete);
  }
}
