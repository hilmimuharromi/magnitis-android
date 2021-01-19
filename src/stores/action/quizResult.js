import { API_URL } from "@env"
import axios from "axios"

const GetQuizResult = (quiz, user) => {
    return async (dispatch) => {
        dispatch(SetLoading(true))
        try {
            const { data } = await axios.get(`${API_URL}/resultquiz/${quiz}/${user}`)
            if (data) {
                dispatch(SetDataQuiz(data))
            }
        } catch (e) {
            dispatch(SetDataQuiz([]))
        } finally {
            dispatch(SetLoading(false))
        }
    }
}


const SetDataQuiz = (data) => {
    return {
        type: 'SET_DATA_RESULT', payload: data
    };
}
const SetLoading = (data) => {
    return { type: 'SET_LOADING_DATA_RESULT', payload: data };
}


export {
    GetQuizResult
}