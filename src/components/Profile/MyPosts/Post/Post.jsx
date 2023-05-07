import React from "react";
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/originals/69/bf/c8/69bfc831601a5ab5196b101e37cc7baf.jpg" />
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;