import {USER_INFO_ACTION} from "../../constants";

export function setUserInfo(name) {
    return {
        type: USER_INFO_ACTION.SET_USER_INFO,
        payload: {
            name: name
        }
    }
}
