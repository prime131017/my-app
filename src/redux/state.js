let rerenderEntireTree = () => {
  console.log('Change state');
}

let state = {
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
      { id: 5, message: 'Yo!'}
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
}

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const updateNewPost = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};



export const sendMessage = () => {
  let newMessage = {
    id: 6,
    message: state.dialogsPage.newMessageText
  }
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
};

export const updateNewMessage = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
}; 

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}


export default state;