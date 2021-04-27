import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, UpdateDateColumn} from "typeorm";
import { Answer } from "./answer";

@Entity()
export class QuestionAttempt{

    @Column()
    questionID!: number;

    @Column("json")
    answer!: Answer;
}