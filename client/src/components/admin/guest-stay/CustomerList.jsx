import React, { useState } from 'react'
import CustomerRow from './CustomerRow'
import Pagination from '../../layout/Pagination'

const CustomerList = ({ Customer_Data, Booking_Data }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = Customer_Data.slice(firstPostIndex, lastPostIndex)

  
  

  return (
    <tbody>
      {currentPosts.map((customer, index) => (
        
        <CustomerRow
          key={index}
          Customer_data = {customer}
          Booking_data = {Booking_Data}
        />
      ))}
      <div className='my-4 ml-4'>
        <Pagination totalPosts={Customer_Data.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </div>
    </tbody>

  )
}

export default CustomerList