import './profileCard.css'

function ProfileCard() {

    return(
        <div className={'profile-card'}>
            <div className={'left-profile-column'}>
                <a className={'profile-text'}> User Name:</a>
                <a className={'profile-text'}>Email:</a>
            </div>
            <div className={'right-profile-column'}>


            </div>
        </div>
    );
} export default ProfileCard;