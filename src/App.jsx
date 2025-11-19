import { HashRouter, Routes, Route } from 'react-router'
import Home from './components/Home.jsx'
import AboutMe from './components/AboutMe.jsx'
import MoodBackground from './components/MoodBackground.jsx'
import NavBar from './components/NavBar.jsx'
import UsersSaved from './components/UsersSaved.jsx'
import SavedSongsContext, { SavedSongsProvider } from "./contexts/SavedSongsContext";

function App() {
  return <HashRouter>
    <SavedSongsProvider>
      <MoodBackground mood="happy" />
      <NavBar />

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/aboutme' element={<AboutMe/>}></Route>
        <Route path='/saved-songs' element={<UsersSaved/>}></Route>
      </Routes>
    </SavedSongsProvider>
  </HashRouter>
}

export default App
