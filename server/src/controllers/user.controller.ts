import { Get, Route, Tags,  Post, Body, Path, Delete} from "tsoa";
import {User} from '../models'
import { createUser, deleteUser, getUser, getUsers, IUserPayload} from '../repositories/user.repository';

@Route("attempts")
@Tags("User")
export default class QuizController{

    @Get("/attempts")
    public async getUsers(): Promise<Array<User>> {
        return getUsers();
    }

    @Get("/attempts/:id")
    public async getUser(@Path() id: string): Promise<User | null>{
        return getUser(Number(id));
    }

    @Post("/attempts")
    public async createUser(@Body() body : IUserPayload): Promise<User> {
        return createUser(body);
    }

    @Delete("/attempts/:id")
    public async deleteUser(@Path() id: string): Promise<User | null> {
        return deleteUser(Number(id))
    }
}