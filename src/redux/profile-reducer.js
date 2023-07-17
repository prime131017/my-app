const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 10 },
        { id: 2, message: 'It\'s my first message', likesCount: 15 },
        { id: 3, message: 'Dada', likesCount: 18 },
        { id: 4, message: 'Yo yo!', likesCount: 14 }
    ],
    newPostText: "samuray.js"

}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });//вместо return
export const updateNewPostActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST, newText: text });

export default profileReducer;