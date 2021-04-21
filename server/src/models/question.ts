import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, UpdateDateColumn} from "typeorm";

@Entity()
export class Question{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    question!: string;

    @Column("jsonb")
    answers!: string[];

    @Column()
    correctAnswer!: number;
}