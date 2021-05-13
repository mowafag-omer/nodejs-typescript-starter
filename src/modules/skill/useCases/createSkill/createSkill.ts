import { SkillRepo } from "../../skillRepo";
import { skillProps } from "../../skillTypes";

export class CreateSkill {
  private skillRepo: SkillRepo;

  constructor(skillRepo: SkillRepo) {
    this.skillRepo = skillRepo
  }

  public async execute(props: skillProps) {
    return await this.skillRepo.create(props)
  }
}