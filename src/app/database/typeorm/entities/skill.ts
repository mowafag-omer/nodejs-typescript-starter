import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, BaseEntity } from "typeorm";
import { Category } from './category'
import { Progress } from "./progress";

@Entity()
export class Skill extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  
  @Column()
  description: string;

  @ManyToOne(() => Category, (category) => category.skills)
  category: Category;

  @OneToMany(() => Progress, (progress) => progress.skill)
  progresses: Progress[];
}
