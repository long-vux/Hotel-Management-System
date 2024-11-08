import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import axios from 'axios'
import FormControl from '@mui/material/FormControl'
import {
  MenuItem,
  Box,
  Typography,
  Modal,
  TextField,
  Autocomplete,
  InputLabel,
  Select,
  Button
} from '@mui/material'

const CustomerEditModal = ({ open, handleClose, data }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    border: 'none',
    borderRadius: 2,
    maxWidth: 800,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  }

  // States for customer information
  const [firstName, setFirstName] = useState(data.firstName)
  const [lastName, setLastName] = useState(data.lastName)
  const [email, setEmail] = useState(data.email)
  const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber)
  const [identityNumber, setIdentityNumber] = useState(data.identityNumber)
  const [identityType, setIdentityType] = useState(data.identityType)

  // When the modal opens, update state with the passed customer data
  useEffect(() => {
    if (data) {
      setFirstName(data.firstName)
      setLastName(data.lastName)
      setEmail(data.email)
      setPhoneNumber(data.phoneNumber)
      setIdentityNumber(data.identityNumber)
      setIdentityType(data.identityType)
    }
  }, [open, data])

  // Handle form submit to update customer information
  const handleSave = async () => {
    try {
      const updatedCustomer = {
        firstName,
        lastName,
        email,
        phoneNumber,
        identityNumber,
        identityType
      }

      // Send PUT request to update customer info
      const response = await axios.put(
        `${process.env.REACT_APP_DB_HOST}api/customer/${data.id}`,
        updatedCustomer
      )
      console.log('Customer updated:', response.data)
      handleClose()
      window.location.reload()
    } catch (error) {
      console.error('Error updating customer data:', error)
    }
  }

  const IDType = ['ID', 'Passport']

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography variant='h6' component='h2' textAlign='center'>
          Edit Customer Details
        </Typography>

        {/* Modal Content with Two Columns Layout */}
        <Grid container spacing={2} className='mb-1'>
          {/* Left Column */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='First Name'
              variant='outlined'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Last Name'
              variant='outlined'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Email'
              variant='outlined'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Phone Number'
              variant='outlined'
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl variant='outlined' fullWidth>
              <InputLabel id='role-label'>Identity type</InputLabel>
              <Select
                labelId='role-label'
                value={identityType}
                onChange={e => setIdentityType(e.target.value)}
              >
                {IDType.map(roleOption => (
                  <MenuItem key={roleOption} value={roleOption}>
                    {roleOption}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Identity Number'
              variant='outlined'
              value={identityNumber}
              onChange={e => setIdentityNumber(e.target.value)}
            />
          </Grid>
        </Grid>

        {/* Save and Close Buttons */}
        <Box sx={{ textAlign: 'end', mt: 0 }}>
          <Button
            variant='outlined'
            color='primary'
            onClick={handleClose}
          >
            Close
          </Button>
          <Button variant='contained' color='primary' onClick={handleSave}             sx={{ ml: 2 }}
>
            Save
          </Button>
        
        </Box>
      </Box>
    </Modal>
  )
}

export default CustomerEditModal
