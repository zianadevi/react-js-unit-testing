import {USER_INFO_ACTION} from "../../constants";

const userInfoInitialState = {
    name: '',
}

export function userInfoReducer(state = userInfoInitialState, action) {
    switch (action.type) {
        case USER_INFO_ACTION.SET_USER_INFO:
            return Object.assign({}, state, {
                name: action.payload.name
            })
        default:
            return state
    }
}