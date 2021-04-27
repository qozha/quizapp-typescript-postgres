import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { Answer } from "./answer";
import {Quiz} from './index'
import { QuestionAttempt } from "./questionAttempt";


@Entity()
export class Attempt{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    quizID!: number;

    @Column("json")
    questionAttempts!: QuestionAttempt[];

    @Column()
    score!: number;

}


