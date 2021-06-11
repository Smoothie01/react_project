import Comments from '../Comments/Comments'
import ProfileContent from "./ProfileContent/ProfileContent";


const Profile = ()=>{
    return(
        <section className='content'>
            <ProfileContent/>
            <Comments/>
        </section>
    );
}

export default Profile;
