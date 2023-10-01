import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between">
        {/* nike symbol */}
        <div>
            <img src="/images/brand_logo.png" alt="brand-logo" />
        </div>

        {/* menu */}
        <div className='uppercase'>
            <ul className='flex gap-5 text-black font-semibold '>
                <li className='hover:cursor-pointer'>menu</li>
                <li className='hover:cursor-pointer'>location</li>
                <li className='hover:cursor-pointer'>about</li>
                <li className='hover:cursor-pointer'>contact</li>  
            </ul>
        </div>

        {/* login button */}
        <button className='w-[75px] h-[31px] bg-red-600 text-white'>
          Login
        </button>
        
    </div>
  )
}

export default Header



