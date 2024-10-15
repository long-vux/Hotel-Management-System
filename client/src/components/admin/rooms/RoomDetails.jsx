// RoomDetails.js
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close'
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

const imageStyle = {
  width: '100%',
  height: '300px',
  objectFit: 'cover',
  borderRadius: 5
}

const RoomDetails = ({
  open,
  handleClose,
  imageUrls,
  title,
  allocated,
  price,
  type,
  status,
  roomId,
  capacity,
  amenities
}) => {
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
          <img src={imageUrls} style={imageStyle} />
          <div sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <div className='flex justify-between'>
              <h1 className='text-[20px] mb-2 font-bold'>{title}</h1>
              <p className='text-[18px] mb-2'>{allocated}</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-[18px] mb-2'>Price: {price}</p>
              <p className='text-[18px] mb-2'>Type: {type}</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-[18px] mb-2'>status: {status}</p>
              <p className='text-[18px] mb-2'>capacity: {capacity}</p>
            </div>
            <div>

            Amenities: {amenities.join(', ')}
            </div>

           
          </div>
        </Typography>
      </Box>
    </Modal>
  )
}

export default RoomDetails
