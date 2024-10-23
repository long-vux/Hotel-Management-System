import React from 'react'

const signup = () => {
  return (
    <div className='flex flex-row justify-around gap-20 items-center h-[600px]'>
      <div className='w-3/5'>
        <div className='flex flex-col p-4 rounded-lg ml-20 border border-1 border-gray-300 mb-2'>
          <h1 className='text-2xl font-bold mb-4'>Sign up</h1>
          <div className='flex flex-row gap-4'>
            <div className='flex flex-col mb-4 w-1/2'>
                <label className='text-sm font-bold mb-1'>First Name</label>
                <input type="text" className='border border-1 border-gray-300 rounded-md p-2' />
            </div>
            <div className='flex flex-col mb-4 w-1/2'>
                <label className='text-sm font-bold mb-1'>Last Name</label>
                <input type="text" className='border border-1 border-gray-300 rounded-md p-2' />
            </div>
          </div>
          <div className='flex flex-row gap-4'>
            <div className='flex flex-col mb-4 w-1/2'>
                <label className='text-base font-bold mb-1'>Email</label>
                <input type="email" className='border border-1 border-gray-300 rounded-md p-2' />
            </div>
            <div className='flex flex-col mb-4 w-[35%]'>
                <label className='text-base font-bold mb-1'>Verify Email</label>
                <input type="text" className='border border-1 border-gray-300 rounded-md p-2 w-full' />
            </div>
            <button className='text-[#1D4567] outline outline-2 outline-[#1D4567] h-[40px] min-w-[100px] rounded-md mt-7 hover:bg-[#1D4567] hover:text-white '>
                <span className='text-[12px] px-2 font-bold'>Send Code</span>
            </button>
          </div>
          
          <div className='flex flex-col mb-4' >
            <label className='text-sm font-bold mb-1'>Phone Number</label>
            <input type="text" className='border border-1 border-gray-300 rounded-md p-2' />
          </div>
          <div className='flex flex-row gap-4'>
            <div className='flex flex-col mb-4 w-1/2'>
                <label className='text-sm font-bold mb-1'>Password</label>
                <input type="password" className='border border-1 border-gray-300 rounded-md p-2' />
            </div>
            <div className='flex flex-col mb-4 w-1/2'>
                <label className='text-sm font-bold mb-1'>Verify Password</label>
                <input type="password" className='border border-1 border-gray-300 rounded-md p-2' />
            </div>
          </div>
        <button className='bg-[#1D4567] text-white p-2 rounded-md hover:bg-white hover:text-[#1D4567] hover:outline hover:outline-1 hover:outline-[#1D4567] hover:font-bold'><span className='font-bold'>Sign up</span></button>
        </div>
        <span className='flex justify-center text-sm gap-2'>Already have an account?  <a href="/login" className='font-bold underline'>Login</a></span>
      </div>
      <div className='w-2/5'>
        <img src={process.env.PUBLIC_URL + '/assets/hotel_facilities/pool.jpg'} alt='room' className='h-[600px] w-full' />
      </div>
    </div>
  )
}
export default signup