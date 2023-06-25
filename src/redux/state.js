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
        { id: 5, message: 'Yo!' }
      ],
      dialogs: [
        { id: 1, name: 'Anatolii' },
        { id: 2, name: 'Rymma' },
        { id: 3, name: 'Ksenia' },
        { id: 4, name: 'Cheburashka' },
        { id: 5, name: 'Gena' }
      ],
      newMessageText: 'samuray.react',

    }
  },
  getState(){
    return this._state;
  },
  _rerenderEntireTree() {
    console.log('Change state');
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._rerenderEntireTree(this._state);
  },

  updateNewPost(newText) {
    this._state.profilePage.newPostText = newText;
    this._rerenderEntireTree(this._state);
  },

  sendMessage() {
    let newMessage = {
      id: 6,
      message: this._state.dialogsPage.newMessageText
    }
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._rerenderEntireTree(this._state);
  },

  updateNewMessage(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._rerenderEntireTree(this._state);
  },

  subscribe(observer) {
    this._rerenderEntireTree = observer;
  }
}

export default store;
window.store = store;
