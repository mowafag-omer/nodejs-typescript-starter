import { SkillRepo } from "../../skillRepo";

export class GetSkill {
  private skillRepo: SkillRepo;

  constructor(skillRepo: SkillRepo) {
    this.skillRepo = skillRepo
  }
    
  public async execute(id: number) {
    return await this.skillRepo.get(id)
  }
}