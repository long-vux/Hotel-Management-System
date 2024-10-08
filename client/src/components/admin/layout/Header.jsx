import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-[60px] text-black flex justify-between items-center px-10'>
      <div className='font-italiana text-[26px]'>
        The Grand
      </div>
      <div className='w-[470px] h-[50px] bg-[#F8FAFC] flex items-center justify-center gap-[20px] rounded-l-full'>
        <input type="text" placeholder='Search' className='w-[300px] h-[36px] rounded-3xl px-4 mr-2 bg-[#E2E8F0]'/>
        <img src={process.env.PUBLIC_URL + '/assets/hotel_facilities/building1.jpg'} alt='room' className='w-[40px] h-[40px] rounded-full' />
        <div className='flex flex-col'>
          <h1 className='text-[16px] font-bold'>Long Vu</h1>
          <p className='text-[12px] font-medium'>Manager</p>
        </div>
      </div>
    </div>
  )
}

export default Header