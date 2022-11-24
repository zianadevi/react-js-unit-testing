import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AppRouter from "../../../navigation/AppRouter";
import {Provider} from "react-redux";
import {setupStore} from "../../../shared/state/store";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../../../shared/context/AuthContext";

const mockUseProduct = jest.fn();

// export const
jest.mock('../../../features/Product/UseProduct', () => 
    (
        {
            useProduct: () => mockUseProduct()
        }
))

// export default
// jest.mock('../../../features/Product/UseProduct', () => 
//  (
//      () => mockUseProduct()
// ))

describe('Navigation', () => {
    test('Should show product view with some data', async () => {
        mockUseProduct.mockReturnValue({
            viewState : {
                isLoading : false,
                data : [
                    {id: '1', productName: 'dummy product', productInfo:'dummy info'}
                ],
                error : null
            }
        });

        render(
            <Provider store={setupStore({
                userInfoReducer: {name: 'dummy'}
            })}>
                <MemoryRouter initialEntries={['/main']}>
                    <AppRouter/>
                </MemoryRouter>
            </Provider>
        )
        const productButtonElem = screen.getByText('Product');
        expect(productButtonElem).toBeInTheDocument();
        fireEvent.click(productButtonElem);
        await waitFor(() => {
            const result = screen.getByText('dummy product');
            expect(result).toBeInTheDocument();
        })
    })

    test('Should have button logout with name and redirect to login view when clicked', async () => {
        mockUseProduct.mockReturnValue({
            viewState: {
                isLoading : false,
                data : null,
                error : null
            }
        });
        
        render(
            <Provider store={setupStore({
                userInfoReducer: {name: 'dona'}
            })}>
                <MemoryRouter initialEntries={['/main']}>
                    <AuthProvider>
                        <AppRouter/>
                    </AuthProvider>
                </MemoryRouter>
            </Provider>
        )

        const logoutButtonElem = screen.getByText('Logout dona');
        expect(logoutButtonElem).toBeInTheDocument();
        fireEvent.click(logoutButtonElem);
        await waitFor(() => {
            const userNameLabelElem = screen.getByText('User Name');
            expect(userNameLabelElem).toBeInTheDocument();
        })

    })
})