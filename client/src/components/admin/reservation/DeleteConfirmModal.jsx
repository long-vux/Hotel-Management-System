import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'

const DeleteConfirmModal = ({ open, handleClose, guestName }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    border: 'none',
    borderRadius: 2
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography
          id='modal-modal-title'
          variant='h6'
          component='h2'
          sx={{ textAlign: 'center', fontWeight: 'bold' }}
        >
          You're about to delete {guestName}'s reservation
        </Typography>
        <Typography id='modal-modal-description' className='center flex-col' sx={{ mt: 1, textAlign: 'center' }} color='text.secondary'>
          This will permanently delete this reservation.
          <span>Are you sure?</span>
        </Typography>

        <Box sx={{ mt: 2, display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button variant='outlined' color='error' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='contained' color='error'>
            Delete
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default DeleteConfirmModal
