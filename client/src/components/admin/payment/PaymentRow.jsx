import React, { useState, useEffect } from 'react'
import { IconButton } from '@mui/material'
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop'
import axios from 'axios'

const PaymentRow = ({ data }) => {
  const DB_HOST = process.env.REACT_APP_DB_HOST

  const [booking, setBooking] = useState(null)
  const [roomNo, setRoomNo] = useState(null)
  const [customerName, setCustomerName] = useState('Loading...')

  useEffect(() => {
    const fetchBookingAndCustomer = async () => {
      try {
        const bookingResponse = await axios.get(
          `${DB_HOST}api/Booking/${data.bookingId}`
        )
        if (bookingResponse.data) {
          const bookingData = bookingResponse.data
          setBooking(bookingData)

          const roomResponse = await axios.get(
            `${DB_HOST}api/Room/${bookingData.roomId}`
          )
          if (roomResponse.data) {
            setRoomNo(roomResponse.data.roomNumber)
          } else {
            console.error('Error fetching room: Invalid response data.')
          }

          const customerResponse = await axios.get(
            `${DB_HOST}api/customer/${bookingData.customerId}`
          )
          if (customerResponse.data) {
            setCustomerName(
              `${customerResponse.data.firstName} ${customerResponse.data.lastName}`
            )
          } else {
            console.error('Error fetching customer: Invalid response data.')
          }
        } else {
          console.error('Error fetching booking: Invalid response data.')
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchBookingAndCustomer()
  }, [data.bookingId, DB_HOST])

  return (
    <>
      <tr className='bg-white text-black text-[14px] border border-b-gray-100 hover:bg-gray-100'>
        <td className='px-4 py-2'>{data.id}</td>
        <td className='px-4 py-2'>{data.bookingId}</td>
        <td className='px-4 py-2'>{customerName}</td>
        <td className='px-4 py-2'>
          {roomNo ? `#00${roomNo}` : 'Loading...'}
        </td>{' '}
        {/* Use template literals here */}
        <td className='px-4 py-2'>
          {booking
            ? booking.isCheckout
              ? data.paymentDate.replace('T', ' ')
              : "-"
            : 'Loading...'}
        </td>
        <td className='px-4 py-2'>
          {booking
            ? booking.isCheckout
              ? `$${data.totalAmount}`
              : "-"
            : 'Loading'}
        </td>
        <td className='px-4 py-2'>
          {data.paymentMethod ? data.paymentMethod : '-'}
        </td>
        <td className='px-4 py-2'>{data.status}</td>
        <td className='px-4 py-2'>
          <IconButton>
            <LocalPrintshopIcon />
          </IconButton>
        </td>
      </tr>
    </>
  )
}

export default PaymentRow
