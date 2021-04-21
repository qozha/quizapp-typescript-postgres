import { Get, Route, Tags,  Post, Body, Path, Delete, Put } from "tsoa";
import {Attempt} from '../models'
import { createAttempt, getAttempt, getAttempts, IAttemptPayload } from '../repositories/attempt.repository';

@Route("attempts")
@Tags("Attempt")
export default class QuizController{

    @Get("/")
    public async getAttempts(): Promise<Array<Attempt>> {
        return getAttempts();
    }

    @Get("/:id")
    public async getAttempt(@Path() id: string): Promise<Attempt | null>{
        return getAttempt(Number(id));
    }

    @Post("/")
    public async createAttempt(@Body() body : IAttemptPayload): Promise<Attempt> {
        return createAttempt(body);
    }
}