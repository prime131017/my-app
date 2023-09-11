import loading from '../../../assets/image/loading.gif';
import React from 'react';

let Preloader = (props) => {
    return (
        <div>
            <img src={loading} />
        </div>
    )
}

export default Preloader;