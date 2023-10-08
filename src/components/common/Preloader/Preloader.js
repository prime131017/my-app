import loading from '../../../assets/image/loading.gif';
import React from 'react';
import s from './preloaderImage.module.css';

let Preloader = (props) => {
    return (
        <div className={s.preloaderImage}>
            <img src={loading} />
        </div>
    )
}

export default Preloader;