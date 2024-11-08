import React, { useState, useEffect } from 'react'
import { IconButton } from '@mui/material' // Import MUI components
import VisibilityIcon from '@mui/icons-material/Visibility'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import CustomerDetailsModal from './CustomerDetailsModal'
import CustomerDeleteModal from './CustomerDeleteModal'
import CustomerEditModal from './CustomerEditModal'
import axios from 'axios'
const CustomerRow = ({ Customer_data, Booking_data }) => {
  // Modals state
  const [open, setOpen] = React.useState(false)
  const [openEdit, setOpenEdit] = React.useState(false)
  const [openDelete, setOpenDelete] = React.useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleOpenEdit = () => setOpenEdit(true)
  const handleCloseEdit = () => setOpenEdit(false)

  const handleOpenDelete = () => setOpenDelete(true)
  const handleCloseDelete = () => setOpenDelete(false)

  const [customerBooking, setCustomerBooking] = useState(null)
  const [customerRoom, setCustomerRoom] = useState(null)
  // Fetch customer booking info based on customerId
  useEffect(() => {
    const getCustomerBooking = () => {
      const customerBookings = Booking_data.filter(
        booking => booking.customerId === Customer_data.id
      )

      if (customerBookings.length > 0) {
        
        setCustomerBooking(customerBookings[0])
      } else {
        setCustomerBooking(null)
      }
    }

    getCustomerBooking()
  }, [Booking_data, Customer_data])

  // fetch the room info based in booking id

  const DB_HOST = process.env.REACT_APP_DB_HOST

  useEffect(() => {
    const fetchCustomerRoom = async () => {
      if (!customerBooking || !customerBooking.roomId) return // Exit if no booking or roomId

      try {
        const response = await axios.get(
          `${DB_HOST}api/room/${customerBooking.roomId}`
        )
        setCustomerRoom(response.data)
      } catch (error) {
        console.error('Error fetching customer room:', error)
      }
    }

    fetchCustomerRoom()
  }, [customerBooking?.roomId, DB_HOST])



  return (
    <>
      <tr className='bg-white text-black border-b border-gray-300'>
        <th scope='row' className='px-4 pt-3 pb-1 font-medium'>
          {Customer_data.firstName} {Customer_data.lastName}
        </th>

        {/* Check-in and check-out values */}
        <td className='px-4'>
          {customerBooking
            ? customerBooking.isCheckIn && customerBooking.checkInDate
              ? customerBooking.checkInDate.replace('T', ' ')
              : '-'
            : '-'}{' '}
        </td>
        <td className='px-4'>
          {customerBooking
            ? customerBooking.isCheckOut
              ? customerBooking.checkOutDate.replace('T', ' ')
              : '-'
            : '-'}
        </td>
    

        <td className='px-4'>{customerRoom ? customerRoom.roomType : '-'}</td>
        <td className='px-4'>{customerRoom ? "#00"+customerRoom.roomNumber : '-'}</td>

        <td className='px-4'>
          <div className='flex flex-row gap-[10px] items-center'>
            <IconButton onClick={handleOpen}>
              <VisibilityIcon />
            </IconButton>

            <IconButton onClick={handleOpenEdit}>
              <EditIcon />
            </IconButton>

            <IconButton onClick={handleOpenDelete}>
              <DeleteIcon />
            </IconButton>
          </div>
        </td>
      </tr>

      {/* Details Modals */}
      <CustomerDetailsModal open={open} handleClose={handleClose} data={Customer_data}/>

      {/* Delete Modals */}
      <CustomerDeleteModal open={openDelete} handleClose={handleCloseDelete} data = {Customer_data} />

      {/* Edit Modals */}
      <CustomerEditModal open={openEdit} handleClose={handleCloseEdit} data={Customer_data}/>
    </>
  )
}

export default CustomerRow
