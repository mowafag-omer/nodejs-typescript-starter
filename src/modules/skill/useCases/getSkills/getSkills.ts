import { SkillRepo } from "../../skillRepo";

export class GetSkills {
  private skillRepo: SkillRepo;

  constructor(skillRepo: SkillRepo) {
    this.skillRepo = skillRepo
  }

  public async execute() {
    return await this.skillRepo.getAll()
  }
}