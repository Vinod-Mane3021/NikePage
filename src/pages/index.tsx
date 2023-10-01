import Header from '@/components/Header'
import LeftContent from '@/components/LeftContent'
import RightContent from '@/components/RightContent'
import React from 'react'

const index = () => {
  return (
      <div className='bg-white text-black px-12 py-5 font-myFont'>
        <Header/>
        {/* body */}
        <div className='flex justify-center items-center'>
          {/* left content*/}
          <LeftContent/>
          <RightContent/>
        </div>
      </div>
  )
}

export default index