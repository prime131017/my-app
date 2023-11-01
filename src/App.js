import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Routes } from "react-router-dom"
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainerWrap from './components/Profile/ProfileInfo/ProfileContainerWrap';
import Profile from './components/Profile/Profile';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
const App = (props) => {

  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs'  element={<DialogsContainer />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/:userId' element={<ProfileContainerWrap />} />
          <Route path='/users' element={<UsersContainer/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />

          {/* <Route path='/profile' render={ () =><Profile />} /> */}
        </Routes>
      </div>
    </div>
  )
}

export default App;
