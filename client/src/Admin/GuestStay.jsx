import React, { useState, useEffect } from 'react'
import BasicDatePicker from '../components/admin/guest-stay/BasicDatePicker'
import CustomerList from '../components/admin/guest-stay/CustomerList'
import axios from 'axios'



const GuestStay = () => {
  const [customer, setCustomer] = useState([])
  const [booking, setBooking] = useState([])
  const [isCustomerLoading, setIsCustomerLoading] = useState(true)
  const [isBookingLoading, setIsBookingLoading] = useState(true)

  const DB_HOST = process.env.REACT_APP_DB_HOST;

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get(`${DB_HOST}api/customer`)
        setCustomer(response.data)
      } catch (error) {
        console.error('Error fetching customer:', error);
      } finally {
        setIsCustomerLoading(false);
      }
    };

    fetchCustomer()
  }, [])

  useEffect(() => {
    const fetchCustomerBooking = async () => {
      try {
        const response = await axios.get(`${DB_HOST}api/booking`)
        setBooking(response.data)
      } catch (error) {
        console.error('Error fetching booking:', error);
      } finally {
        setIsBookingLoading(false);
      }
    };

    fetchCustomerBooking()
  }, [])

  return (
    <div className='w-full h-[505px] flex flex-col mb-[110px]'>
      <h1 id='quick-action' className='text-[20px] font-bold'>
        Guest And Stays
      </h1>
      <div className='w-full flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center gap-[10px] '>
          <span className='text-[16px]'>Show</span>
          <BasicDatePicker />
        </div>
        <input
          onChange={handleSearch}
          type='text'
          placeholder='Search Customer'
          className='w-[20%] h-[40px] text-[14px] text-bold border border-gray-500 rounded-full px-[15px]'
          value={searchQuery} // Bind search query to input
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
        />
      </div>
      <div className='ml-1'>
        <table className='text-left bg-white rounded-md w-full'>
          <thead>
            <tr className='text-[16px]'>
              <th scope='col' className='px-4 py-2'>Guest Name</th>
              <th scope='col' className='px-4 py-2'>Check in</th>
              <th scope='col' className='px-4 py-2'>Check out</th>
              <th scope='col' className='px-4 py-2'>Room Type</th>
              <th scope='col' className='px-4 py-2'>Allocated Room</th>
              <th scope='col' className='px-9 py-2'>Action</th>
            </tr>
          </thead>
          {!isCustomerLoading && !isBookingLoading ? (
            <CustomerList
              Customer_Data={customer}
              Booking_Data={booking}
            />
          ) : (
            <tbody>
              <tr>
                <td colSpan="6" className="text-center p-4">Loading...</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default GuestStay;