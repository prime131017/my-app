import { useLocation, useParams } from "react-router-dom";
import ProfileContainer from "./ProfileContainer";

const ProfileContainerWrap = (props) => {
    const location = useLocation();
    const params = useParams();

    return (
        <ProfileContainer location={location} params={params} />
    )
}

export default ProfileContainerWrap;