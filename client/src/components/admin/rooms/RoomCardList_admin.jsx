import React, { useState } from 'react'
import RoomCardAdmin from './RoomCard_admin'
import Pagination from '../../layout/Pagination'

const RoomCardListAdmin = ({ rooms }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(12)

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = rooms.slice(firstPostIndex, lastPostIndex)

  // roomId: 'RM001',
  // roomNo: '#001',
  // image: '/assets/hotel_room/room1.jpg',
  // title: 'Deluxe Family Room',
  // price: 200,
  // type: '2 king beds',
  // status: 'Available',
  // capacity: 4
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {currentPosts.map((room, index) => (
        <RoomCardAdmin
          roomId = {room.roomId}
          key={index}
          image={room.image}
          title={room.title}
          allocated={room.roomNo}
          price={room.price}
          type={room.type}
          status={room.status}
          capacity = {room.capacity}
          amenities = {room.amenities}
        />
      ))}

      <Pagination
        totalPosts={rooms.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}

export default RoomCardListAdmin
