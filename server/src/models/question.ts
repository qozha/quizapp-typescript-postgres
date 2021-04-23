import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, UpdateDateColumn} from "typeorm";
import { Answer } from "./asnwer";

@Entity()
export class Question{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    question!: string;

    @Column("json")
    answers!: Answer[];
}