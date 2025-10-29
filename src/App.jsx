import { HashRouter, Routes, Route } from 'react-router'
import './App.css'
import Home from './components/Home.jsx'
import AboutMe from './components/AboutMe.jsx'

function App() {
  return <HashRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/aboutme' element={<AboutMe/>}></Route>
    </Routes>
  </HashRouter>
}

export default App
