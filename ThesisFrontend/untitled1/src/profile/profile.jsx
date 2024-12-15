import './profile.css'
import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
import ProfileCard from "../components/profile_card/profileCard.jsx";



function Profile () {

    return(
        <div className={'profile-page'}>
            <Header/>
            <ProfileCard/>
            <Footer/>
        </div>
    );
}
export default Profile;