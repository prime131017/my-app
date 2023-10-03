import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.presentation}>
                <img src="https://th.bing.com/th/id/OIP.avb9nDfw3kq7NOoP0grM4wHaEK?w=322&h=181&c=7&r=0&o=5&dpr=1.4&pid=1.7" />
            </div>
            <div className={s.discriptionBlock}>
                <img src={props.profile.photos.large}/>
            </div>
        </div>
    )
}

export default ProfileInfo;