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

  const handlePrintBill = () => {
    const printContent = `
<html>
<head>
  <title>Bill</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    .bill-container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    .bill-header {
      text-align: center;
      color: #333;
      margin-bottom: 20px;
    }
    .bill-details {
      margin-top: 20px;
    }
    .bill-details p {
      font-size: 16px;
      line-height: 1.5;
      margin: 8px 0;
    }
    .bill-details strong {
      color: #555;
    }
    .bill-summary {
      margin-top: 20px;
      border-top: 2px solid #333;
      padding-top: 10px;
    }
    .bill-summary p {
      font-weight: bold;
      font-size: 18px;
      color: #333;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      font-size: 12px;
      color: #777;
    }
  </style>
</head>
<body>
  <div class="bill-container">
    <h1 class="bill-header">Bill</h1>
    <div class="bill-details">
      <p><strong>Customer Name:</strong> ${customerName}</p>
      <p><strong>Room Number:</strong> #00${roomNo}</p>
      <p><strong>Booking ID:</strong> ${data.bookingId}</p>
      <p><strong>Payment Date:</strong> ${
        booking
          ? booking.isCheckout
            ? data.paymentDate.replace('T', ' ')
            : '-'
          : 'Loading...'
      }</p>
      <p><strong>Total Amount:</strong> ${
        booking
          ? booking.isCheckout
            ? `$${data.totalAmount}`
            : '-'
          : 'Loading...'
      }</p>
      <p><strong>Payment Method:</strong> ${
        data.paymentMethod ? data.paymentMethod : '-'
      }</p>
      <p><strong>Status:</strong> ${data.status}</p>
    </div>
    <div class="bill-summary">
      <p>Thank you for your business!</p>
    </div>
    <div class="footer">
      <p>For any inquiries, please contact us.</p>
    </div>
  </div>
</body>
</html>
    `

    const printWindow = window.open('', '_blank')
    printWindow.document.write(printContent)
    printWindow.document.close()
    printWindow.print()
  }

  return (
    <>
      <tr className='bg-white text-black text-[14px] border border-b-gray-100 hover:bg-gray-100'>
        <td className='px-4 py-2'>{data.id}</td>
        <td className='px-4 py-2'>{data.bookingId}</td>
        <td className='px-4 py-2'>{customerName}</td>
        <td className='px-4 py-2'>{roomNo ? `#00${roomNo}` : 'Loading...'}</td>
        <td className='px-4 py-2'>
          {booking
            ? booking.isCheckout
              ? data.paymentDate.replace(' T', ' ')
              : '-'
            : 'Loading...'}
        </td>
        <td className='px-4 py-2'>
          {booking
            ? booking.isCheckout
              ? `$${data.totalAmount}`
              : '-'
            : 'Loading'}
        </td>
        <td className='px-4 py-2'>
          {data.paymentMethod ? data.paymentMethod : '-'}
        </td>
        <td className={`px-4 py-2 `}>
          <span
            className={
              data.status === 'Pending'
                ? 'text-orange-800 bg-orange-200 rounded-l rounded-r p-1'
                : data.status === 'Successfully'
                ? 'text-green-800 bg-green-200  p-1'
                : ''
            }
          >
            {data.status}
          </span>
        </td>{' '}
        <td className='px-4 py-2'>
          {data.status === 'Pending' ? (
            <span>-</span>
          ) : (
            <IconButton onClick={handlePrintBill}>
              <LocalPrintshopIcon />
            </IconButton>
          )}
        </td>
      </tr>
    </>
  )
}

export default PaymentRow
