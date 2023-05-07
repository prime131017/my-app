import React from "react";
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://th.bing.com/th/id/OIP.avb9nDfw3kq7NOoP0grM4wHaEK?w=322&h=181&c=7&r=0&o=5&dpr=1.4&pid=1.7" />
            </div>
            <div>
                ava+descriptions
            </div>
            <div>
                My posts
            </div>
            <div>
                News posts
            </div>
            <div>
                post1
            </div>
            <div>
                Post 2
            </div>
        </div>
    )
}

export default Profile;