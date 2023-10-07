import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Forum from './components/Forum.jsx'
import Discover from './components/Discover.jsx'
import Places from './components/Places.jsx'
import Profile from './components/Profile.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<><Navbar props={true} /><Hero /><Footer /></>} />
          <Route path='/discover' element={<><Navbar /><Discover /><Footer /></>} />
          <Route path='/forum' element={<><Navbar /><Forum /><Footer /></>} />
          <Route path='/about' element={<><Navbar /><About /><Footer /></>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
