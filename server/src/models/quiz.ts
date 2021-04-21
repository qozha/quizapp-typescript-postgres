import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, UpdateDateColumn} from "typeorm";
import {Question} from './question';

@Entity()
export class Quiz {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    quizname!: string;

    @Column("jsonb")
    questions!: Question[];

    //TODO add ids of people allowed to take the quiz?

}