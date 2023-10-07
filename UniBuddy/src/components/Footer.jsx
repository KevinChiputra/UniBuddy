import React from 'react'
import logo from '../assets/Logo_footer.svg'

const Footer = () => {
  return (
    <div className='w-full h-[273px] bg-primary flex flex-col px-[100px] pt-[50px] items-center'>
        {/* Up section */}
        <div className='flex gap-[355px]'>
            {/* image left*/}
            <div>
                <img src={logo} alt="logo" />
            </div>
             
            {/* right */}
            <div className='flex gap-[120px]'>
                {/* discover */}
                <div className='flex flex-col gap-[24px]'>
                    <div className='flex flex-col gap-[12px]'>                        
                        <p className='font-pjs text-[20px] font-bold text-[#ffffff]'>Discover</p>

                        <div className='w-[95px] h-[4px] bg-[#ffffff] rounded-full'></div>
                    </div>

                    <div className='flex flex-col text-[16px] text-[#ffffff] font-pjs gap-[12px]'>
                        <a href="/">Near You</a>
                        <a href="/">Trending</a>
                    </div>
                </div>

                {/* forum */}
                <div className='flex flex-col gap-[24px]'>
                    <div className='flex flex-col gap-[12px]'>                        
                        <p className='font-pjs text-[20px] font-bold text-[#ffffff]'>Forum</p>

                        <div className='w-[73px] h-[4px] bg-[#ffffff] rounded-full'></div>
                    </div>

                    <div className='flex flex-col text-[16px] text-[#ffffff] font-pjs gap-[12px]'>
                        <a href="/">Top Forum</a>
                        <a href="/">Top Topic</a>
                    </div>
                </div>

                {/* about */}
                <div className='flex flex-col gap-[24px]'>
                    <div className='flex flex-col gap-[12px]'>                        
                        <p className='font-pjs text-[20px] font-bold text-[#ffffff]'>About</p>

                        <div className='w-[74px] h-[4px] bg-[#ffffff] rounded-full'></div>
                    </div>

                    <div className='flex flex-col text-[16px] text-[#ffffff] font-pjs gap-[12px]'>
                        <a href="/">Our Vision</a>
                        <a href="/">Our Mission</a>
                    </div>
                </div>

                {/* Social Media */}
                <div className='flex flex-col gap-[24px]'>
                    <div className='flex flex-col gap-[12px]'>                        
                        <p className='font-pjs text-[20px] font-bold text-[#ffffff]'>Social Media</p>

                        <div className='w-[135px] h-[4px] bg-[#ffffff] rounded-full'></div>
                    </div>

                    <div className='flex gap-[12px]'>
                        <box-icon type='logo' name='facebook' color='#ffffff'></box-icon>
                        <box-icon name='instagram-alt' type='logo' color='#ffffff'></box-icon>
                        <box-icon name='twitter' type='logo' color='#ffffff'></box-icon>
                        <box-icon name='youtube' type='logo' color='#ffffff'></box-icon>

                    </div>
                </div>
            </div>

        </div>

        {/* Low Section (copyright) */}
        <div className='font-pjs text-[16px] text-[#ffffff] mt-12'>
            <p>©️ All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer