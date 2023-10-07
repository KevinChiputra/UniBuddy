import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="bg-[url('/src/assets/banner.webp')] min-h-screen bg-cover bg-no-repeat relative flex items-center">
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-[#151515]/90 via-[#151515]/70 to-[#151515]/90 z-0"></div>
        <div className="z-10 text-white">
          {/* Contents here */}
        </div>
      </div>
    </div>
  )
}

export default Hero