import { levelProps } from './levelTyes'

export class LevelRepo {
  private entities: any;

  constructor(entities: any){
    this.entities = entities;
  }

  public async create(levelProps: levelProps) {
    const levelEntity = this.entities.Level;

    return await levelEntity.create({
      number: levelProps.number,
      name: levelProps.name
    }).save()
  }
}