import { API_URL } from "@env"
import axios from "axios"
const GetPage = (title) => {
    // console.log("masuk action", title)
    return async (dispatch) => {
        dispatch(SetLoading(true))
        try {
            const { data } = await axios.get(`${API_URL}/page/${title}`)
            if (data.status) {
                dispatch(SetDataPage(data.data.content))
                // console.log("get page", data)
            }
        } catch (e) {
            dispatch(SetDataPage("<p>pull to refresh...<p>"))
            // console.log("error page", e)
        } finally {
            dispatch(SetLoading(false))
        }
    }
}


const SetDataPage = (data) => {
    return {
        type: 'SET_DATA_PAGE', payload: data
    };
}
const SetLoading = (data) => {
    return { type: 'SET_LOADING_PAGE', payload: data };
}


export {
    GetPage,
    SetDataPage,
    SetLoading
}