//UseCase -> Service -> de la logique
import { SkillRepo } from "../../skillRepo";
import { skillProps } from "../../skillTypes";

export class UpdateSkill {
  private skillRepo: SkillRepo;

  constructor(skillRepo: SkillRepo) {
    this.skillRepo = skillRepo;
  }

  public async execute(id: number, props: skillProps) {
    return await this.skillRepo.update(id, props);
  }
}
