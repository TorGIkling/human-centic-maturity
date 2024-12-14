import menuIcon from "../../assets/menu.svg";
import accountIcon from "../../assets/user-account-profile.svg";
import {useNavigate} from "react-router-dom";
import './header.css';

function Header() {

    const navigate = useNavigate();

    const handleAccountClick = () => {
        navigate('/login');
    }

    const handleHomeClick = () => {
        navigate('/');
    }

    return (
        <div className={"top-nav-container"}>

            <img className="top-nav-menu" src={menuIcon} alt="menu"/>

            <a onClick={handleHomeClick} className={"home-text"}>Home</a>

            <img onClick={handleAccountClick} className="account-icon" src={accountIcon} alt="account-icon"/>

        </div>
    )
}
export default Header;
