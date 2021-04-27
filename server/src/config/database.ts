import {ConnectionOptions} from 'typeorm';
import {Attempt, Question, Quiz, Answer} from '../models';


const config: ConnectionOptions = {
    type: "postgres",
    host: process.env.POSTGRES_HOST || "localhost",
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || "postgres",
    password: process.env.POSTGRES_PASSWORD || "postgres",
    database: process.env.POSTGRES_DB || "postgres",
    entities: [Quiz, Attempt, Question, Answer],
    synchronize: true,
}

export default config;