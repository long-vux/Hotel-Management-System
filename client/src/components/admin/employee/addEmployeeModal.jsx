import React, { useState } from 'react'
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
const AddEmployeeModal = ({ open, handleClose }) => {
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

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [role, setRole] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [department, setDepartment] = useState('')
  const [dob, setDob] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [salary, setSalary] = useState('')
  const [image, setImage] = useState(null)

  const handleDragOver = e => {
    e.preventDefault()
  }

  const handleDrop = e => {
    e.preventDefault()
    const files = Array.from(e.dataTransfer.files)
    const imageFile = files[0]
    if (imageFile) {
      const reader = new FileReader()
      reader.onload = event => {
        setImage(event.target.result)
      }
      reader.readAsDataURL(imageFile)
    }
  }

  const logFormData = formData => {
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value)
    }
  }
  // const handleFileChange = e => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = event => {
  //       setImage(event.target.result); // Set the Data URL for the image
  //     };
  //     reader.readAsDataURL(file); // Read the file as a Data URL
  //   }
  // };

  const handleFileChange = e => {
    const file = e.target.files[0]
    if (file) {
      setImage(file) // Store the file object directly
      const preview = URL.createObjectURL(file) // Create a URL for the selected file for preview
      // Optionally, you can use preview if you want to display it
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
      const response = await axios.post(`${DB_HOST}api/Employee`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' } // Ensure multipart/form-data is set
      })

      console.log('Employee data submitted:', response.data)
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
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className={`border-2 border-dashed rounded-md p-4 flex items-center justify-center cursor-pointer ${
                image ? 'h-48' : 'h-32'
              }`}
              style={{ minHeight: '200px' }}
            >
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  className='rounded-md'
                  alt='Employee Avatar'
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                />
              ) : (
                <span>Avatar</span>
              )}
            </div>
            {/* Button to trigger file input */}
            <Button
              variant='outlined'
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

export default AddEmployeeModal
