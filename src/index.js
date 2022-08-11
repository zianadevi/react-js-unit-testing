import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {apiClientFactory} from "./shared/ApiClientFactory";
import {clientInstance} from "./shared/AxiosClient";
import {serviceFactory} from "./services/ServiceFactory";
import {DependencyProvider} from "./shared/context/DependencyContext";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {setupStore} from "./shared/state/store";
import {AuthProvider} from "./shared/context/AuthContext";

const apiClient = apiClientFactory(clientInstance);
const services = serviceFactory(apiClient);
const store = setupStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <DependencyProvider services={services}>
                <BrowserRouter>
                    <AuthProvider>
                        <App/>
                    </AuthProvider>
                </BrowserRouter>
            </DependencyProvider>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
