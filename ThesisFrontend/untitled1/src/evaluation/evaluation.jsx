import './evaluation.css'

import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
import StartEvaluation from "../components/start_evaluation/startEvaluation.jsx";

function Evaluation() {

    return (
        <div className={'evaluation-page'}>
            <Header/>
            <StartEvaluation/>
            <Footer/>
        </div>
    );
} export default Evaluation