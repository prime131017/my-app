import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let posts = [
  { id: 1, message: 'Hi, how are you?', likesCount: 10 },
  { id: 2, message: 'It\'s my first message', likesCount: 15 },
  { id: 2, message: 'Dada', likesCount: 18 },
  { id: 2, message: 'Yo yo!', likesCount: 14 }
]

let dialogs = [
  { id: 1, name: 'Anatolii' },
  { id: 2, name: 'Rymma' },
  { id: 3, name: 'Ksenia' },
  { id: 4, name: 'Cheburashka' },
  { id: 5, name: 'Gena' }
]

let messages = [
  { id: 1, message: 'Hi!', },
  { id: 2, message: 'How are you?', },
  { id: 3, message: 'Yo yo!', },
  { id: 4, message: 'Yo!', },
  { id: 5, message: 'Yo!', }
]
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
