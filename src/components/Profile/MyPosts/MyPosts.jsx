import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textareal } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {

    let postElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();//создай ссылку;

    let onAddPost = (value) => {
        props.addPost(value.newPostText );
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textareal} placeholder="Enter your message" validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;