import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const EmployeeDetails = ({
  open,
  handleClose,
  handleEdit,
  handleSave,
  isEdit,
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
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    border: 'none',
    borderRadius: 2
  }

  // State for editable fields
  const [firstName, setFirstName] = useState(FirstName)
  const [lastName, setLastName] = useState(LastName)
  const [email, setEmail] = useState(Email)
  const [gender, setGender] = useState(Gender)
  const [status, setStatus] = useState(EmployeeStatus)
  const [department, setDepartment] = useState(Department)
  const [dob, setDob] = useState(DateOfBirth)
  const [phoneNumber, setPhoneNumber] = useState(PhoneNumber)
  const [address, setAddress] = useState(Address)
  const [salary, setSalary] = useState(Salary)

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography id='modal-modal-description' className='flex gap-4'>
          {/* Avatar and Employee's name & role */}
          <div className='flex flex-col gap-1'>
            <img src='https://placehold.co/200x200' className='rounded-md' alt='Employee Avatar' />
            <div className='w-full center flex-col'>
              <div className='text-[20px] font-bold'>
                {firstName} {lastName}
              </div>
              <div className='text-[16px]'>{Role}</div>
            </div>
          </div>

          {/* Employee's details information */}
          <div className='grid grid-cols-3 gap-4'>
            <div className='flex flex-col gap-2'>
              <TextField
                label='ID'
                value={EmployeeID}
                variant='standard'
                disabled
              />

              <TextField
                label='Gender'
                value={gender === 0 ? 'Male' : 'Female'}
                onChange={(e) => setGender(e.target.value)}
                variant='standard'
                disabled={!isEdit}
              />

              <TextField
                label='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant='standard'
                disabled={!isEdit}
              />

              <TextField
                label='Status'
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                variant='standard'
                disabled={!isEdit}
              />
            </div>

            <div className='flex flex-col gap-2'>
              <TextField
                label='Department'
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                variant='standard'
                disabled={!isEdit}
              />

              <TextField
                label='DOB'
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                variant='standard'
                disabled={!isEdit}
              />

              <TextField
                label='Phone number'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                variant='standard'
                disabled={!isEdit}
              />

              <TextField
                label='Salary'
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                variant='standard'
                disabled={!isEdit}
              />
            </div>

            <div className='flex flex-col h-full justify-between gap-2'>
              <TextField
                label='Address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                variant='standard'
                disabled={!isEdit}
              />
              <div className='flex justify-end flex-row gap-2'>
                {isEdit ? (
                  <Button variant='contained' color='primary' onClick={handleSave}>
                    Save
                  </Button>
                ) : (
                  <Button variant='outlined' onClick={handleEdit} className='hover:bg-blue-900 hover:text-white'>
                    Edit
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Typography>
      </Box>
    </Modal>
  )
}

export default EmployeeDetails
