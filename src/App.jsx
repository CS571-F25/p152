import { HashRouter, Routes, Route } from 'react-router'
import Home from './components/Home.jsx'
import AboutMe from './components/AboutMe.jsx'
import MoodBackground from './components/MoodBackground.jsx'
import NavBar from './components/NavBar.jsx'

function App() {
  return <HashRouter>
    <MoodBackground mood="happy" />
    <NavBar />

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/aboutme' element={<AboutMe/>}></Route>
    </Routes>
  </HashRouter>
}

export default App
