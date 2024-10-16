import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Icon, IconButton } from '@mui/material' // Import MUI components
import EmployeeDetails from './EmployeeDetails'
import DeleteConfirmModal from './DeleteConfirmModal'

const EmployeeRow = ({
  EmployeeID,
  FirstName,
  LastName,
  Gender,
  DateOfBirth,
  Email,
  PhoneNumber,
  Address,
  Avartar,
  EmployeeStatus,
  Salary,
  Role,
  Department
}) => {
  // details modal handler
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  // delete modal handler
  const [openDelete, setOpenDelete] = React.useState(false)
  const handleOpenDelete = () => setOpenDelete(true)
  const handleCloseDelete = () => setOpenDelete(false)

  const [isEdit, setIsEdit] = React.useState(false)
  const handleEditClick = () => {
    setIsEdit(true)
    handleOpen() // Open modal for editing
  }
  const handleViewClick = () => {
    setIsEdit(false)
    handleOpen() // Open modal for editing
  }

  return (
    <>
      <tr className='bg-white text-black text-[14px] border border-b-gray-100 hover:bg-gray-100'>
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
        <td className='px-2 py-2 '>
          <IconButton onClick={handleViewClick}>
            <VisibilityIcon />
          </IconButton>

          <IconButton>
            <EditIcon  onClick={handleEditClick}/>
          </IconButton>

          <IconButton onClick={handleOpenDelete}>
            <DeleteIcon />
          </IconButton>
        </td>
      </tr>

      {/* Employee Details modal */}
      <EmployeeDetails
        open={open}
        handleClose={handleClose}
        isEdit={isEdit}
        EmployeeID={EmployeeID}
        FirstName={FirstName}
        LastName={LastName}
        Gender={Gender}
        DateOfBirth={DateOfBirth}
        Email={Email}
        PhoneNumber={PhoneNumber}
        Address={Address}
        Avartar={Avartar}
        EmployeeStatus={EmployeeStatus}
        Salary={Salary}
        Role={Role}
        Department={Department}
      />

      <DeleteConfirmModal
        open={openDelete}
        handleClose={handleCloseDelete}
        Firstname={FirstName}
        Lastname={LastName}
      />
    </>
  )
}

export default EmployeeRow
