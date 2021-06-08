import { skillProps } from "./skillTypes";

export class SkillRepo {
  private entities: any;

  constructor(entities: any) {
    //Category //User //Skill
    this.entities = entities;
  }

  public async create(skillProps: skillProps) {
    const SkillEntity = this.entities.Skill;

    return await SkillEntity.create({
      name: skillProps.name,
      description: skillProps.description,
      categoryId: +skillProps.categoryId
    }).save();
  }  

  public async getAll() {
    const skillEntity = this.entities.Skill;

    return await skillEntity.find();
  }

  public async get(id: number) {
    const skillEntity = this.entities.Skill;

    return await skillEntity.findOne({id});
  }

  public async update(id: number, skillProps: skillProps) {
    const skillEntity = this.entities.Skill;
    const skillToUpdate = await skillEntity.findOne({id});

    skillToUpdate.name= skillProps.name
    skillToUpdate.description= skillProps.description
    skillToUpdate.categoryId= +skillProps.categoryId
    
    return await skillEntity.save(skillToUpdate);
  }

  public async delete(id: number) {
    const SkillEntity = this.entities.Skill;

    const skillToDelete = await SkillEntity.findOne({id});
    
    return await SkillEntity.remove(skillToDelete);
  }
}