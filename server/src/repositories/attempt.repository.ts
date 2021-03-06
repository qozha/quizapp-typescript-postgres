import { Answer } from "src/models/answer";
import {getRepository} from "typeorm";
import {Attempt, Quiz, Question, QuestionAttempt} from '../models';


export interface IAttemptPayload {
    quizID: number;
    questionAttempts: QuestionAttempt[];
    score: number;
    username: string;
}

export interface IQuestionAttemptPayload{
    questionID: number;
    answer: Answer;
}

export const createAttempt = async(payload: IAttemptPayload): Promise<Attempt> =>{
    const quizRepository = getRepository(Quiz);
    const attemptRepository = getRepository(Attempt);
    const quiz = await quizRepository.findOne({id: payload.quizID});

    const attempt = new Attempt();
    

    return attemptRepository.save({
        ...attempt,
        ...payload
    })
}

export const deleteAttempt = async(id: number): Promise<Attempt | null> => {
    const quizRepository = getRepository(Attempt);
    const quiz = await quizRepository.findOne({id: id});

    if(!quiz) return null

    quizRepository.delete({id: id});
    return quiz;
}

export const getAttempts = async(): Promise<Array<Attempt>> =>{
    const attemptRepository = getRepository(Attempt);
    return attemptRepository.find();
}

export const getAttempt = async(id: number): Promise<Attempt | null> =>{
    const attemptRepository = getRepository(Attempt);

    const attempt = await attemptRepository.findOne({id: id});

    if(!attempt) return null;
    return attempt;
}

export const getQuizAttempts = async(id: number): Promise<Array<Attempt> | null> =>{
    const attemptRepository = getRepository(Attempt);

    const attempt = await attemptRepository.find({quizID: id});

    if(!attempt) return null;
    return attempt;
}


export const updateAttempt = async(id: number, payload: IQuestionAttemptPayload): Promise<Attempt | null> => {
    const attemptRepository = getRepository(Attempt);

    const attempt = await attemptRepository.findOne({id: id});

    if(!attempt) return null;

    var questionAttempts = attempt.questionAttempts

    var questionAttempt = questionAttempts.find(q => q.questionID == payload.questionID);

    if(!questionAttempt) questionAttempt = new QuestionAttempt()
    else questionAttempts = questionAttempts.filter((el)=> el.questionID != questionAttempt?.questionID);

    questionAttempt.questionID = payload.questionID;

    questionAttempt.answer = payload.answer;

    questionAttempts.push(questionAttempt)

    let score = 0

    questionAttempts.forEach(element => {
        element.answer.isCorrect ? score++ : score
    });

    return attemptRepository.save({id: id,quizID: attempt.quizID,questionAttempts: questionAttempts, score: score});
}

export const deleteAllAttempts = async(): Promise<void> => {

}