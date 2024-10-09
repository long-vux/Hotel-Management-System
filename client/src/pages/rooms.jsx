import React from 'react'
import Slide from '../components/rooms/Slide'
import RoomsContent from '../components/rooms/RoomsContent'

const Rooms = () => {
  return (
    <div className='flex flex-col'>
      <Slide />
      <RoomsContent />
    </div>
  )
}

export default Rooms
