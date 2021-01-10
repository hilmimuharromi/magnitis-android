const initialState = {
    data: [],
    loading: false
}

export default function EditorReducer(state = initialState, action) {

    if (action.type === 'SET_DATA_PLAYLIST') {
        return {
            ...state,
            data: action.payload
        };
    } else if (action.type === 'SET_LOADING_PLAYLIST') {
        return {
            ...state,
            loading: action.payload
        };
    }
    return state
}