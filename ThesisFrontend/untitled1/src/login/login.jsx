import './login.css'

import {useNavigate} from "react-router-dom";


function Login() {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/");
    }

    const handleDontHaveAccount = () => {
        navigate('/register');
    }
    return (
        <div className="login-card">
            <div className={"input-container"}>
                <a className={"card-text"}>Email</a>
                <input className={"card-input"} type={"email"}/>
            </div>
            <div className={'input-container'}>
                <a className={'card-text'}>Password</a>
                <input className={"card-input"} type={"password"}/>
            </div>
            <div className={'input-container'}>
                <button className={'card-button'} onClick={handleDontHaveAccount}>Need an Account?</button>
                <button className={"card-button"} onClick={handleLoginClick}>Login</button>
            </div>

        </div>
    );

}

export default Login