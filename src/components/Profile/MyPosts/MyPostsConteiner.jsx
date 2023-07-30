import React from "react";
import { updateNewPostActionCreator, addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";



const mapStateToProps=(state)=>{
    return{
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        updateNewPostText:(text)=>{
            let action = updateNewPostActionCreator(text);
            dispatch(action);
        },
        addPost:()=>{
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsConteiner =connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsConteiner;