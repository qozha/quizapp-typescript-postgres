interface IQuiz {
    id: string
    quizname: string
    questions: IQuestion[]
}

interface IAttempt {
    id: number
    quizID: number
    submittedAnswers: number[]
    score: number
}

interface IQuestion {
    id: string
    question: string
    answers: string[]
    correctAnswer: string
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
    message: string
    status: string
    attempt: IAttempt
}

type QuizProps = {
    quiz: IQuiz
}