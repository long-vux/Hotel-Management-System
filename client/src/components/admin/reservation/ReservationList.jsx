import React, { useState } from 'react'
import ReservationRow from './ReservationRow'
import Pagination from '../../layout/Pagination'

const ReservationList = ({ reservationData = [], data }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(8)

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = (data || []).slice(firstPostIndex, lastPostIndex)

  return (
    <tbody>
      {currentPosts.map((bookingData, index) => (
        <ReservationRow key={index} data={bookingData} />
      ))}
      <div className='mb-4 mt-2 ml-3'>
        <Pagination
          totalPosts={ (data || []).length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </tbody>
  )
}

export default ReservationList
