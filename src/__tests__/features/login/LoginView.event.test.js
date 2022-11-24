import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import LoginView from "../../../features/Login/LoginView"
import { UnauthorizedError } from "../../../shared/errors/AppError";
import { APP_NAVIGATION } from "../../../shared/constants";


const mockOnLogin = jest.fn();
const mockUseNavigate = jest.fn();
jest.mock("../../../shared/hook/UseAuth", () => ({
    useAuth : () => mockOnLogin()
}))

jest.mock("react-router-dom", ()=> ({
    ...jest.requireActual('react-router-dom'),
    useNavigate : () => mockUseNavigate
}))

describe('Login View Event', ()=> {
    test('Should show error when user name or password is empty', () => {
        mockOnLogin.mockReturnValue({
            onLogin : jest.fn()
        })
        render(<LoginView/>)
        const loginButtonElem = screen.getByText('Login');
        fireEvent.click(loginButtonElem);
        const errorLabelElem = screen.getByText(/Please Input/i);
        expect(errorLabelElem).toBeInTheDocument();
    });

    test('Should show error unauthorized when response onLogin is false', async () => {
        mockOnLogin.mockReturnValue({
            onLogin : jest.fn().mockResolvedValue(false)
        })
        render(<LoginView/>)
        const userNameElem = screen.getByLabelText(/User Name/);
        const passwordElem = screen.getByLabelText(/Password/);
        fireEvent.change(userNameElem, {target : {value: 'dummy user'}});
        fireEvent.change(passwordElem, {target: {value: 'dummy password'}});
        const loginButtonElem = screen.getByText('Login');
        fireEvent.click(loginButtonElem);
        await waitFor(() => {
            const errorLabelElem = screen.getByText(/unauthorized/i);
            expect(errorLabelElem).toBeInTheDocument();
        })
    });

    test('Should show error unauthorized when response onLogin is thowin error', async () => {
        mockOnLogin.mockReturnValue({
            onLogin : jest.fn().mockRejectedValue(new UnauthorizedError())
        })
        render(<LoginView/>)
        const userNameElem = screen.getByLabelText(/User Name/);
        const passwordElem = screen.getByLabelText(/Password/);
        fireEvent.change(userNameElem, {target : {value: 'dummy user'}});
        fireEvent.change(passwordElem, {target: {value: 'dummy password'}});
        const loginButtonElem = screen.getByText('Login');
        fireEvent.click(loginButtonElem);
        await waitFor(() => {
            const errorLabelElem = screen.getByText(/unauthorized/i);
            expect(errorLabelElem).toBeInTheDocument();
        })
    });

    test('Should navigate when login is success', async () => {
        mockOnLogin.mockReturnValue({
            onLogin : jest.fn().mockResolvedValue(true)
        })
        render(<LoginView/>)
        const userNameElem = screen.getByLabelText(/User Name/);
        const passwordElem = screen.getByLabelText(/Password/);
        fireEvent.change(userNameElem, {target : {value: 'dummy user'}});
        fireEvent.change(passwordElem, {target: {value: 'dummy password'}});
        const loginButtonElem = screen.getByText('Login');
        fireEvent.click(loginButtonElem);
        await waitFor(() => {
            expect(mockUseNavigate).toHaveBeenCalledWith(APP_NAVIGATION.MAIN, {replace : true})
        })
    })
})