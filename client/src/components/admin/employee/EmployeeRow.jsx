import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Icon, IconButton } from '@mui/material' // Import MUI components
import EmployeeDetails from './EmployeeDetails'
import DeleteConfirmModal from './DeleteConfirmModal'
import EditEmployeeModal from './EditEmployeeModal'

const EmployeeRow = ({ data }) => {
  // details modal handler
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  // details modal handler
  const [openEdit, setOpenEdit] = React.useState(false)
  const handleOpenEdit = () => setOpenEdit(true)
  const handleCloseEdit = () => setOpenEdit(false)

  // delete modal handler
  const [openDelete, setOpenDelete] = React.useState(false)
  const handleOpenDelete = () => setOpenDelete(true)
  const handleCloseDelete = () => setOpenDelete(false)

  const handleViewClick = () => {
    handleOpen() // Open modal for editing
  }

  return (
    <>
      <tr className='bg-white text-black text-[14px] border border-b-gray-100 hover:bg-gray-100'>
        <td className='px-4 py-2'>{data.id}</td>
        <td className='px-4 py-2'>
          {data.firstName} {data.lastName}
        </td>
        <td className='px-4 py-2'>{data.email}</td>
        <td className='px-4 py-2'>{data.phoneNumber}</td>
        <td className='px-4 py-2'>{data.department}</td>
        <td className='px-4 py-2'>{data.role}</td>
        <td className='px-4 py-2'>${data.salary}</td>
        <td className='px-4 py-2'>{data.status}</td>
        <td className='px-2 py-2 '>
          <IconButton onClick={handleViewClick}>
            <VisibilityIcon />
          </IconButton>

          <IconButton>
            <EditIcon onClick={handleOpenEdit} />
          </IconButton>

          <IconButton onClick={handleOpenDelete}>
            <DeleteIcon />
          </IconButton>
        </td>
      </tr>


      <EditEmployeeModal open={openEdit} handleClose={handleCloseEdit} data={data}/>
      {/* Employee Details modal */}
      <EmployeeDetails open={open} handleClose={handleClose} data={data} />

      <DeleteConfirmModal
        open={openDelete}
        handleClose={handleCloseDelete}
        Firstname={data.firstName}
        Lastname={data.lastName}
        id = {data.id}
      />
    </>
  )
}

export default EmployeeRow
