import './home.css'
import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
import ContentImage from "../components/content_image/contentImage.jsx";





function Home() {
    return (
        <div className={"home-page"}>
            <Header/>
            <ContentImage/>
            <Footer/>
        </div>
    )
}
export default Home;