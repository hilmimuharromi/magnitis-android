const initialState = {
    data: [],
    loading: false
}

export default function ResultReducer(state = initialState, action) {

    if (action.type === 'SET_DATA_RESULT') {
        return {
            ...state,
            data: action.payload
        };
    } else if (action.type === 'SET_LOADING_RESULT') {
        return {
            ...state,
            loading: action.payload
        };
    }
    return state
}