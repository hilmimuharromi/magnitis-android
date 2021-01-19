import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import user from "./user"
import pages from "./pages"
import playlist from "./playlist"
import quiz from "./quiz"
import quizResult from "./quizResult"
import petunjuk from "./petunjuk"
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // whitelist: [
    //     'FormMateri',
    // ],
    timeout: 2000
};

const reducers = combineReducers({
    user,
    pages,
    playlist,
    quiz,
    quizResult,
    petunjuk
});

const persistedReducer = persistReducer(persistConfig, reducers);
export default persistedReducer;