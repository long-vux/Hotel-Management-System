import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

//   dateOfBirth
// :
// "2004-05-02T00:00:00"
// department
// :
// "IT"
// email
// :
// "nguyennguyen8343@gmail.com"
// firstName
// :
// "TẠ"
// id
// :
// 4
// imagePath
// :
// "/images/employees/50e4212e-c962-476c-9725-689c985b5bf4_ảnh3x4.png"
// isWoman
// :
// false
// lastName
// :
// "NGUYÊN"
// phoneNumber
// :
// "0918988154"
// role
// :
// "Dev"
// salary
// :
// "10000000000000"
const EmployeeDetails = ({
  open,
  handleClose,
  data
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
  const [firstName, setFirstName] = useState(data.firstName)
  const [lastName, setLastName] = useState(data.lastName)
  const [email, setEmail] = useState(data.email)
  const [gender, setGender] = useState(data.isWoman)
  const [status, setStatus] = useState('Active')
  const [department, setDepartment] = useState(data.department)
  const [dob, setDob] = useState(data.dateOfBirth)
  const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber)
  const [address, setAddress] = useState(data.address)
  const [role, setRole] = useState(data.role)
  const [salary, setSalary] = useState(data.salary)
  const [employeeID, setEmployeeID] = useState(data.id)

  const DB_URL = process.env.REACT_APP_DB_HOST
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
            <div
              className={`border-2 border-dashed rounded-md p-4 flex items-center justify-center cursor-pointer h-48 w-20'`}
              style={{ minHeight: '200px' }}
            >
              <img
                src={DB_URL + data.imagePath}
                className='rounded-md'
                alt='Employee Avatar'
                onError={e => {
                  e.target.src = '/fallback-image.png' // Replace with your desired fallback image
                }}
                style={{ maxHeight: '100%', maxWidth: '100%' }}
              />{' '}
            </div>
            <div className='w-full center flex-col'>
              <div className='text-[20px] font-bold'>
                {firstName} {lastName}
              </div>
              <div className='text-[16px]'>{role}</div>
            </div>
          </div>

          {/* Employee's details information */}
          <div className='grid grid-cols-3 gap-4'>
            <div className='flex flex-col gap-2'>
              <TextField
                label='ID'
                value={employeeID}
                variant='standard'
                disabled
              />

              <TextField
                label='Gender'
                value={gender === 0 ? 'Male' : 'Female'}
                onChange={e => setGender(e.target.value)}
                variant='standard'
                disabled
              />

              <TextField
                label='Email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                variant='standard'
                disabled
              />

              <TextField
                label='Status'
                value={status}
                onChange={e => setStatus(e.target.value)}
                variant='standard'
                disabled
              />
            </div>

            <div className='flex flex-col gap-2'>
              <TextField
                label='Department'
                value={department}
                onChange={e => setDepartment(e.target.value)}
                variant='standard'
                disabled
              />

              <TextField
                label='DOB'
                value={dob.split('T')[0]}
                onChange={e => setDob(e.target.value)}
                variant='standard'
                disabled
              />

              <TextField
                label='Phone number'
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
                variant='standard'
                disabled
              />

              <TextField
                label='Salary'
                value={salary}
                onChange={e => setSalary(e.target.value)}
                variant='standard'
                disabled
              />
            </div>

            <div className='flex flex-col h-full justify-between gap-2'>
              <TextField
                label='Address'
                value={address}
                onChange={e => setAddress(e.target.value)}
                variant='standard'
                disabled
              />
             
            </div>
          </div>
        </Typography>
      </Box>
    </Modal>
  )
}

export default EmployeeDetails
