import React from 'react'

const login = () => {
  return (
    <div className='flex flex-row justify-around gap-20 items-center h-[600px]'>
      <div className='w-2/5'>
        <div className='flex flex-col p-4 rounded-lg ml-20 border border-1 border-gray-300 mb-2'>
          <h1 className='text-2xl font-bold mb-4'>Log in</h1>
          <div className='flex flex-col mb-4'>
            <label className='text-sm font-bold mb-1'>Email</label>
            <input type="email" className='border border-1 border-gray-300 rounded-md p-2' />
          </div>
          <div className='flex flex-col mb-4' >
            <label className='text-sm font-bold mb-1'>Password</label>
            <input type="password" className='border border-1 border-gray-300 rounded-md p-2' />
          </div>
          <button className='bg-[#1D4567] text-white p-2 rounded-md'><span className='font-bold'>Log in</span></button>
        </div>
        <span className='flex justify-center text-sm gap-2'>Haven't have an account?  <a href="/signup" className='font-bold underline'>Signup</a></span>
      </div>
      <div className='w-3/5'>
        <img src={process.env.PUBLIC_URL + '/assets/hotel_room/room3.jpg'} alt='room' className='h-[600px] w-full' />
      </div>
    </div>
  )
}
export default login