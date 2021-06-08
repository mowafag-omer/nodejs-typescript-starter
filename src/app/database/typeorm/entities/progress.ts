import { Entity,  ManyToOne, BaseEntity } from "typeorm";
import { Level } from "./level";
import { Skill } from "./skill";
import { Student } from "./student";

@Entity()
export class Progress extends BaseEntity {
  @ManyToOne(() => Student, (student) => student.progresses, { primary: true })
  student: Student;

  @ManyToOne(() => Skill, (skill) => skill.progresses, { primary: true })
  skill: Skill;

  @ManyToOne(() => Level, (level) => level.progresses, { primary: true })
  level: Level;
}
