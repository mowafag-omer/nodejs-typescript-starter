import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Skill } from './skill'

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Category, category => category.skills)
    skills: Skill[]
}