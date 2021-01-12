const initialState = {
    data: "",
    loading: false
}

export default function EditorReducer(state = initialState, action) {

    if (action.type === 'SET_DATA_QUIZ') {
        return {
            ...state,
            data: action.payload
        };
    } else if (action.type === 'SET_LOADING_QUIZ') {
        return {
            ...state,
            loading: action.payload
        };
    }
    return state
}