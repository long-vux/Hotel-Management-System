import React, { useState } from 'react'
import CustomerRow from './CustomerRow'
import Pagination from '../../layout/Pagination'

const CustomerList = ({ guestData }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(6)

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = guestData.slice(firstPostIndex, lastPostIndex)

  return (
    <tbody>
      {currentPosts.map((guest, index) => (
        <CustomerRow
          key={index}
          guestName={guest.guestName}
          checkIn={guest.checkIn}
          checkOut={guest.checkOut}
          roomType={guest.roomType}
          allocatedRoom={guest.allocatedRoom}
          dueAmount={guest.dueAmount}
        />
      ))}
      <div className='my-4 ml-3'>
        <Pagination totalPosts={guestData.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </div>
      
    </tbody>

  )
}

export default CustomerList