import { Get, Route, Tags,  Post, Body, Path, Delete, Put } from "tsoa";
import {Attempt} from '../models'
import { createAttempt, getAttempt, getAttempts, IAttemptPayload } from '../repositories/attempt.repository';

@Route("attempts")
@Tags("Attempt")
export default class QuizController{

    @Get("/attempts")
    public async getAttempts(): Promise<Array<Attempt>> {
        return getAttempts();
    }

    @Get("/attempts/:id")
    public async getAttempt(@Path() id: string): Promise<Attempt | null>{
        return getAttempt(Number(id));
    }

    @Post("/attempts")
    public async createAttempt(@Body() body : IAttemptPayload): Promise<Attempt> {
        return createAttempt(body);
    }
}