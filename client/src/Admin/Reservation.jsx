import React, { useState, useEffect } from 'react'
import ReservationList from '../components/admin/reservation/ReservationList'
import BasicDatePicker from '../components/admin/reservation/BasicDatePicker'
import StatusFiltering from '../components/admin/reservation/Status_filtering'

import axios from 'axios'
import AddBookingModal from '../components/admin/reservation/addBookingModal'

const status = ['Pending', 'Confirmed', 'Cancelled']

const reservationData = [
  {
    id: 'RS001',
    guestName: 'John Doe',
    email: 'john@gmail.com',
    phoneNumber: '081234567890',
    roomType: 'Single Bed',
    totalAmount: '98',
    status: status[0],
    checkIn: 'Sep 11',
    checkOut: 'Sep 12',
    createdAt: 'Sep 10 1:00 PM'
  },
  {
    id: 'RS002',
    guestName: 'Jane Doe',
    email: 'jane@gmail.com',
    phoneNumber: '081238945670',
    roomType: 'Double Bed',
    totalAmount: '198',
    status: status[1],
    checkIn: 'Sep 11',
    checkOut: 'Sep 12',
    createdAt: 'Sep 10 1:00 PM'
  },
  {
    id: 'RS003',
    guestName: 'Harry Potter',
    email: 'harry@gmail.com',
    phoneNumber: '081234567890',
    roomType: 'Single Bed',
    totalAmount: '98',
    status: status[0],
    checkIn: 'Sep 11',
    checkOut: 'Sep 12',
    createdAt: 'Sep 10 1:00 PM'
  },
  {
    id: 'RS004',
    guestName: 'Hermione Granger',
    email: 'hermione@gmail.com',
    phoneNumber: '081234567890',
    roomType: 'Single Bed',
    totalAmount: '98',
    status: status[0],
    checkIn: 'Sep 11',
    checkOut: 'Sep 12',
    createdAt: 'Sep 10 1:00 PM'
  },
  {
    id: 'RS005',
    guestName: 'Ron Weasley',
    email: 'ron@gmail.com',
    phoneNumber: '081234567890',
    roomType: 'Single Bed',
    totalAmount: '98',
    status: status[0],
    checkIn: 'Sep 11',
    checkOut: 'Sep 12',
    createdAt: 'Sep 10 1:00 PM'
  },
  {
    id: 'RS006',
    guestName: 'Draco Malfoy',
    email: 'draco@gmail.com',
    phoneNumber: '081234567890',
    roomType: 'Single Bed',
    totalAmount: '98',
    status: status[0],
    checkIn: 'Sep 11',
    checkOut: 'Sep 12',
    createdAt: 'Sep 10 1:00 PM'
  },
  {
    id: 'RS007',
    guestName: 'Ginny Weasley',
    email: 'ginny@gmail.com',
    phoneNumber: '081234567890',
    roomType: 'Single Bed',
    totalAmount: '98',
    status: status[0],
    checkIn: 'Sep 11',
    checkOut: 'Sep 12',
    createdAt: 'Sep 10 1:00 PM'
  },
  {
    id: 'RS008',
    guestName: 'Luna Lovegood',
    email: 'luna@gmail.com',
    phoneNumber: '081234567890',
    roomType: 'Single Bed',
    totalAmount: '98',
    status: status[0],
    checkIn: 'Sep 11',
    checkOut: 'Sep 12',
    createdAt: 'Sep 10 1:00 PM'
  },
  {
    id: 'RS009',
    guestName: 'Neville Longbottom',
    email: 'neville@gmail.com',
    phoneNumber: '081234567890',
    roomType: 'Single Bed',
    totalAmount: '98',
    status: status[0],
    checkIn: 'Sep 11',
    checkOut: 'Sep 12',
    createdAt: 'Sep 10 1:00 PM'
  },
  {
    id: 'RS010',
    guestName: 'Fred Weasley',
    email: 'fred@gmail.com',
    phoneNumber: '081234567890',
    roomType: 'Single Bed',
    totalAmount: '98',
    status: status[0],
    checkIn: 'Sep 11',
    checkOut: 'Sep 12',
    createdAt: 'Sep 10 1:00 PM'
  },
  {
    id: 'RS011',
    guestName: 'George Weasley',
    email: 'george@gmail.com',
    phoneNumber: '081234567890',
    roomType: 'Single Bed',
    totalAmount: '98',
    status: status[0],
    checkIn: 'Sep 11',
    checkOut: 'Sep 12',
    createdAt: 'Sep 10 1:00 PM'
  },
  {
    id: 'RS012',
    guestName: 'Ron Weasley',
    email: 'ron@gmail.com',
    phoneNumber: '081234567890',
    roomType: 'Single Bed',
    totalAmount: '98',
    status: status[0],
    checkIn: 'Sep 11',
    checkOut: 'Sep 12',
    createdAt: 'Sep 10 1:00 PM'
  },
  {
    id: 'RS013',
    guestName: 'Harry Potter',
    email: 'harry@gmail.com',
    phoneNumber: '081234567890',
    roomType: 'Single Bed',
    totalAmount: '98',
    status: status[0],
    checkIn: 'Sep 11',
    checkOut: 'Sep 12',
    createdAt: 'Sep 10 1:00 PM'
  },
  {
    id: 'RS014',
    guestName: 'Harry Potter',
    email: 'harry@gmail.com',
    phoneNumber: '081234567890',
    roomType: 'Single Bed',
    totalAmount: '98',
    status: status[0],
    checkIn: 'Sep 11',
    checkOut: 'Sep 12',
    createdAt: 'Sep 10 1:00 PM'
  },
  {
    id: 'RS015',
    guestName: 'Harry Potter',
    email: 'harry@gmail.com',
    phoneNumber: '081234567890',
    roomType: 'Single Bed',
    totalAmount: '98',
    status: status[0],
    checkIn: 'Sep 11',
    checkOut: 'Sep 12',
    createdAt: 'Sep 10 1:00 PM'
  }
]

