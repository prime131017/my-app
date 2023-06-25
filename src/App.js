import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { sendMessage, updateNewMessage } from './redux/state';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile profilePage={props.appState.profilePage}
              addPost={props.addPost}
              updateNewPost={props.updateNewPost} />} />
            <Route path='/dialogs' element={<Dialogs 
              data={props.appState.dialogsPage}
              sendMessage={sendMessage}
              updateNewMessage={updateNewMessage} />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />

            {/* <Route path='/profile' render={ () =><Profile />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
