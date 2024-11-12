// RoomDetails.js
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close'
import Slideshow from './Slideshow'
const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  border: 'none',
  borderRadius: 2,
  p: 4,
  py: 2,
  overflowY: 'auto',
  maxHeight: '80vh',
  zIndex: 1300,
  outline: 'none'
}


const RoomDetails = ({
  open,
  handleClose,
  room
}) => {

  const images = room.imagePaths

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      className='border rounded-md'
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

        <Typography
          id='modal-modal-description flex '
          sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          {/* <img src={imageUrls} style={imageStyle} /> */}
          <Slideshow images={images} interval={5000} />
          <div sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <div className='flex justify-between'>
              <h1 className='text-[20px] mb-2 font-bold'>{room.roomName}</h1>
              <p className='text-[18px] mb-2 font-bold'>#00{room.roomNumber}</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-[18px] mb-2'>Price: {room.roomPrice}</p>
              <p className='text-[18px] mb-2'>Type: {room.roomType}</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-[18px] mb-2'>status: {room.roomStatus}</p>
              <p className='text-[18px] mb-2'>capacity: {room.capacity}</p>
            </div>
            <div>Amenities: {room.amenities.join(', ')}</div>
          </div>
        </Typography>
      </Box>
    </Modal>
  )
}

export default RoomDetails
