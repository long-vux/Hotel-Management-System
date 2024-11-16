import React, { useState, useEffect } from 'react';
import ReservationList from '../components/admin/reservation/ReservationList';
import BasicDatePicker from '../components/admin/reservation/BasicDatePicker';
import axios from 'axios';
import AddBookingModal from '../components/admin/reservation/addBookingModal';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const options = ['Pending', 'Checked In', 'Checked Out', 'Canceled'];

const Reservation = () => {
  const DB_HOST = process.env.REACT_APP_DB_HOST;

  const [booking, setBooking] = useState(null);
  const [isBookingLoading, setIsBookingLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState(null); // State for selected status

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await axios.get(`${DB_HOST}api/Booking`);
        if (response.data) {
          setBooking(response.data.reverse());
        } else {
          console.error('Error fetching bookings: Invalid response data.');
        }
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setIsBookingLoading(false);
      }
    };

    fetchBooking();
  }, [DB_HOST]);

  // Filter bookings based on selected status
  const filteredBookings = selectedStatus
    ? booking?.filter(b => b.status === selectedStatus)
    : booking;

  return (
    <div className='w-full h-[505px] flex flex-col mb-[130px]'>
      <h1 id='quick-action' className='text-[24px] font-bold'>
        Reservation
      </h1>
      <div className='w-full flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center gap-[10px]  m-3'>


          {/* Status filtering */}
          <Autocomplete
            disablePortal
            options={options}
            className='bg-white'
            onChange={(event, newValue) => {
              setSelectedStatus(newValue); // Update selected status
            }}
            renderInput={params => <TextField {...params} label={"Status"} />}
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
       
      </div>
      <div className='ml-1'>
        <table className='text-left bg-white rounded-md w-full'>
          <thead>
            <tr className='text-[16px]'>
              <th scope='col' className='pl-4 py-2'>ID</th>
              <th scope='col' className='px-4 py-2'>Guest Name</th>
              <th scope='col' className='px-4 py-2'>Phone Number</th>
              <th scope='col' className='px-4 py-2'>Number of Guests</th>
              <th scope='col' className='px-4 py-2'>Room Type</th>
              <th scope='col' className='px-4 py-2'>Check in / out dates</th>
              <th scope='col' className='px-4 py-2'>Created At</th>
              <th scope='col' className='px-4 py-2'>Total Amount</th>
              <th scope='col' className='px-4 py-2'>Status</th>
              <th scope='col' className='px- 9 py-2'>Action</th>
            </tr>
          </thead>
          {!isBookingLoading ? (
            <ReservationList data={filteredBookings} /> // Use filtered bookings here
          ) : (
            <tbody>
              <tr>
                <td colSpan='10' className='text-center p-4 w-full'>
                  Loading...
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>

      <AddBookingModal />
    </div>
  );
};

export default Reservation;