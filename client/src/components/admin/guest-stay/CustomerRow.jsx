import React from 'react'
import { IconButton } from '@mui/material' // Import MUI components
import VisibilityIcon from '@mui/icons-material/Visibility'
import DeleteIcon from '@mui/icons-material/Delete'



const CustomerRow = ({
  guestName,
  checkIn,
  checkOut,
  roomType,
  allocatedRoom
}) => {
  return (
    <tr class='bg-white text-black border-b border-gray-300'>
      <th scope='row' class='px-4 pt-3 pb-1 font-medium '>
        {guestName}
      </th>
      <td class='px-4'>{checkIn}</td>
      <td class='px-4'>{checkOut}</td>
      <td class='px-4'>{roomType}</td>
      <td class='px-4'>{allocatedRoom}</td>
      <td class='px-4'>
        <div className='flex flex-row gap-[10px] items-center'>
          <IconButton>
            <VisibilityIcon />
          </IconButton>

          <IconButton>
            <DeleteIcon />
          </IconButton>
        </div>
      </td>
    </tr>
  )
}

export default CustomerRow
