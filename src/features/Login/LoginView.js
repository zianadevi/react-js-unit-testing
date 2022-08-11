import React from 'react';
import FormInput from "../../shared/components/FormInput/FormInput";
import FormButton from "../../shared/components/FormButton/FormButton";
import useLogin from "./UseLogin";

const LoginView = () => {
    const {viewState, userCred, handleInputChange, handleLogin} = useLogin();
    return (
        <div>
            <FormInput id='userName' label='User Name' value={userCred.userName}
                       onValueChange={handleInputChange}/>
            <FormInput id='password' type='password' label='Password' value={userCred.password}
                       onValueChange={handleInputChange}/>
            <FormButton disabled={viewState.isLoading} onClick={handleLogin}
                        label='Login'/>
            {viewState.error && <div>{viewState.error}</div>}
        </div>
    );
};

export default LoginView;
