import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = [
        { id: 1, message: 'Hi, how are you?', likesCount: 10 },
        { id: 2, message: 'It\'s my first message', likesCount: 15 },
        { id: 2, message: 'Dada', likesCount: 18 },
        { id: 2, message: 'Yo yo!', likesCount: 14 }
    ]

    let postElement = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;