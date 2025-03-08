import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center mb-6'>
      <img className=' md:h-[2rem] h-[1.5rem]'
      src='https://aasa.tech/wp-content/uploads/2023/12/Aasa-Logo.png' />
      <button class="cursor-pointer bg-gradient-to-r from-blue-600 to-pink-500 text-white font-bold md:py-3 
      md:px-6 px-4 py-1 rounded-full shadow-lg hover:opacity-90 transition duration-300">
        Get Started</button>
    </div>
  )
}

export default Header
