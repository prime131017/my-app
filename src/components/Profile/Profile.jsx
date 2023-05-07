import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://th.bing.com/th/id/OIP.avb9nDfw3kq7NOoP0grM4wHaEK?w=322&h=181&c=7&r=0&o=5&dpr=1.4&pid=1.7" />
            </div>
            <div>
                ava+descriptions
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;