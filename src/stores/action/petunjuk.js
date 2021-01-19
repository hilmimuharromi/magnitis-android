import { API_URL } from "@env"
import axios from "axios"
const GetPetunjuk = () => {
    return async (dispatch) => {
        dispatch(SetLoading(true))
        try {
            const { data } = await axios.get(`${API_URL}/petunjuk`)
            if (data) {
                let images = []
                data.map((item) => {
                    return images.push(item.imageUrl)
                })
                dispatch(SetDataPetunjuk(images))
            }

        } catch (e) {
            dispatch(SetDataPetunjuk([]))
        } finally {
            dispatch(SetLoading(false))
        }
    }
}


const SetDataPetunjuk = (data) => {
    return {
        type: 'SET_DATA_PETUNJUK', payload: data
    };
}
const SetLoading = (data) => {
    return { type: 'SET_LOADING_PETUNJUK', payload: data };
}


export {
    GetPetunjuk
}