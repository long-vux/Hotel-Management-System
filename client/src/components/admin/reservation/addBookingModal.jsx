import React, { useState } from 'react'
import {
  Box,
  Typography,
  Modal,
  TextField,
  Fab,
  Autocomplete,
  Button,
  InputAdornment
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { styled } from '@mui/material/styles'
import axios from 'axios'

const AddBookingModal = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  //   Style
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    border: 'none',
    borderRadius: 2,
    maxWidth: 800,
    width: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  }

  return (
    <>
      <Fab
        onClick={handleOpen}
        color='primary'
        aria-label='add'
        style={{ position: 'fixed', bottom: '20px', right: '30px' }}
      >
        <AddIcon />
      </Fab>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
      >
        <Box sx={style}>
          <Typography variant='h6' component='h1' textAlign='start'>
            New Reservation
          </Typography>{' '}
          <p id='parent-modal-description'>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </Box>
      </Modal>
    </>
  )
}

export default AddBookingModal
