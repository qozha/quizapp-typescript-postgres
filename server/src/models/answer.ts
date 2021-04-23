import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, UpdateDateColumn} from "typeorm";

@Entity()
export class Answer{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    answer!: string;

    @Column()
    isCorrect!: boolean;
}