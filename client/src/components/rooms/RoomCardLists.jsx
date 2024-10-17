import React, { useState } from 'react'
import RoomCard from './RoomCard'
import Pagination from '../layout/Pagination'

const RoomCardLists = ({ rooms }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = rooms.slice(firstPostIndex, lastPostIndex)

  return (
    <div className='flex flex-col gap-5'>
      {currentPosts.map((room, index) => (
        <RoomCard
          key={index}
          roomTitle={room.roomTitle}
          imageUrl={room.imageUrl}
          availability={room.availability}
          price={room.price}
          roomType={room.roomType}
          capacity={room.capacity}
        />
      ))}

      <Pagination totalPosts={rooms.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage = {currentPage} />
    </div>
  )
}

export default RoomCardLists