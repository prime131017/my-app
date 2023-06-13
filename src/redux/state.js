let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 10 },
      { id: 2, message: 'It\'s my first message', likesCount: 15 },
      { id: 2, message: 'Dada', likesCount: 18 },
      { id: 2, message: 'Yo yo!', likesCount: 14 }
    ]
  },
  dialogsPage: {
    messages: [
      { id: 1, message: 'Hi!', },
      { id: 2, message: 'How are you?', },
      { id: 3, message: 'Yo yo!', },
      { id: 4, message: 'Yo!', },
      { id: 5, message: 'Yo!', }
    ],
    dialogs: [
      { id: 1, name: 'Anatolii' },
      { id: 2, name: 'Rymma' },
      { id: 3, name: 'Ksenia' },
      { id: 4, name: 'Cheburashka' },
      { id: 5, name: 'Gena' }
    ]
  }
}

export default state;