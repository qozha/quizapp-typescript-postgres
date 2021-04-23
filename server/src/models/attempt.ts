import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { Answer } from "./asnwer";
import {Quiz} from './index'


@Entity()
export class Attempt{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    quizID!: number;

    @Column("json")
    submittedAnswers!: Answer[];

    @Column()
    score!: number;

}


