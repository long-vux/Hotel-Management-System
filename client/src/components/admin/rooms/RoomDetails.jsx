// RoomDetails.js
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close'
import Carousel from 'react-material-ui-carousel'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%', // Adjusted width
  maxWidth: '600px', // Set a max width to prevent overflow
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto', // Allow vertical scrolling if content overflows
  maxHeight: '80vh' // Limit the maximum height of the modal
}

const RoomDetails = ({ open, handleClose, imageUrls, title }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <CloseIcon
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            cursor: 'pointer'
          }}
          onClick={handleClose}
        />
        <Carousel images = {imageUrls}/>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          {title}
        </Typography>

        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  )
}

export default RoomDetails