const Reservation = () => {
  const DB_HOST = process.env.REACT_APP_DB_HOST

  const [booking, setBooking] = useState(null)
  const [isBookingLoading, setIsBookingLoading] = useState(null)

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await axios.get(`${DB_HOST}api/Booking`)
        if (response.data) {
          setBooking(response.data.reverse());
        } else {
          console.error("Error fetching bookings: Invalid response data.");
        }
      } catch (error) {
        console.error('Error fetching customer:', error)
      } finally {
        setIsBookingLoading(false)
      }
    }

    fetchBooking()
  }, [])

  return (
    <div className='w-full h-[505px] flex flex-col mb-[130px]'>
      <h1 id='quick-action' className='text-[24px] font-bold'>
        Reservation
      </h1>
      <div className='w-full flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center gap-[10px] '>
          <span className='text-[16px]'>Show</span>
          <BasicDatePicker />
          <BasicDatePicker />
          <StatusFiltering filterBy={'Status'} />
        </div>
        <input
          type='text'
          placeholder='Search Customer'
          className='w-[20%] h-[40px] text-[14px] text-bold border border-gray-500 rounded-full px-[15px]'
        />
      </div>
      <div class='ml-1'>
        <table class='text-left bg-white rounded-md w-full'>
          <thead class=''>
            <tr className='text-[16px]'>
              <th scope='col' class='pl-4 py-2'>
                ID
              </th>
              <th scope='col' class='px-4 py-2'>
                Guest Name
              </th>
              <th scope='col' class='px-4 py-2'>
                Phone Number
              </th>
              <th scope='col' class='px-4 py-2'>
                Number of Guests{' '}
              </th>
              <th scope='col' class='px-4 py-2'>
                Room Type
              </th>
              <th scope='col' class='px-4 py-2'>
                Check in / out dates
              </th>
              <th scope='col' class='px-4 py-2'>
                Created At
              </th>
              <th scope='col' class='px-4 py-2'>
                Total Amount
              </th>
              <th scope='col' class='px-4 py-2'>
                Status
              </th>
              <th scope='col' class='px-9 py-2'>
                Action
              </th>
            </tr>
          </thead>
          {!isBookingLoading ? (
            <ReservationList reservationData={reservationData} data={booking} />
          ) : (
            <tbody>
              <tr>
                <td colSpan='10 ' className='text-center p-4 w-full'>
                  Loading...
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>

      <AddBookingModal/>
    </div>
  )
}

export default Reservation
