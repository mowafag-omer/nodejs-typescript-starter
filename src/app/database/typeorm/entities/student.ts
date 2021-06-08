import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Progress } from "./progress";
import { User } from "./user";

@Entity()
export class Student extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(() => Progress, (Progress) => Progress.student)
  progresses: Progress[];

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
