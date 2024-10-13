import React, { useState } from 'react'
import RoomCardAdmin from './RoomCard_admin'
import Pagination from '../../layout/Pagination'

const RoomCardListAdmin = ({ rooms }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(12)

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = rooms.slice(firstPostIndex, lastPostIndex)

  return (
    <div className='grid grid-cols-4 gap-4 '>
      {currentPosts.map((room, index) => (
        <RoomCardAdmin
          key={index}
          image={room.image}
          title={room.title}
          allocated={room.allocated}
          price={room.price}
          type={room.type}
          status={room.status}
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