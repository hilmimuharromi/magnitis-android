const SetDataQuiz = (data) => {
    return {
        type: 'SET_DATA_QUIZ', payload: data
    };
}
const SetLoading = (data) => {
    return { type: 'SET_LOADING_DATA_QUIZ', payload: data };
}


export {
   SetDataQuiz
}