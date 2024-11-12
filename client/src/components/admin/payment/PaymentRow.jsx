import React from 'react'
import { Delete, Edit , Cancel} from '@mui/icons-material'
import { IconButton } from '@mui/material' // Import MUI components
import Checkbox from '@mui/material/Checkbox'

const PaymentRow = ({ data }) => {
  // id: 1,
  // reservationId: 'RES12345',
  // guestName: 'John Doe',
  // roomNo: '101',
  // amountPaid: 200.0,
  // paymentDate: '2024-10-20',
  // status: 'Confirmed'
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  return (
    <>
      <tr className='bg-white text-black text-[14px] border border-b-gray-100 hover:bg-gray-100'>
        <td className='px-4 py-2'>{data.id}</td>
        <td className='px-4 py-2'>{data.reservationId}</td>
        <td className='px-4 py-2'>{data.guestName}</td>
        <td className='px-4 py-2'>#{data.roomNo}</td>
        <td className='px-4 py-2'>${data.amountPaid.toFixed(2)}</td>
        <td className='px-4 py-2'>{data.paymentDate}</td>
        <td className='px-4 py-2'>{data.status}</td>
        <td className='px-2 py-2 '>
        <IconButton>
            <Edit />
          </IconButton>
          <IconButton>
            <Checkbox {...label} color='success' />{' '}
          </IconButton>

          <IconButton >
            <Cancel sx={{ color: 'red' }} />
          </IconButton>
      
        </td>
      </tr>
    </>
  )
}

export default PaymentRow
