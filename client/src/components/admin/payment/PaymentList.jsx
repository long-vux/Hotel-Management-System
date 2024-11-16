import React, { useState } from 'react';
import Pagination from '../../layout/Pagination';
import PaymentRow from './PaymentRow';

const PaymentList = ({ paymentData = [] }) => { // Default to empty array if undefined
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  // Safeguard against null or undefined paymentData
  const sanitizedPaymentData = Array.isArray(paymentData) ? paymentData : [];

  // Pagination logic
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = sanitizedPaymentData.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <tbody>
        {currentPosts.map((payment, index) => (
          <PaymentRow
            key={index}
            data={payment}
          />
        ))}
      </tbody>

      <div className='mb-4 mt-2 ml-3'>
        <Pagination
          totalPosts={sanitizedPaymentData.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default PaymentList;
