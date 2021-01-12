import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import user from "./user"
import pages from "./pages"
import playlist from "./playlist"
import quiz from "./quiz"
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
    quiz
});

const persistedReducer = persistReducer(persistConfig, reducers);
export default persistedReducer;