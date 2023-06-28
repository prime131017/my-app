const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_DIALOG = 'UPDATE-NEW-DIALOG';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 10 },
        { id: 2, message: 'It\'s my first message', likesCount: 15 },
        { id: 3, message: 'Dada', likesCount: 18 },
        { id: 4, message: 'Yo yo!', likesCount: 14 }
      ],
      newPostText: "samuray.js"
    },
    dialogsPage: {
      messages: [
        { id: 1, message: 'Hi!', },
        { id: 2, message: 'How are you?', },
        { id: 3, message: 'Yo yo!', },
        { id: 4, message: 'Yo!', },
      ],
      dialogs: [
        { id: 1, name: 'Anatolii' },
        { id: 2, name: 'Rymma' },
        { id: 3, name: 'Ksenia' },
        { id: 4, name: 'Cheburashka' },
      ],
      newMessageText: 'samuray.react',

    }
  },
  _rerenderEntireTree() {
    console.log('Change state');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._rerenderEntireTree(this._state);
    } else if (action.type === UPDATE_NEW_DIALOG) {
      this._state.dialogsPage.newMessageText = action.newText;
      this._rerenderEntireTree(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {
        id: 5,
        message: this._state.dialogsPage.newMessageText
      }
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._rerenderEntireTree(this._state);
    } else if (action.type === UPDATE_NEW_POST) {
      this._state.profilePage.newPostText = action.newText;
      this._rerenderEntireTree(this._state);
    }
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });//вместо return

export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST, newText: text });

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewDialogActionCreator = (text) => ({ type: UPDATE_NEW_DIALOG, newText: text });

export default store;
window.store = store;
