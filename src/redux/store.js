import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

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
      dialogs: [
        { id: 1, name: 'Anatolii' },
        { id: 2, name: 'Rymma' },
        { id: 3, name: 'Ksenia' },
        { id: 4, name: 'Cheburashka' },
      ],
      messages: [
        { id: 1, message: 'Hi!', },
        { id: 2, message: 'How are you?', },
        { id: 3, message: 'Yo yo!', },
        { id: 4, message: 'Yo!', },
      ],

      newMessagBody: ""

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

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._rerenderEntireTree(this._state);
  }
}






export default store;
window.store = store;
