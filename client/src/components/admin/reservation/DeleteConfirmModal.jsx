import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import axios from 'axios';

const DeleteConfirmModal = ({ open, handleClose, id }) => {
  console.log("Booking id : ", id);

  const handleCancel = async () => {
    const DB_HOST = process.env.REACT_APP_DB_HOST;
    const BookingData = new FormData();
    BookingData.append('Status', "Canceled");
    try {
      const response = await axios.put(`${DB_HOST}api/Booking/${id}`, BookingData);

      console.log('Cancellation successful:', response.data); // Log the response
      handleClose(); // Close the modal
      window.location.reload(); // Reload the page to reflect changes
    } catch (error) {
      console.error('Error canceling the reservation:', error.response || error); // Log the error
    }
  };

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
  };

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
          You're about to cancel this reservation
        </Typography>
        <Typography
          id='modal-modal-description'
          className='center flex-col'
          sx={{ mt: 1, textAlign: 'center' }}
          color='text.secondary'
        >
          <span>Are you sure?</span>
        </Typography>

        <Box sx={{ mt: 2, display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button variant='outlined' color='error' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='contained' color='error' onClick={handleCancel}>
            Delete
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteConfirmModal;