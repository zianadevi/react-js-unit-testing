import {userInfoReducer} from "./userInfo/UserInfoReducer";
import {combineReducers, createStore} from "redux";

const rootReducer = combineReducers({
    userInfoReducer
})

export const setupStore = (initialState) => {
    return createStore(rootReducer, initialState);
}
