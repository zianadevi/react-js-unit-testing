import {Link, Outlet} from "react-router-dom";
import {useAuth} from "../shared/hook/UseAuth";
import {useSelector} from "react-redux";
import {userInfoSelector} from "../shared/state/userInfo/UserInfoSelector";

const Navigation = () => {
    const {onLogout} = useAuth();
    const name = useSelector(userInfoSelector);
    return (
        <>
            <Link to="product">Product</Link>
            <span> | </span>
            <button onClick={onLogout}>{`Logout ${name}`}</button>
            <Outlet/>
        </>
    )
}

export default Navigation;