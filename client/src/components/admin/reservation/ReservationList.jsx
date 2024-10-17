import React, { useState } from 'react'
import ReservationRow from './ReservationRow'
import Pagination from '../../layout/Pagination'

const ReservationList = ({ reservationData = [] }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(8)

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = reservationData.slice(firstPostIndex, lastPostIndex)

  return (
    <tbody>
      {currentPosts.map((data, index) => (
        <ReservationRow
          key={index}
          id={data.id}
          guestName={data.guestName}
          email={data.email}
          phoneNumber={data.phoneNumber}
          roomType={data.roomType}
          totalAmount={data.totalAmount}
          status={data.status}
          checkIn={data.checkIn}
          checkOut={data.checkOut}
          createdAt={data.createdAt}
        />
      ))}
      <div className='mb-4 mt-2 ml-3'>
        <Pagination 
          totalPosts={reservationData.length} 
          postsPerPage={postsPerPage} 
          setCurrentPage={setCurrentPage} 
          currentPage={currentPage} 
        />
      </div>
    </tbody>

  )
}

export default ReservationList