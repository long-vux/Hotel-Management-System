import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <div className='h-[120px] w-[970px] rounded-full bg-white flex gap-[200px] justify-center items-center text-[24px] shadow-lg '>
      <div className='flex flex-row justify-center items-center gap-[40px]'>
        <div>
          <h1 className='text-[20px]'>Check in</h1>
          <h1 className='text-[30px]' text-bold >17th Sep</h1>
        </div>
        <div>
          <h1 className='text-[20px]'>Check out</h1>
          <h1 className='text-[30px] text-bold' >18th Sep</h1>
        </div>
        <div>
          <h1 className='text-[20px]'>Who</h1>
          <h1 className='text-[30px] text-bold' >2 Guests, 1 infant</h1>
        </div>
      </div>
      <div className='flex justify-center items-center bg-[#1D4567] rounded-full w-[70px] h-[70px]'>
        <SearchIcon sx={{ fontSize: 40, color: 'white' }} />
      </div>
    </div>
  )
}

export default Search