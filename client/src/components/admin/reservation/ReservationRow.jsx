import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Checkbox from '@mui/material/Checkbox'
import { IconButton } from '@mui/material'
import DeleteConfirmModal from './DeleteConfirmModal'
import CancelIcon from '@mui/icons-material/Cancel'

const ReservationRow = ({ data }) => {
  const [openDelete, setOpenDelete] = useState(false)
  const handleOpenDelete = () => setOpenDelete(true)
  const handleCloseDelete = () => setOpenDelete(false)

  const handleApprove = () => {
    console.log('Approve')
  }

  const DB_HOST = process.env.REACT_APP_DB_HOST

  const [customer, setCustomer] = useState(null)
  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await axios.get(
          `${DB_HOST}api/customer/${data.customerId}`
        )
        setCustomer(response.data)
      } catch (error) {
        console.error('Error fetching customer:', error)
      }
    }
    fetchCustomer()
  }, [data.customerId])

  const [room, setRoom] = useState(null)

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await axios.get(`${DB_HOST}api/Room/${data.roomId}`)
        setRoom(response.data)
      } catch (error) {
        console.error('Error fetching room:', error)
      }
    }
    fetchRoom()
  }, [data.roomId])

  

  return (
    <>
      <tr className='bg-white text-black border border-b-gray-100 hover:bg-gray-100'>
        <td className='px-4'>#{data.id}</td>
        <td className='px-4'>
          {customer
            ? `${customer.firstName} ${customer.lastName}`
            : 'Loading...'}
        </td>
        <td className='px-4'>
          {customer ? customer.phoneNumber : 'Loading...'}
        </td>
        <td className='px-4'>{data.guestNumber}</td>
        <td className='px-4'>{room ? room.roomType : 'Loading...'}</td>
        <td className='px-4'>
          {new Date(data.checkInDate)
            .toISOString()
            .substring(0, 10)
            .replace(/-/g, '/')}
          {' - '}
          {new Date(data.checkOutDate)
            .toISOString()
            .substring(0, 10)
            .replace(/-/g, '/')}
        </td>
        <td className='px-4'>{data.bookingDate.replace('T', ' ')}</td>
        <td className='px-4'>{data.totalAmount}$</td>
        <td className='px-4'>{data.status}</td>
        <td className='px-4'>
          <div className='flex flex-row gap-[10px] items-center'>
            <IconButton onClick={handleApprove}>
              <Checkbox
                sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                color='success'
              />

            </IconButton>
            <IconButton onClick={handleOpenDelete}>
              <CancelIcon sx={{ color: 'red' }} />
            </IconButton>
          </div>
        </td>
      </tr>

      <DeleteConfirmModal
        open={openDelete}
        handleClose={handleCloseDelete}
        guestName={data.status}
      />
    </>
  )
}

export default ReservationRow
