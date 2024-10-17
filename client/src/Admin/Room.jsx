import React from 'react'
import RoomCardListAdmin from '../components/admin/rooms/RoomCardList_admin'
import RoomFiltering from '../components/admin/rooms/Room_filtering'
import AddRoomModalButton from '../components/admin/rooms/AddRoom_Modal_Button'

const Room = () => {
  const rooms = [
    {
      roomId: 'RM001',
      roomNo: '#001',
      image: '/assets/hotel_room/room3.jpg',
      title: 'Deluxe Family Room',
      price: 200,
      type: '2 king beds',
      status: 'Available',
      capacity: 4,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM002',
      roomNo: '#002',
      image: '/assets/hotel_room/room3.jpg',
      title: 'Deluxe Family Room',
      price: 200,
      type: '2 king beds',
      status: 'Booked',
      capacity: 4,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM003',
      roomNo: '#003',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: 200,
      type: '2 king beds',
      status: 'Booked',
      capacity: 4,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM004',
      roomNo: '#004',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: 200,
      type: '2 king beds',
      status: 'Maintenance',
      capacity: 4,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM005',
      roomNo: '#005',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: 200,
      type: '2 king beds',
      status: 'Available',
      capacity: 4,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM006',
      roomNo: '#006',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Available',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM007',
      roomNo: '#007',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM008',
      roomNo: '#008',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Available',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM001',
      roomNo: '#001',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: 200,
      type: '2 king beds',
      status: 'Available',
      capacity: 4,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM002',
      roomNo: '#002',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: 200,
      type: '2 king beds',
      status: 'Booked',
      capacity: 4,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM003',
      roomNo: '#003',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: 200,
      type: '2 king beds',
      status: 'Booked',
      capacity: 4,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM004',
      roomNo: '#004',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: 200,
      type: '2 king beds',
      status: 'Maintenance',
      capacity: 4,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM005',
      roomNo: '#005',
      image: '/assets/hotel_room/room1.jpg',
      title: 'Deluxe Family Room',
      price: 200,
      type: '2 king beds',
      status: 'Available',
      capacity: 4,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM006',
      roomNo: '#006',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Available',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM007',
      roomNo: '#007',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM008',
      roomNo: '#008',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Available',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    },
    {
      roomId: 'RM050',
      roomNo: '#050',
      image: '/assets/hotel_room/room2.jpg',
      title: 'Superior Room',
      price: 150,
      type: '1 king bed',
      status: 'Booked',
      capacity: 2,
      amenities: [
        'Free Wi-Fi',
        'Breakfast',
        'Air conditioning',
        'Balcony',
        'TV',
        'Mini-bar'
      ]
    }
  ]

  return (
    <div>
      <AddRoomModalButton />
      <div className='flex flex-col  w-full'>
        <h1 className=' text-[25px] font-medium'>Room List</h1>

        <div className='flex gap-2 pb-2'>
          <RoomFiltering filterBy={'Type'} />
          <RoomFiltering filterBy={'Status'} />
          <RoomFiltering filterBy={'Price'} />
        </div>
      </div>
      <RoomCardListAdmin rooms={rooms} />
    </div>
  )
}

export default Room

