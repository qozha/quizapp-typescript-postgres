import { Question } from "../models";
import {getRepository} from "typeorm";
import {Quiz} from '../models';

export interface IQuizPayload {
    quizname: string;
    questions: Question[];
}

export interface IQuestionPayload{
    question: string;
    answers: string[];
    correctAnswer: number;
}

export const getQuizzes = async() :Promise<Array<Quiz>> => {
    const quizRepository = getRepository(Quiz);
    return quizRepository.find();
}

export const createQuiz = async(payload: IQuizPayload) :Promise<Quiz> =>{
    const quizRepository = getRepository(Quiz);
    const quiz = new Quiz();

    return quizRepository.save({
        ...quiz,
        ...payload
    })
}

export const getQuiz = async (id: number) :Promise<Quiz | null> =>{
    const quizRepository = getRepository(Quiz);
    const quiz = await quizRepository.findOne({id: id});
    
    if(!quiz) return null
    return quiz
}

export const deleteQuiz = async (id: number) :Promise<Quiz | null> =>{
    const quizRepository = getRepository(Quiz);
    const quiz = await quizRepository.findOne({id: id});

    if(!quiz) return null

    quizRepository.delete({id: id});
    return quiz;
}

export const addQuestiontoQuiz = async (id: number, payload: IQuestionPayload):Promise<Quiz | null> => {
    const quizRepository = getRepository(Quiz);
    const quiz = await quizRepository.findOne({id: id});

    if(!quiz) return null;

    const question = new Question();

    quiz.questions.push({...question, ...payload});

    return quizRepository.save(quiz);

} 