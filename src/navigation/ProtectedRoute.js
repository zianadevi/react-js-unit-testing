import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {userInfoSelector} from "../shared/state/userInfo/UserInfoSelector";

const ProtectedRoute = () => {
    const name = useSelector(userInfoSelector);
    return name !== '' ? <Outlet/> : <Navigate to='/' replace/>;
};

export default ProtectedRoute;
