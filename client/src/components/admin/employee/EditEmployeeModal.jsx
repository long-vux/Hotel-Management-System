import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import {
  MenuItem,
  Box,
  Typography,
  Modal,
  TextField,
  Autocomplete,
  Button
} from '@mui/material'
const EditEmployeeModal = ({ open, handleClose, data }) => {
  const DB_HOST = process.env.REACT_APP_DB_HOST

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

  const [image, setImage] = useState(null)
  const [firstName, setFirstName] = useState(data.firstName)
  const [lastName, setLastName] = useState(data.lastName)
  const [email, setEmail] = useState(data.email)
  const [gender, setGender] = useState(data.isWoman ? 'Woman' : 'Male')
  const [status, setStatus] = useState(data.status)
  const [department, setDepartment] = useState(data.department)
  const [dob, setDob] = useState(data.dateOfBirth)
  const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber)
  const [address, setAddress] = useState(data.address)
  const [role, setRole] = useState(data.role)
  const [salary, setSalary] = useState(data.salary)
  const [employeeID, setEmployeeID] = useState(data.id)

  const handleFileChange = e => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
    }
  }

  const handleSubmit = async () => {
    const formData = new FormData()
    const formattedDob = dob
      ? new Date(dob).toISOString() // You can send the date as a full ISO string
      : ''

    // Append employee data to the FormData object
    formData.append('FirstName', firstName)
    formData.append('LastName', lastName)
    formData.append('Email', email)
    formData.append('Role', role)
    formData.append('Status', status)
    formData.append('IsWoman', gender === 'Female') // Use boolean for IsWoman
    formData.append('Department', department)
    formData.append('DateOfBirth', formattedDob) // Use ISO date format
    formData.append('PhoneNumber', phoneNumber) // Ensure field names match server expectations
    formData.append('Address', address)
    formData.append('Salary', salary)

    // Append image data if exists
    if (image) {
      formData.append('Image', image) // Append the actual file object directly
    } else {
      // If the image is not provided, append an empty value or handle it based on your API requirements
      formData.append('Image', '') // Optional, depending on backend requirements
    }

    try {
      const response = await axios.put(
        `${DB_HOST}api/Employee/${data.id}`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' } // Ensure multipart/form-data is set
        }
      )

      console.log('Employee data is updated:', response.data)
      handleClose()
      window.location.reload()
    } catch (error) {
      console.error(
        'Error saving employee:',
        error.response ? error.response.data : error.message
      )
    }
  }

  const Roles = [
    'General Manager',
    'Assistant Manager',
    'Front Desk Manager',
    'Front Desk Agent',
    'Concierge',
    'Housekeeping Manager',
    'Housekeeper',
    'Maintenance Manager',
    'Maintenance Technician',
    'Food and Beverage Manager',
    'Restaurant Server',
    'Bartender',
    'Banquet Manager',
    'Banquet Server',
    'Chef',
    'Sous Chef',
    'Cook',
    'Room Service Attendant',
    'Spa Manager',
    'Spa Therapist'
  ]
  const Departments = [
    'Front Office',
    'Housekeeping',
    'Food and Beverage',
    'Engineering and Maintenance',
    'Sales and Marketing',
    'Finance and Accounting',
    'Human Resources',
    'Security',
    'IT Support',
    'Reservations',
    'Spa and Wellness',
    'Guest Services',
    'Banquet and Events',
    'Laundry',
    'Room Service',
    'Concierge',
    'Purchasing',
    'Public Relations',
    'Recreation and Entertainment',
    'Valet and Transportation'
  ]

  const status_options = ['Active', 'Inactive', 'On leave']

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography id='modal-modal-description' className='flex gap-4'>
          <div className='flex flex-col gap-1'>
            <div
              className={`border-2 border-dashed rounded-md p-4 flex items-center justify-center cursor-pointer ${
                image ? 'h-48' : 'h-32'
              }`}
              style={{ minHeight: '200px' }}
            >
              <img
                src={
                  image
                    ? URL.createObjectURL(image)
                    : DB_HOST + data.imagePath.slice(1)
                }
                className='rounded-md'
                alt='Employee Avatar'
                style={{ maxHeight: '100%', maxWidth: '100%' }}
              />
            </div>
            {/* Button to trigger file input */}
            <Button
              variant='outlined'
              sx={{ fontSize: '12px' }}
              component='label'
            >
              Upload Image
              <input
                type='file'
                accept='image/*'
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            </Button>
          </div>

          {/* Employee details */}
          <div className='grid grid-cols-3 gap-4'>
            <div className='flex flex-col gap-2'>
              <TextField
                label='First Name'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                variant='standard'
              />
              <TextField
                label='Last Name'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                variant='standard'
              />

              <FormControl variant='standard' fullWidth>
                <InputLabel id='role-label'>Role</InputLabel>
                <Select
                  labelId='role-label'
                  value={role}
                  onChange={e => setRole(e.target.value)}
                >
                  {Roles.map(roleOption => (
                    <MenuItem key={roleOption} value={roleOption}>
                      {roleOption}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label='Email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                variant='standard'
              />
              <FormControl variant='standard'>
                <InputLabel id='gender-label'>Gender</InputLabel>
                <Select
                  labelId='gender-label'
                  value={gender}
                  onChange={e => setGender(e.target.value)}
                >
                  <MenuItem value='Male'>Male</MenuItem>
                  <MenuItem value='Female'>Female</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className='flex flex-col gap-2'>
              <FormControl variant='standard' fullWidth>
                <InputLabel id='department-label'>Department</InputLabel>
                <Select
                  labelId='department-label'
                  value={department}
                  onChange={e => setDepartment(e.target.value)}
                  label='Department'
                >
                  {Departments.map(dept => (
                    <MenuItem key={dept} value={dept}>
                      {dept}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label='DOB'
                type='date'
                value={dob}
                onChange={e => setDob(e.target.value)}
                variant='standard'
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label='Phone Number'
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
                variant='standard'
              />
              <TextField
                label='Salary'
                value={salary}
                onChange={e => setSalary(e.target.value)}
                variant='standard'
              />
              <FormControl variant='standard' fullWidth>
                <InputLabel id='status-label'>Status</InputLabel>
                <Select
                  labelId='status-label'
                  value={status}
                  onChange={e => setStatus(e.target.value)}
                  label='status'
                >
                  {status_options.map(dept => (
                    <MenuItem key={dept} value={dept}>
                      {dept}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className='flex flex-col h-full justify-between gap-2'>
              <TextField
                label='Address'
                value={address}
                onChange={e => setAddress(e.target.value)}
                variant='standard'
              />
              <div className='flex justify-end flex-row gap-2'>
                <Button
                  variant='outlined'
                  onClick={handleClose}
                  className='hover:bg-blue-900 hover:text-white'
                >
                  Cancel
                </Button>
                <Button
                  variant='contained'
                  onClick={handleSubmit}
                  className='hover:bg-blue-900 hover:text-white'
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </Typography>
      </Box>
    </Modal>
  )
}

export default EditEmployeeModal
