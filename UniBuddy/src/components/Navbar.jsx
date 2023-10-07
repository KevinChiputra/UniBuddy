import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp'
import run from '../assets/runEmoji.png'

const Navbar = ({props = false}) => {

    const[header, setHeader] = useState(false)

    const scrollNav = () => {
        window.scrollY >= 30 ? setHeader(true) : setHeader(false)
        console.log(header)
    }

    window.addEventListener("scroll", scrollNav)

  return (
    <div className={`${header ? 'fixed backdrop-blur-sm' : 'absolute top-[44px]'} flex justify-between items-center w-full h-[80px] px-24 py-4 font-pjs z-50`}>
        <img className='max-w-[280px] h-auto' src={logo} alt="logo" />

        <ul className={`flex justify-center items-center gap-10 font-medium text-lg ${props ? 'text-white' : 'text-black' }`}>
            <Link to='/'>Home</Link>
            <Link to='/discover' >Discover</Link>
            <Link to='/forum' >Forum</Link>
            <Link to='/about' >About</Link>
        </ul>

        <a href="">
            <button className='flex justify-center items-center bg-primary px-[20px] py-[10px] rounded-full gap-[15px] font-semibold text-white'>
                <img className='max-w-[30px] h-auto' src={run} alt="run"/>
                <p>Login</p>
            </button>
        </a>
    </div>
  )
}

export default Navbar