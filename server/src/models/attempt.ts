import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {Quiz} from './index'


@Entity()
export class Attempt{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    quizID!: number;

    @Column("json")
    submittedAnswers!: number[];

    @Column()
    score!: number;

}


