import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Forum from './components/Forum.jsx'
import Discover from './components/Discover.jsx'
import Places from './components/Places.jsx'
import Profile from './components/Profile.jsx'
import About from './components/About.jsx'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<><Navbar props={true} /><Hero /></>} />
          <Route path='/discover' element={<><Navbar /><Discover /></>} />
          <Route path='/forum' element={<><Navbar /><Forum /></>} />
          <Route path='/about' element={<><Navbar /><About /></>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
