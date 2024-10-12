import React from 'react'
import RoomCardListAdmin from '../components/admin/rooms/RoomCardList_admin'

const Room = () => {
  const rooms = [
    {
      allocated: '#001',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: '200',
      type: '2 king beds',
      status: 'Available'
    },
    {
      allocated: '#002',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: '200',
      type: '2 king beds',
      status: 'Booked'
    },
    {
      allocated: '#003',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: '200',
      type: '2 king beds',
      status: 'Booked'
    },
    {
      allocated: '#004',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: '200',
      type: '2 king beds',
      status: 'Maintenance'
    },
    {
      allocated: '#005',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: '200',
      type: '2 king beds',
      status: 'Available'
    },
    {
      allocated: '#006',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: '150',
      type: '1 king bed',
      status: 'Available'
    },
    {
      allocated: '#007',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: '150',
      type: '1 king bed',
      status: 'Booked'
    },
    {
      allocated: '#008',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: '150',
      type: '1 king bed',
      status: 'Available'
    },
    {
      allocated: '#009',
      image: '/assets/hotel_room/room3.jpg',
      title: 'Standard Room',
      price: '100',
      type: '2 twin beds',
      status: 'Booked'
    },
    {
      allocated: '#010',
      image: '/assets/hotel_room/room3.jpg',
      title: 'Standard Room',
      price: '100',
      type: '2 twin beds',
      status: 'Available'
    },
    {
      allocated: '#011',
      image: '/assets/hotel_room/room3.jpg',
      title: 'Standard Room',
      price: '100',
      type: '2 twin beds',
      status: 'Maintenance'
    },
    {
      allocated: '#012',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: '200',
      type: '2 king beds',
      status: 'Available'
    },
    {
      allocated: '#013',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: '200',
      type: '2 king beds',
      status: 'Available'
    },
    {
      allocated: '#014',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: '150',
      type: '1 king bed',
      status: 'Booked'
    },
    {
      allocated: '#015',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: '150',
      type: '1 king bed',
      status: 'Available'
    },
    {
      allocated: '#016',
      image: '/assets/hotel_room/room3.jpg',
      title: 'Standard Room',
      price: '100',
      type: '2 twin beds',
      status: 'Available'
    },
    {
      allocated: '#017',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: '200',
      type: '2 king beds',
      status: 'Booked'
    },
    {
      allocated: '#018',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: '200',
      type: '2 king beds',
      status: 'Maintenance'
    },
    {
      allocated: '#019',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: '150',
      type: '1 king bed',
      status: 'Available'
    },
    {
      allocated: '#020',
      image: '/assets/hotel_room/room3.jpg',
      title: 'Standard Room',
      price: '100',
      type: '2 twin beds',
      status: 'Available'
    },
    {
      allocated: '#021',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: '200',
      type: '2 king beds',
      status: 'Available'
    },
    {
      allocated: '#022',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: '150',
      type: '1 king bed',
      status: 'Booked'
    },
    {
      allocated: '#023',
      image: '/assets/hotel_room/room3.jpg',
      title: 'Standard Room',
      price: '100',
      type: '2 twin beds',
      status: 'Booked'
    },
    {
      allocated: '#024',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: '200',
      type: '2 king beds',
      status: 'Maintenance'
    },
    {
      allocated: '#025',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: '200',
      type: '2 king beds',
      status: 'Available'
    },
    {
      allocated: '#026',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: '150',
      type: '1 king bed',
      status: 'Available'
    },
    {
      allocated: '#027',
      image: '/assets/hotel_room/room3.jpg',
      title: 'Standard Room',
      price: '100',
      type: '2 twin beds',
      status: 'Available'
    },
    {
      allocated: '#028',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: '200',
      type: '2 king beds',
      status: 'Available'
    },
    {
      allocated: '#029',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: '150',
      type: '1 king bed',
      status: 'Booked'
    },
    {
      allocated: '#030',
      image: '/assets/hotel_room/room3.jpg',
      title: 'Standard Room',
      price: '100',
      type: '2 twin beds',
      status: 'Booked'
    },
    {
      allocated: '#031',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: '200',
      type: '2 king beds',
      status: 'Maintenance'
    },
    {
      allocated: '#032',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: '200',
      type: '2 king beds',
      status: 'Available'
    },
    {
      allocated: '#033',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: '150',
      type: '1 king bed',
      status: 'Available'
    },
    {
      allocated: '#034',
      image: '/assets/hotel_room/room3.jpg',
      title: 'Standard Room',
      price: '100',
      type: '2 twin beds',
      status: 'Available'
    },
    {
      allocated: '#035',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: '200',
      type: '2 king beds',
      status: 'Available'
    },
    {
      allocated: '#036',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: '150',
      type: '1 king bed',
      status: 'Booked'
    },
    {
      allocated: '#037',
      image: '/assets/hotel_room/room3.jpg',
      title: 'Standard Room',
      price: '100',
      type: '2 twin beds',
      status: 'Booked'
    },
    {
      allocated: '#038',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: '200',
      type: '2 king beds',
      status: 'Maintenance'
    },
    {
      allocated: '#039',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: '200',
      type: '2 king beds',
      status: 'Available'
    },
    {
      allocated: '#040',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: '150',
      type: '1 king bed',
      status: 'Available'
    },
    {
      allocated: '#041',
      image: '/assets/hotel_room/room3.jpg',
      title: 'Standard Room',
      price: '100',
      type: '2 twin beds',
      status: 'Available'
    },
    {
      allocated: '#042',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: '200',
      type: '2 king beds',
      status: 'Available'
    },
    {
      allocated: '#043',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: '150',
      type: '1 king bed',
      status: 'Booked'
    },
    {
      allocated: '#044',
      image: '/assets/hotel_room/room3.jpg',
      title: 'Standard Room',
      price: '100',
      type: '2 twin beds',
      status: 'Booked'
    },
    {
      allocated: '#045',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: '200',
      type: '2 king beds',
      status: 'Maintenance'
    },
    {
      allocated: '#046',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: '200',
      type: '2 king beds',
      status: 'Available'
    },
    {
      allocated: '#047',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: '150',
      type: '1 king bed',
      status: 'Available'
    },
    {
      allocated: '#048',
      image: '/assets/hotel_room/room3.jpg',
      title: 'Standard Room',
      price: '100',
      type: '2 twin beds',
      status: 'Available'
    },
    {
      allocated: '#049',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: '200',
      type: '2 king beds',
      status: 'Available'
    },
    {
      allocated: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: '150',
      type: '1 king bed',
      status: 'Booked'
    }
  ]

  return (
    <div>
      Room
        <RoomCardListAdmin rooms = {rooms}/>
    </div>
  )
}

export default Room
