const initialState = {
    data: "",
    loading: false
}

export default function EditorReducer(state = initialState, action) {

    if (action.type === 'SET_DATA_PAGE') {
        return {
            ...state,
            data: action.payload
        };
    } else if (action.type === 'SET_LOADING_PAGE') {
        return {
            ...state,
            loading: action.payload
        };
    }
    return state
}