import './contentImage.css'
import {useNavigate} from "react-router-dom";

function ContentImage() {

    const navigate = useNavigate();

    const handleStartEvaluation = () => {
        navigate('/evaluation');
    }

    return (
        <div className={"image-container"}>
            <button onClick={handleStartEvaluation} className={'content-button'}>Start Evaluation</button>
        </div>
    );

}
export default ContentImage



