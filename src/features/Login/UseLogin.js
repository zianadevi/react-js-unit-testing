import {useState} from "react";
import useViewState from "../../shared/hook/UseViewState";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../shared/hook/UseAuth";
import {RequiredFieldError, UnauthorizedError} from "../../shared/errors/AppError";

const useLogin = () => {
    const {onLogin} = useAuth();
    const {viewState, setLoading, setError} = useViewState();
    const [userCred, setUserCred] = useState({userName: '', password: ''});
    const navigate = useNavigate();

    const handleInputChange = (key, value) => {
        userCred[key] = value;
        setUserCred({...userCred})
    }

    const handleLogin = async () => {
        setLoading();
        try {
            if (userCred.userName === '' && userCred.password === '') {
                throw new RequiredFieldError('Please input your user name and password');
            } else {
                const response = await onLogin(userCred)
                if (response) {
                    navigate('/main', {replace: true});
                } else {
                    throw new UnauthorizedError();
                }
            }
        } catch (e) {
            setError(e.message);
        }
    }
    return {viewState, userCred, handleInputChange, handleLogin}
}

export default useLogin;
