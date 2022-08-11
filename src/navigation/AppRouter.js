import {Route, Routes} from "react-router-dom";
import ProductView from "../features/Product/ProductView";
import LoginView from "../features/Login/LoginView";
import ProtectedRoute from "./ProtectedRoute";
import Navigation from "./Navigation";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginView/>}/>
            <Route element={<ProtectedRoute/>}>
                <Route path="main" element={<Navigation/>}>
                    <Route path="product" element={<ProductView/>}/>
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