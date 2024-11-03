import React from 'react'
import { CancelPresentationTwoTone } from '@mui/icons-material'
import Checkbox from '@mui/material/Checkbox'
import { IconButton } from '@mui/material' // Import MUI components
import DeleteConfirmModal from './DeleteConfirmModal'
import CancelIcon from '@mui/icons-material/Cancel'
const ReservationRow = ({
  id,
  guestName,
  email,
  phoneNumber,
  roomType,
  totalAmount,
  status,
  checkIn,
  checkOut,
  createdAt
}) => {
  // delete modal handler
  const [openDelete, setOpenDelete] = React.useState(false)
  const handleOpenDelete = () => setOpenDelete(true)
  const handleCloseDelete = () => setOpenDelete(false)

  const handleApprove = () => {
    console.log('Approve')
  }

  return (
    <>
      <tr class='bg-white text-black border border-b-gray-100 hover:bg-gray-100'>
        <td class='px-4'>#{id}</td>
        <td class='px-4'>{guestName}</td>
        <td class='px-4'>{email}</td>
        <td class='px-4'>{phoneNumber}</td>
        <td class='px-4'>{roomType}</td>
        <td class='px-4'>{totalAmount}$</td>
        <td class='px-4'>{status}</td>
        <td class='px-4'>
          {checkIn} - {checkOut}
        </td>
        <td class='px-4'>{createdAt}</td>
        <td class='px-4'>
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
        guestName={guestName}
      />
    </>
  )
}

export default ReservationRow
