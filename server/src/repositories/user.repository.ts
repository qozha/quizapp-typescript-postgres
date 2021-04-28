import { getRepository } from "typeorm";
import {User} from "../models"

export interface IUserPayload{
    username: string
}



export const createUser = async(payload: IUserPayload): Promise<User> =>{
    const userRepository = getRepository(User);

    const user = new User();
    

    return userRepository.save({
        ...user,
        ...payload
    })
}

export const deleteUser = async(id: number): Promise<User | null> => {
    const quizRepository = getRepository(User);
    const quiz = await quizRepository.findOne({id: id});

    if(!quiz) return null

    quizRepository.delete({id: id});
    return quiz;
}

export const getUsers = async(): Promise<Array<User>> =>{
    const attemptRepository = getRepository(User);
    return attemptRepository.find();
}

export const getUser = async(id: number): Promise<User | null> =>{
    const attemptRepository = getRepository(User);

    const attempt = await attemptRepository.findOne({id: id});

    if(!attempt) return null;
    return attempt;
}