import { Link, useHistory } from "react-router-dom";
import "./header-menu.sass"
import logo from "../../img/logo.svg"
import Search from "./search/search";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../actions";

function HeaderMenu() {
    const history = useHistory();
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.user.isAuth)
    const handleLogOut = () => {
        dispatch(logOutUser())
        history.push("/login")
    }
    return (
        <>
            <ul className="nav">
                <img src={logo} className="nav-logo" alt="logo"/>
                <li><Link to="/" href="#">Home</Link></li>
                <li><a href="#">Films</a></li>
                <li><a href="#">Favorite Films</a></li>
                <li><a href="#">Profile</a></li>
                <div className="nav-logout-search">
                    <li><Search/></li>
                    {isAuth ? <li><a onClick={handleLogOut}>Logout</a></li> : null}
                </div>
            </ul>
        </>

    );
}

export default HeaderMenu;
