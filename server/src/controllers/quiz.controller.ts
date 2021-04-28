import { Get, Route, Tags,  Post, Body, Path, Delete, Put } from "tsoa";
import {Quiz} from '../models'
import {getQuiz, createQuiz, IQuizPayload, IQuestionPayload, getQuizzes, deleteQuiz, addQuestiontoQuiz} from '../repositories/quiz.repository';

@Route("quizzes")
@Tags("Quiz")
export default class QuizController{

    @Get("/")
    public async getQuizzes(): Promise<Array<Quiz>> {
        return getQuizzes();
    }

    @Get("/:id")
    public async getQuiz(@Path() id: string): Promise<Quiz | null>{
        return getQuiz(Number(id));
    }

    @Post("/")
    public async createQuiz(@Body() body : IQuizPayload): Promise<Quiz> {
        return createQuiz(body);
    }

    @Delete("/:id")
    public async deleteQuiz(@Path() id:string): Promise<Quiz | null>{
        return deleteQuiz(Number(id));
    }

    // @Put("/:id")
    // public async addQuestiontoQuiz(@Path() id:string, @Body() body: IQuestionPayload) : Promise<Quiz | null>{
    //     console.log(body)
    //     return addQuestiontoQuiz(Number(id), body);
    // }

    @Put("/:id")
    public async addQuestionstoQuiz(@Path() id:string, @Body() body: IQuestionPayload[]) : Promise<Quiz | null>{
        console.log(body)

        body.forEach(IQuestion => {
            const k = addQuestiontoQuiz(Number(id), IQuestion)
            while(!k){
            }
        });

        return getQuiz(Number(id));
    }


}