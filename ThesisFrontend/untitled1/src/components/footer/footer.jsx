import './footer.css'
import {useNavigate} from "react-router-dom";
function Footer () {

    const navigate = useNavigate();

    const handleSupportClick = () => {
        navigate('/support');
    }

    const handleFAQClick = () => {
        navigate('/support');
    }

    const handleContactUs = () => {
        navigate('/support');
    }

    const handleProfilePageClick = () => {

    }

    const handleStartEvalClick = () => {
        navigate('/evaluation');
    }


    return (
        <div className={'footer-container'}>
            <div className={'left-column'}>
                <a className={"column-title"}>Help and Support</a>
                <a onClick={handleSupportClick} className={'footer-link'}>Support</a>
                <a onClick={handleFAQClick} className={'footer-link'}>FAQ</a>
                <a onClick={handleContactUs} className={'footer-link'}>Contact Us</a>
            </div>
            <div className={'right-column'}>
                <a className={'column-title'}>Shortcuts</a>
                <a onClick={handleProfilePageClick} className={'footer-link'}>Your Page</a>
                <a onClick={handleStartEvalClick} className={'footer-link'}>Start Evaluation</a>
            </div>
        </div>
    );
}

export default Footer;