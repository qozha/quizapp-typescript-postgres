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

export const addAttempt = async(formData: IAttempt): Promise<AxiosResponse<ApiDataTypeAttempt>> => {
    try {
        const attempt: Omit<IAttempt, 'id'> = {
            quizID: formData.quizID,
            submittedAnswers: formData.submittedAnswers,
            score: 0
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