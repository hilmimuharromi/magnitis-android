import { API_URL } from "@env"
import axios from "axios"
const GetPlaylist = (title) => {
    return async (dispatch) => {
        dispatch(SetLoading(true))
        try {
            const { data } = await axios.get(`${API_URL}/playlist/Magnitis`)
            if (data.status) {
                dispatch(SetDataPlaylist(data.data.contents))
            }
        } catch (e) {
            dispatch(SetDataPlaylist([]))
        } finally {
            dispatch(SetLoading(false))
        }
    }
}


const SetDataPlaylist = (data) => {
    return {
        type: 'SET_DATA_PLAYLIST', payload: data
    };
}
const SetLoading = (data) => {
    return { type: 'SET_LOADING_PLAYLIST', payload: data };
}


export {
    GetPlaylist,
    SetDataPlaylist
}