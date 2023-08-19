import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.presentation}>
                <img src="https://th.bing.com/th/id/OIP.avb9nDfw3kq7NOoP0grM4wHaEK?w=322&h=181&c=7&r=0&o=5&dpr=1.4&pid=1.7" />
            </div>
            <div className={s.discriptionBlock}>
            </div>
        </div>
    )
}

export default ProfileInfo;