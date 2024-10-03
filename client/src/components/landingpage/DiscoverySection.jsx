import React from 'react'
import RoomCard from './RoomCard.jsx'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const DiscoverySection = () => {
  return (
    <section id='discovery' className='h-[500px] mt-[80px] mx-[70px]'>
      <div className='flex justify-between items-center'>
        <h1 className='text-[50px] font-italiana'>Discovery</h1>
        <a href='https://www.facebook.com/fb.longvu' className='text-[23px] flex items-center gap-[5px]'>More <ArrowForwardIosIcon fontSize='small' /></a>
      </div>
      <div className='flex justify-between items-center gap-[50px]'>
        <RoomCard image={process.env.PUBLIC_URL + '/assets/hotel_room/room1.jpg'} title='Deluxe Family Room' price='200' type='2 king beds' />
        <RoomCard image={process.env.PUBLIC_URL + '/assets/hotel_room/room2.jpg'} title='Deluxe Room' price='200' type='2 double beds' />
        <RoomCard image={process.env.PUBLIC_URL + '/assets/hotel_room/room3.jpg'} title='Deluxe Room' price='200' type='2 double beds' />
      </div>
    </section>
  )
}

export default DiscoverySection