import React from 'react'
import { Login } from '@mui/icons-material';

const CardOverview = () => {
    return (
        <div className='w-[180px] h-[120px] bg-white rounded-md flex flex-col justify-between m-1 p-2 font-inter' >
            <div className='w-full flex items-center justify-between '>
                <Login />
                <h1 className='text-[14px] text-red-500'>12%</h1>
            </div>
            <h1 className='text-[14px] text-gray-500 text-bold'>Today Check In</h1>
            <div className='flex items-center justify-between'>
                <h1 className='text-[20px] text-black'>1234</h1>
                <h2 className='text-[12px] text-gray-500 text-bold'>Last 7 days</h2>
            </div>
        </div>
    )
}

export default CardOverview