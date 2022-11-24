import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "../../../navigation/AppRouter";
import {Provider} from "react-redux";
import {setupStore} from "../../../shared/state/store";

describe('App Router', () => {
    test('Should show login view page', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <AppRouter/>
            </MemoryRouter>
        )
        const userNameLabelElem = screen.getByText('User Name');
        expect(userNameLabelElem).toBeInTheDocument();
        const passwordLabelElem = screen.getByText('Password');
        expect(passwordLabelElem).toBeInTheDocument();
        const buttonLoginLabelElem = screen.getByText('Login');
        expect(buttonLoginLabelElem).toBeInTheDocument();
    });

    test('Should show not found view page when path is unknown', () => {
        render(
            <MemoryRouter initialEntries={['/dummy']}>
                <AppRouter/>
            </MemoryRouter>
        )
        const errorLabelElem = screen.getByText(/Oopss/);
        expect(errorLabelElem).toBeInTheDocument();
    });    

    test('Should show product view page', () => {
        render(
            <Provider store={setupStore({
                userInfoReducer : {name: 'dummy'}
            })}>
                <MemoryRouter initialEntries={['/main/product']}>
                    <AppRouter/>
                </MemoryRouter>
            </Provider>
            
        )
        const errorLabelElem = screen.getByText('Product');
        expect(errorLabelElem).toBeInTheDocument();
    });

    test('Should redirect to login when user is not logged in', () => {
        render(
            <Provider store={setupStore({
                userInfoReducer : {name: ''}
            })}>
                <MemoryRouter initialEntries={['/main/product']}>
                    <AppRouter/>
                </MemoryRouter>
            </Provider>
        )
        const userNameLabelElem = screen.getByText('User Name');
        expect(userNameLabelElem).toBeInTheDocument();  
    })
})