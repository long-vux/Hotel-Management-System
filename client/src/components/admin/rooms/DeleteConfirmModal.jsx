import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import axios from 'axios';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ open, handleClose, id }) => {
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

  const DB_HOST = process.env.REACT_APP_DB_HOST;

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${DB_HOST}api/Room/${id}`);
      handleClose();
      toast.success('Room deleted successfully!');
      window.location.reload();
      return response;
    } catch (error) {
      console.error("There was an error with handleDelete()", error);
    }
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
          You're about to delete room {id}
        </Typography>

        <Typography id='modal-modal-description' sx={{ mt: 1, textAlign: 'center' }} color='text.secondary'>
          This will permanently delete this room from the catalog.
          <span>Are you sure?</span>
        </Typography>

        <Box sx={{ mt: 2, display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button variant='outlined' color='error' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='contained' color='error' onClick={handleDelete}>
            Delete
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteConfirmModal;
