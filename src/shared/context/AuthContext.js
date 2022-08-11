import {APP_TOKEN} from "../constants";
import {createContext} from "react";
import {useDependency} from "../hook/UseDependency";
import {useLocalStorage} from "../hook/UseLocalStorage";
import {useDispatch} from "react-redux";
import {setUserInfo} from "../state/userInfo/UserInfoAction";
import {UnauthorizedError} from "../errors/AppError";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const {loginService} = useDependency();
    const [token, setToken] = useLocalStorage(APP_TOKEN, null);
    const dispatch = useDispatch();

    const onLogin = async (userCred) => {
        try {
            const response = await loginService.doAuthenticate(userCred);
            if (response) {
                const user = await loginService.doGetUser();
                setToken(response.token);
                dispatch(setUserInfo(user.fullName));
                return true;
            } else {
                throw new UnauthorizedError();
            }
        } catch (e) {
            throw new UnauthorizedError();
        }
    };

    const onLogout = () => {
        setToken(null);
        dispatch(setUserInfo(''));
    };
    return <AuthContext.Provider value={{onLogin, onLogout}}>{children}</AuthContext.Provider>;
};
