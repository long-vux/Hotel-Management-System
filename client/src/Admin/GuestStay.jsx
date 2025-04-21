import React, { useState, useEffect } from 'react';
import BasicDatePicker from '../components/admin/guest-stay/BasicDatePicker';
import CustomerList from '../components/admin/guest-stay/CustomerList';
import axios from 'axios';

const GuestStay = () => {
  const [customer, setCustomer] = useState([]);
  const [booking, setBooking] = useState([]);
  const [isCustomerLoading, setIsCustomerLoading] = useState(true);
  const [isBookingLoading, setIsBookingLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  const DB_HOST = process.env.REACT_APP_DB_HOST;

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await axios.get(`${DB_HOST}api/Customer`);
        setCustomer(response.data.data.reverse());
      } catch (error) {
        console.error('Error fetching customer:', error);
      } finally {
        setIsCustomerLoading(false);
      }
    };

    fetchCustomer();
  }, []);

  useEffect(() => {
    const fetchCustomerBooking = async () => {
      try {
        const response = await axios.get(`${DB_HOST}api/Booking`);
        setBooking(response.data.data);
      } catch (error) {
        console.error('Error fetching booking:', error);
      } finally {
        setIsBookingLoading(false);
      }
    };

    fetchCustomerBooking();
  }, []);

  // Filter customers based on search query
  const filteredCustomers = customer.filter((cust) => {
    const fullName = `${cust.firstName} ${cust.lastName}`.toLowerCase();
    const email = cust.email.toLowerCase();
    const phoneNumber = cust.phoneNumber.toLowerCase();
    const identityNumber = cust.identityNumber.toLowerCase();
    
    // Check if any of the fields include the search query
    return (
      fullName.includes(searchQuery.toLowerCase()) ||
      email.includes(searchQuery.toLowerCase()) ||
      phoneNumber.includes(searchQuery.toLowerCase()) ||
      identityNumber.includes(searchQuery.toLowerCase())
    );
  });

  // const handleSearch = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const response = await axios.get(`${DB_HOST}api/customer`)
  //     setCustomers(response.data)
  //   } catch (error) {
  //     console.error('Error fetching booking:', error)
  //   }
  // }

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
              Customer_Data={filteredCustomers} // Use filtered customers
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