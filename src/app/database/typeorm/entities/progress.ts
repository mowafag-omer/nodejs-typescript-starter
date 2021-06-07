import { Entity,  ManyToOne, BaseEntity } from "typeorm";
import { Level } from "./level";
import { Skill } from "./skill";
import { User } from "./user";

@Entity()
export class Progress extends BaseEntity {
  @ManyToOne(() => User, (user) => user.progresses)
  user: User;

  @ManyToOne(() => Skill, (skill) => skill.progresses)
  skill: Skill;

  @ManyToOne(() => Level, (level) => level.progresses)
  level: Level;
}
