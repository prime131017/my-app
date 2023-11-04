import { usersAPI } from "../api/api";
import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';


let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 10 },
        { id: 2, message: 'It\'s my first message', likesCount: 15 },
        { id: 3, message: 'Dada', likesCount: 18 },
        { id: 4, message: 'Yo yo!', likesCount: 14 }
    ],
    newPostText: "samuray.js",
    profile: null,
    status: " "

}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });//вместо return
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });//вместо return
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
};

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).
        then(response => {
            dispatch(setStatus(response.data));
        });
};

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).
        then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
};


export const updateNewPostActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST, newText: text });

export default profileReducer;