import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";

const Profile = (props) => {


    return (
        <div>
            <ProfileInfo />
            <MyPostsConteiner/>
                
        </div>
    )
}

export default Profile;