import { render, screen } from "@testing-library/react";
import LoginView from "../../../features/Login/LoginView";

const mockUseLogin = jest.fn();
jest.mock("../../../features/Login/UseLogin", () => () => mockUseLogin());

describe('Login View Test', () => {
    test('Should render successfully', () => {
        mockUseLogin.mockReturnValue({
            viewState: '', userCred: '', handleInputChange:jest.fn(), handleLogin:jest.fn()
        })
        render(<LoginView/>);
        const userNameLabelElem = screen.getByText('User Name');
        expect(userNameLabelElem).toBeInTheDocument();
        const passwordLabelElem = screen.getByText('Password');
        expect(passwordLabelElem).toBeInTheDocument();
        const buttonLoginLabelElem = screen.getByText('Login');
        expect(buttonLoginLabelElem).toBeInTheDocument();
    });

    test('Should disabled button when state is loading', () => {
        mockUseLogin.mockReturnValue({
            viewState: {isLoading: true, data: null, error: null}, 
            userCred: '', 
            handleInputChange:jest.fn(), 
            handleLogin:jest.fn()
        });
        render(<LoginView/>);
        const buttonLoginLabelElem = screen.getByText('Login');
        expect(buttonLoginLabelElem).toBeDisabled();
    });

    test('Should show error when error state exist', () => {
        mockUseLogin.mockReturnValue({
            viewState: {isLoading: true, data: null, error: 'Error'}, 
            userCred: '', 
            handleInputChange:jest.fn(), 
            handleLogin:jest.fn()
        });
        render(<LoginView/>);
        const errorTextElem = screen.getByText('Error');
        expect(errorTextElem).toBeInTheDocument();
    });
})