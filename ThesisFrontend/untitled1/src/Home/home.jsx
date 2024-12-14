import './home.css'

import {useNavigate} from "react-router-dom";
import menuIcon from '../assets/menu.svg'
import accountIcon from '../assets/user-account-profile.svg'



function Home() {

    const navigate = useNavigate()

    const handleAccountClick = () => {
        navigate('/login');
    }
    return (
        <div className={"home-page"}>
            <div className={"top-nav-container"}>

                <img className="top-nav-menu" src={menuIcon} alt="menu"/>

                <a className={"home-text"}>Home</a>

                <img onClick={handleAccountClick} className="account-icon" src={accountIcon} alt="account-icon"/>

            </div>
            <div className={"content-container"}>

            </div>
        </div>
    )
}
export default Home;