interface IQuiz {
    id: string
    quizname: string
    questions: IQuestion[]
}

interface IQuestionAttempt{
    questionID: number,
    answer: IAnswer
}

interface IAttempt {
    id: number
    quizID: number;
    questionAttempts: IQuestionAttempt[];
    score: number;
}

interface IQuestion {
    id: string
    question: string
    answers: IAnswer[]
}

interface IAnswer {
    id: string
    answer: string
    isCorrect: boolean
}

type ApiDataTypeQ = {
    message: string
    status: string
    quizzes: IQuiz[]
    quiz?: IQuiz
}

type ApiDataTypeQSingle = {
    message: string
    status: string
    quiz: IQuiz
}

type ApiDataTypeAttempt = {
    id: number
    quizID: number;
    questionAttempts: IQuestionAttempt[];
    score: number;
}

type QuizProps = {
    quiz: IQuiz
}

type QuestionProps = {
    question: IQuestion
    attemptID: number
}

type AnswerProps = {
    answer: string
}