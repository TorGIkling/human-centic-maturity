import {useNavigate} from "react-router-dom";
import './register.css'

function Register() {

    const navigate = useNavigate();

    const handleRegisterClick = () => {
        
        navigate("/login");
    }

    const handleAlreadyHaveAccount = () => {
        navigate("/login");
    }

    return(
        <div className={"register-card"}>
            <div className={"input-container"}>
                <a className={"card-text"}>Username</a>
                <input className={"card-input"} type={"text"}/>
            </div>
            <div className={"input-container"}>
                <a className={"card-text"}>Email</a>
                <input className={"card-input"} type={"email"}/>
            </div>
            <div className={'input-container'}>
                <a className={'card-text'}>Password</a>
                <input className={"card-input"} type={"password"}/>
            </div>
            <div className={"input-container"}>
                <a className={'card-text'}>Repeat Password</a>
                <input className={"card-input"} type={"password"}/>
            </div>

            <div className={"input-container"}>
                <button className={"card-button"} onClick={handleAlreadyHaveAccount}>Already Have An Account</button>
                <button className={"card-button"} onClick={handleRegisterClick}>Register</button>
            </div>

        </div>
    );

}

export default Register