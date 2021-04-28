import axios, {AxiosResponse} from 'axios'

const baseUrl: string = 'http://localhost:8000'

export const getQuizzes = async() => {
    try {
        const quizzes: AxiosResponse<ApiDataTypeQ> = 
            await axios.get(baseUrl + '/quizzes');
         return quizzes;
    } catch(error) {
        console.log(error);
    }
}

export const getQuiz = async(id:string) => {
    try{
        const quiz: AxiosResponse<ApiDataTypeQSingle> = 
            await axios.get(baseUrl + `/quizzes/${id}`)
        return quiz
    }
    catch(error) {
        console.log(error);
    } 
}

export const createAttempt = async(quizID: number, username: string): Promise<AxiosResponse<ApiDataTypeAttempt>> => {
    try {
        const attempt: Omit<IAttempt, 'id'> = {
            quizID: quizID,
            questionAttempts: [],
            score: 0,
            username: username
        }
        console.log(attempt.quizID)

        const addedAttempt: AxiosResponse<ApiDataTypeAttempt> = 
            await axios.post(
                `${baseUrl}/attempts`, attempt
            ) 
        return addedAttempt;
    } catch(error) {
        throw new Error(error);
    }
}

export const updateQuestionAttempt = async(attemptID: string, formData: IQuestionAttempt): Promise<AxiosResponse<ApiDataTypeAttempt>> => {
    try {
        const attempt: Omit<IQuestionAttempt, 'id'> = {
            questionID: formData.questionID,
            answer: formData.answer
        }

        const updatedAttempt: AxiosResponse<ApiDataTypeAttempt> = 
            await axios.put(
                `${baseUrl}/attempts/${attemptID}`, attempt
            ) 
        return updatedAttempt;
    } catch(error) {
        throw new Error(error);
    }
}

export const getQuizAttempts = async(quizID: string) => {
    try {
        const attempts: AxiosResponse<ApiDataTypeQ> = 
            await axios.get(baseUrl + `/attempts/quiz/${quizID}`);
         return attempts;
    } catch(error) {
        console.log(error);
    }
}