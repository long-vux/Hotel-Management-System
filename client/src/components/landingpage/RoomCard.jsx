import React from 'react'
import KingBedIcon from '@mui/icons-material/KingBed';

const RoomCard = (props) => {
  const { image, title, price, type } = props

  return (
    <div className='flex justify-center items-center'>
      <div className='w-[423px] h-[110px]'>
        <img src={image} alt='room' className='w-full h-[288px] ' />
        <div className='flex flex-col justify-between h-full py-[10px] px-[20px] gap-[10px] border-2 border-gray border-t-0'>
          <h1 className='text-[31px]'>{title}</h1>
          <div className='flex  justify-between items-center text-[20px]'>
            <h1>${price} / night</h1>
            <h1 className=' flex items-center gap-[10px]'> <KingBedIcon sx={{ color: 'gray' }} /> {type}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomCard