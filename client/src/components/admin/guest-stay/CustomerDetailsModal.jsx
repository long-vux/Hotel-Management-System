import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

const CustomerDetailsModal = ({ open, handleClose, data }) => {
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

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography variant='h6' component='h2' textAlign='center'>
          Customer Details
        </Typography>

        {/* Modal Content with Two Columns Layout */}
        <Grid container spacing={2} className='mb-1'>
          {/* Left Column */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='First Name'
              variant='outlined'
              value={data.firstName}
              InputProps={{
                readOnly: true
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Last Name'
              variant='outlined'
              value={data.lastName}
              InputProps={{
                readOnly: true
              }}
            />
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Email'
              variant='outlined'
              value={data.email}
              InputProps={{
                readOnly: true
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Phone Number'
              variant='outlined'
              value={data.phoneNumber}
              InputProps={{
                readOnly: true
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Identity Type'
              variant='outlined'
              value={data.identityType}
              InputProps={{
                readOnly: true
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Identity Number'
              variant='outlined'
              value={data.identityNumber}
              InputProps={{
                readOnly: true
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Modal>
  )
}

export default CustomerDetailsModal
