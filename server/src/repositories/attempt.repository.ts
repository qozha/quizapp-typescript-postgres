import config from "src/config/database";
import { Answer } from "src/models/asnwer";
import {getRepository} from "typeorm";
import {Attempt, Quiz, Question} from '../models';


export interface IAttemptPayload {
    quizID: number;
    submittedAnswers: Answer[];
    score: number;
}

export const createAttempt = async(payload: IAttemptPayload): Promise<Attempt> =>{
    const quizRepository = getRepository(Quiz);
    const attemptRepository = getRepository(Attempt);
    const quiz = await quizRepository.findOne({id: payload.quizID});

    var i = 0;
    var score = 0;
    payload.submittedAnswers.forEach(element => {
        element.isCorrect ? score++ : score;
        i = i + 1;
    });

    payload.score = score;

    const attempt = new Attempt();
    

    return attemptRepository.save({
        ...attempt,
        ...payload
    })
}

export const getAttempts = async(): Promise<Array<Attempt>> =>{
    const attemptRepository = getRepository(Attempt);
    return attemptRepository.find();
}

export const getAttempt = async(id: number): Promise<Attempt | null> =>{
    const attemptRepository = getRepository(Attempt);

    const attempt = await attemptRepository.findOne();

    if(!attempt) return null;
    return attempt;
}