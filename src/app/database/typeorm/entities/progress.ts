import { Entity, PrimaryGeneratedColumn,  ManyToOne, BaseEntity } from "typeorm";
import { Level } from "./level";
import { Skill } from "./skill";
import { Student } from "./student";

@Entity()
export class Progress extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Student, (student) => student.progresses)
  student: Student;

  @ManyToOne(() => Skill, (skill) => skill.progresses)
  skill: Skill;

  @ManyToOne(() => Level, (level) => level.progresses)
  level: Level;
}
