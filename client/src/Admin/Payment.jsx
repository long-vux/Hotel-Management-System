import React, { useState, useEffect } from 'react';
import PaymentList from '../components/admin/payment/PaymentList';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const Payment = () => {
  const DB_HOST = process.env.REACT_APP_DB_HOST;

  const [payment, setPayment] = useState(null);
  const [isPaymentLoading, setIsPaymentLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null); // New state for payment method

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const response = await axios.get(`${DB_HOST}api/Payment`);
        if (response.data) {
          setPayment(response.data);
        } else {
          console.error('Error fetching payment: Invalid response data.');
        }
      } catch (error) {
        console.error('Error fetching payments:', error);
      } finally {
        setIsPaymentLoading(false);
      }
    };
    fetchPayment();
  }, [DB_HOST]);

  // Define the status options
  const statusOptions = ['Pending', 'Successfully'];
  const payOptions = ['Cash', 'Banking'];

  // Filter and sort payments based on selected status and payment method
  const filteredPayments = payment
    ? payment
        .filter(item => 
          (!selectedStatus || item.status === selectedStatus) && 
          (!selectedPaymentMethod || item.paymentMethod === selectedPaymentMethod) // Filter by selected payment method
        )
        .sort((a, b) => {
          // Sort by status
          const statusOrder = {
            Pending: 1,
            Successfully: 2,
            Failed: 3
          };
          return (statusOrder[a.status] || 0) - (statusOrder[b.status] || 0);
        })
    : [];

  return (
    <div>
      <div className='flex flex-col w-full'>
        <h1 className='text-[25px] font-medium'>Payment</h1>
        <div className='flex flex-row items-center gap-[10px] mb-2'>
          <Autocomplete
            disablePortal
            options={statusOptions}
            className='bg-white'
            onChange={(event, newValue) => {
              setSelectedStatus(newValue); // Update selected status
            }}
            renderInput={params => <TextField {...params} label={'Status'} />}
            sx={{
              '& .MuiInputBase-root': {
                width: '200px',
                height: '35px',
                paddingTop: '7px',
                paddingBottom: '7px'
              },
              '& .MuiInputLabel-root': {
                top: '-10px'
              },
              '& .MuiInputLabel-shrink': {
                top: '0px'
              }
            }}
          />
          <Autocomplete
            disablePortal
            options={payOptions}
            className='bg-white'
            onChange={(event, newValue) => {
              setSelectedPaymentMethod(newValue); // Update selected payment method
            }}
            renderInput={params => <TextField {...params} label={'Payment Method'} />}
            sx={{
              '& .MuiInputBase-root': {
                width: '200px',
                height: '35px',
                paddingTop: '7px',
                paddingBottom: '7px'
              },
              '& .MuiInputLabel-root': {
                top: '-10px'
              },
              '& .MuiInputLabel-shrink': {
                top: '0px'
              }
            }}
          />
        </div>
        <table className='text-left bg-white rounded-md w-full pr-[20px]'>
          <thead>
            <tr>
              <th scope='col' className='px-4 py-2 text-[14px]'>ID</th>
              <th scope='col' className='px-4 py-2 text-[14px]'>Reservation ID</th>
              <th scope='col' className='px-4 py-2 text-[14px]'>Guest Name</th>
              <th scope='col' className='px-4 py-2 text-[14px]'>Room No.</th>
              <th scope='col' className='px-4 py-2 text-[14px]'>Payment Date</th>
              <th scope='col' className='px-4 py -2 text-[14px]'>Amount Paid</th>
              <th scope='col' className='px-4 py-2 text-[14px]'>Payment Method</th>
              <th scope='col' className='px-4 py-2 text-[14px]'>Status</th>
              <th scope='col' className='px-4 py-2 text-[14px]'>Action</th>
            </tr>
          </thead>
          <tbody>
            {!isPaymentLoading ? (
              filteredPayments.length > 0 ? (
                <PaymentList paymentData={filteredPayments} />
              ) : (
                <tr>
                  <td colSpan='9' className='text-center p-4'>No payments found.</td>
                </tr>
              )
            ) : (
              <tr>
                <td colSpan='9' className='text-center p-4'>Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Payment;