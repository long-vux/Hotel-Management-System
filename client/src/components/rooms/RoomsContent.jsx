import React from 'react'
import Breadcrumb from '../layout/Breadcrumb'
import Amenities from './Amenity'
import KingBedIcon from '@mui/icons-material/KingBed'
import RoomCardLists from './RoomCardLists'
const RoomsContent = () => {
  const rooms = [
    {
      roomTitle: '1',
      imageUrl: '/assets/hotel_room/room3.jpg',
      availability: 'Available',
      price: '88',
      roomType: 'Double',
      capacity: '4'
    },
    {
      roomTitle: '2',
      imageUrl: '/assets/hotel_room/room1.jpg',
      availability: 'Unavailable',
      price: '150',
      roomType: 'Suite',
      capacity: '3'
    },
    {
      roomTitle: '3',
      imageUrl: '/assets/hotel_room/room3.jpg',
      availability: 'Available',
      price: '88',
      roomType: 'Double',
      capacity: '4'
    },
    {
      roomTitle: '4',
      imageUrl: '/assets/hotel_room/room1.jpg',
      availability: 'Unavailable',
      price: '150',
      roomType: 'Suite',
      capacity: '3'
    },
    {
      roomTitle: '5',
      imageUrl: '/assets/hotel_room/room3.jpg',
      availability: 'Available',
      price: '88',
      roomType: 'Double',
      capacity: '4'
    },
    {
      roomTitle: '6',
      imageUrl: '/assets/hotel_room/room1.jpg',
      availability: 'Unavailable',
      price: '150',
      roomType: 'Suite',
      capacity: '3'
    },
    {
      roomTitle: '7',
      imageUrl: '/assets/hotel_room/room3.jpg',
      availability: 'Available',
      price: '88',
      roomType: 'Double',
      capacity: '4'
    },
    {
      roomTitle: '8',
      imageUrl: '/assets/hotel_room/room1.jpg',
      availability: 'Unavailable',
      price: '150',
      roomType: 'Suite',
      capacity: '3'
    },
    {
      roomTitle: '9',
      imageUrl: '/assets/hotel_room/room3.jpg',
      availability: 'Available',
      price: '88',
      roomType: 'Double',
      capacity: '4'
    },
    {
      roomTitle: '10',
      imageUrl: '/assets/hotel_room/room1.jpg',
      availability: 'Unavailable',
      price: '150',
      roomType: 'Suite',
      capacity: '3'
    },
    {
      roomTitle: '2 Single Standard Ocean View',
      imageUrl: '/assets/hotel_room/room3.jpg',
      availability: 'Available',
      price: '88',
      roomType: 'Double',
      capacity: '4'
    },
    {
      roomTitle: 'King Suite City View',
      imageUrl: '/assets/hotel_room/room1.jpg',
      availability: 'Unavailable',
      price: '150',
      roomType: 'Suite',
      capacity: '3'
    },
    {
      roomTitle: '2 Single Standard Ocean View',
      imageUrl: '/assets/hotel_room/room3.jpg',
      availability: 'Available',
      price: '88',
      roomType: 'Double',
      capacity: '4'
    },
    {
      roomTitle: 'King Suite City View',
      imageUrl: '/assets/hotel_room/room1.jpg',
      availability: 'Unavailable',
      price: '150',
      roomType: 'Suite',
      capacity: '3'
    },
    {
      roomTitle: '2 Single Standard Ocean View',
      imageUrl: '/assets/hotel_room/room3.jpg',
      availability: 'Available',
      price: '88',
      roomType: 'Double',
      capacity: '4'
    },
    {
      roomTitle: 'King Suite City View',
      imageUrl: '/assets/hotel_room/room1.jpg',
      availability: 'Unavailable',
      price: '150',
      roomType: 'Suite',
      capacity: '3'
    },
    {
      roomTitle: '2 Single Standard Ocean View',
      imageUrl: '/assets/hotel_room/room3.jpg',
      availability: 'Available',
      price: '88',
      roomType: 'Double',
      capacity: '4'
    },
    {
      roomTitle: 'King Suite City View',
      imageUrl: '/assets/hotel_room/room1.jpg',
      availability: 'Unavailable',
      price: '150',
      roomType: 'Suite',
      capacity: '3'
    },
    {
      roomTitle: '2 Single Standard Ocean View',
      imageUrl: '/assets/hotel_room/room3.jpg',
      availability: 'Available',
      price: '88',
      roomType: 'Double',
      capacity: '4'
    },
    {
      roomTitle: 'King Suite City View',
      imageUrl: '/assets/hotel_room/room1.jpg',
      availability: 'Unavailable',
      price: '150',
      roomType: 'Suite',
      capacity: '3'
    },
  ]

  const rooms_empty = []

  return (
    <div className='px-[122px] flex flex-col font-inter my-[63px] gap-[30px] text-[20px]'>
      <Breadcrumb
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Rooms', href: '/rooms' }
        ]}
      />

      {/* Room Filter */}
      <div className='roomFiltering flex flex-col gap-[20px]'>
        <div className='text-bold text-[30px]'>Select your room</div>
        <div className='flex flex-wrap gap-[10px]'>
          <Amenities name='Room type' />
          <Amenities name='' icon={<KingBedIcon />} />
          <Amenities name='Amenities' />
        </div>

        <div className='searchResult_amount'>{rooms.length != 0 ? rooms.length + " rooms has been found" : "Not found"} </div>
      </div>

      <div className='searchResult_items flex flex-col gap-7'>
        <RoomCardLists  rooms={rooms} />

      </div>
    </div>
  )
}

export default RoomsContent
