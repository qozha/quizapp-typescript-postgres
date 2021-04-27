import { Get, Route, Tags,  Post, Body, Path, Delete, Put } from "tsoa";
import {Attempt} from '../models'
import { createAttempt, deleteAttempt, getAttempt, getAttempts, IAttemptPayload, IQuestionAttemptPayload, updateAttempt, deleteAllAttempts } from '../repositories/attempt.repository';

@Route("attempts")
@Tags("Attempt")
export default class QuizController{
    deleteAllAttempts() {
        return deleteAllAttempts()
    }

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

    @Put("/attempts/:id")
    public async updateAttempt(@Path() id: string, @Body() body: IQuestionAttemptPayload): Promise<Attempt | null>{
        return updateAttempt(Number(id), body);
    }

    @Delete("/attempts/:id")
    public async deleteAttempt(@Path() id: string): Promise<Attempt | null> {
        return deleteAttempt(Number(id))
    }
}