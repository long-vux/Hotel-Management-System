import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Icon, IconButton } from '@mui/material' // Import MUI components

const EmployeeRow = ({
  EmployeeID,
  FirstName,
  LastName,
  Gender,
  DateOfBirth,
  Email,
  PhoneNumber,
  Address,
  Avatar,
  EmployeeStatus,
  Salary,
  Role,
  Department
}) => {
  return (
    <tr className='bg-white text-black text-[14px]'>
      <td className='px-4 py-2'>{EmployeeID}</td>
      <td className='px-4 py-2'>
        {FirstName} {LastName}
      </td>
      <td className='px-4 py-2'>{Email}</td>
      <td className='px-4 py-2'>{PhoneNumber}</td>
      <td className='px-4 py-2'>{Department}</td>
      <td className='px-4 py-2'>{Role}</td>
      <td className='px-4 py-2'>${Salary.toFixed(2)}</td>
      <td className='px-4 py-2'>{EmployeeStatus}</td>
      <td className='px-4 py-2'>
        <VisibilityIcon />

        <EditIcon />

        <DeleteIcon />
      </td>
    </tr>
  )
}

export default EmployeeRow
