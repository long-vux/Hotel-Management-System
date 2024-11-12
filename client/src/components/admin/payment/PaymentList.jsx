import React, { useState } from 'react'
import Pagination from '../../layout/Pagination'
import PaymentRow from './PaymentRow'

const PaymentList = ({ paymentData = [] }) => {  // Provide default empty array to avoid undefined
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  // Pagination logic
  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = paymentData.slice(firstPostIndex, lastPostIndex)

  return (
    <>
      <tbody>
        {currentPosts.map((payment, index) => (
          <PaymentRow
            key={index}
            data = {payment}
          />
        ))}
      </tbody>

      <div className='mb-4 mt-2 ml-3'>
        <Pagination
          totalPosts={paymentData.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  )
}

export default PaymentList
