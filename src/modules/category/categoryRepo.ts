export class CategoryRepo {
    private entities: any

    constructor(entities: any) {
        //Category //User //Skill
        this.entities = entities
    }

    public async getCategories() {
        const CategoryEntity = this.entities.Category
        return await CategoryEntity.createAndSave({name: 'create a database'})
    }
}