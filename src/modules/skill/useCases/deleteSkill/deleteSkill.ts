import { SkillRepo } from "../../skillRepo";

export class DeleteSkill {
  private skillRepo: SkillRepo

  constructor(skillRepo: SkillRepo) {
    this.skillRepo = skillRepo
  }

  public async execute(id: number) {
    return await this.skillRepo.delete(id)
  }
}