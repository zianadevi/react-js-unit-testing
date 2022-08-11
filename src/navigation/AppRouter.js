import {Route, Routes} from "react-router-dom";
import ProductView from "../features/Product/ProductView";
import LoginView from "../features/Login/LoginView";
import ProtectedRoute from "./ProtectedRoute";
import Navigation from "./Navigation";
import {APP_NAVIGATION} from "../shared/constants";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginView/>}/>
            <Route element={<ProtectedRoute/>}>
                <Route path={APP_NAVIGATION.MAIN} element={<Navigation/>}>
                    <Route path={APP_NAVIGATION.PRODUCT} element={<ProductView/>}/>
                </Route>
            </Route>
            <Route
                path="*"
                element={
                    <main style={{padding: "1rem"}}>
                        <p>Oopss... page not found</p>
                    </main>
                }
            />
        </Routes>
    )
}

export default AppRouter