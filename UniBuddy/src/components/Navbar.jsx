import React from 'react'
import run from '../assets/runEmoji.png'

const Navbar = () => {
  return (
    <div className='fixed flex justify-between items-center w-full h-[80px] px-24 py-14'>
        <img src="" alt="logo" />

        <ul className='flex justify-center items-center gap-10'>
            <li>Home</li>
            <li>Discover</li>
            <li>Forum</li>
            <li>About</li>
        </ul>

        <a href="">
            <button className='flex justify-center items-center bg-primary px-[20px] py-[10px] rounded-full'>
                <img className='max-w-[30px]' src={run} alt="run"/>
                <p>Login</p>
            </button>
        </a>
    </div>
  )
}

export default Navbar