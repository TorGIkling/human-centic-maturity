import menuIcon from "../../assets/menu.svg";
import accountIcon from "../../assets/user-account-profile.svg";
import homeIcon from "../../assets/home.svg";
import {useLocation, useNavigate} from "react-router-dom";
import './header.css';

function Header() {

    const navigate = useNavigate();
    const location = useLocation();

    const headerTextMapping = {
        "/": "Home",
        "/support": "Support",
        "/evaluation": "Evaluation",
        "/profile": "Profile"
    };

    const headerText = headerTextMapping[location.pathname] || "Header";

    const handleAccountClick = () => {
        navigate('/login');
    }

    const handleHomeClick = () => {
        navigate('/');
    }

    return (
        <div className={"top-nav-container"}>

            <img className="top-nav-menu" src={menuIcon} alt="menu"/>

            <img onClick={handleHomeClick} className='home-icon' src={homeIcon} alt={'home'}/>

            <a className={"header-text"}>{headerText}</a>

            <img onClick={handleAccountClick} className="account-icon" src={accountIcon} alt="account-icon"/>

        </div>
    )
}
export default Header;
