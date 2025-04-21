import React, { useState } from 'react';
import {
  Box,
  Typography,
  Modal,
  TextField,
  Fab,
  Autocomplete,
  Button,
  InputAdornment,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import {toast } from 'react-toastify';

// Modal button component for adding a room
const AddRoomModalButton = () => {
  const DB_HOST = process.env.REACT_APP_DB_HOST;

  const [open, setOpen] = useState(false); // Modal visibility state
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [images, setImages] = useState([]); // Uploaded images state
  const [roomType, setRoomType] = useState(''); // Selected room type
  const [roomNumber, setRoomNumber] = useState(''); // Room number
  const [title, setTitle] = useState(''); // Room title
  const [rate, setRate] = useState(''); // Rate per night
  const [capacity, setCapacity] = useState(''); // Room capacity
  const [selectedAmenities, setSelectedAmenities] = useState([]); // Selected amenities

  const roomTypes = [
    'Single Room',
    'Double Room',
    'Twin Room',
    'Deluxe Room',
    'Suite',
    'Studio Room',
    'Family Room',
    'Executive Room',
    'Presidential Suite',
    'Accessible Room',
  ];
  const amenitiesOptions = [
    { title: 'Wi-Fi' },
    { title: 'Air Conditioning' },
    { title: 'Swimming Pool' },
    { title: 'Breakfast Included' },
    { title: 'Gym Access' },
    { title: 'Parking' },
    { title: 'Room Service' },
    { title: 'Laundry Service' },
    { title: 'Mini Bar' },
    { title: '24-Hour Reception' },
    { title: 'Flat-Screen TV' },
    { title: 'Tea/Coffee Maker' },
    { title: 'Hair Dryer' },
    { title: 'Iron and Ironing Board' },
    { title: 'Safe Deposit Box' },
    { title: 'Spa and Wellness Center' },
    { title: 'Concierge Service' },
    { title: 'Business Center' },
    { title: 'Pet-Friendly' },
    { title: 'Balcony or Terrace' },
    { title: 'In-Room Dining' },
    { title: 'Bathrobe and Slippers' },
    { title: 'Complimentary Bottled Water' },
    { title: 'Netflix/Streaming Services' },
    { title: 'Electric Kettle' },
    { title: 'Desk and Chair' },
    { title: 'Blackout Curtains' },
    { title: 'Luxury Toiletries' },
    { title: 'Refrigerator' },
    { title: 'Soundproofing' },
  ];

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    width: 1,
  });

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    borderRadius: 1,
    bgcolor: 'background.paper',
    border: '0.5px solid rgba(0, 0, 0, 0.5)',
    boxShadow: 24,
    p: 4,
    maxHeight: '80vh',
    overflowY: 'auto',
  };

  // Handle image uploads and store as preview data
  const handleImageUpload = (event) => {
    const newImages = Array.from(event.target.files).map((file ) => {
      return { file, preview: URL.createObjectURL(file) };
    });
    setImages([...images, ...newImages]);
  };

  const validateFields = () => {
    if (!roomType) {
      alert('Please select a room type.');
      return false;
    }
    if (!roomNumber) {
      alert('Room number is required.');
      return false;
    }
    if (!title) {
      alert('Title is required.');
      return false;
    }
    if (!rate || rate <= 0) {
      alert('Rate must be a positive number.');
      return false;
    }
    if (!capacity || capacity <= 0) {
      alert('Capacity must be a positive integer.');
      return false;
    }
    if (selectedAmenities.length === 0) {
      alert('Please select at least one amenity.');
      return false;
    }
    if (images.length === 0) {
      alert('Please upload at least one image.');
      return false;
    }
    return true;
  };const handleSave = async () => {
    if (!validateFields()) {
      return; // Prevent submission if validation fails
    }
  
    const formData = new FormData();
  
    // Create the RoomDTO object
    const roomDTO = {
      roomName: title,
      roomNumber: roomNumber,
      roomType: roomType,
      capacity: capacity,
      roomPrice: rate,
      amenities: selectedAmenities.map(amenity => amenity.title),
      roomStatus: 'Available',
    };
  
    // Convert RoomDTO object to JSON string and append to FormData
    formData.append('room', JSON.stringify(roomDTO));
  
    // Add images to FormData
    images.forEach(image => formData.append('ImagePaths', image.file));
  
    try {
      const response = await axios.post(DB_HOST + 'api/Room', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Room data submitted:', response.data);
      toast.success('Room added successfully!');
      handleClose();
      window.location.reload();
    } catch (error) {
      console.error('Error submitting room data:', error);
    }
};
  return (
    <div className='center h-100 font-inter'>
      <Fab
        onClick={handleOpen}
        color='primary'
        aria-label='add'
        style={{ position: 'fixed', bottom: '20px', right: '30px' }}
      >
        <AddIcon />
      </Fab>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        style={{ overflowY: 'auto' }}
      >
        <Box sx={modalStyle}>
          <Typography id='modal-modal-title'>
            <div className='mb-5 font-bold text-lg'>Add room</div>
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 1 }}>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-row gap-2'>
                <Autocomplete
                  value={roomType}
                  onChange={(event, newValue) => setRoomType(newValue)}
                  disablePortal
                  options={roomTypes}
                  className='w-2/3'
                  renderInput={params => (
                    <TextField {...params} label='Room Type' />
                  )}
                />
                <TextField
                  value={roomNumber}
                  onChange={e => setRoomNumber(e.target.value)}
                  required
                  label='Room No.'
                  variant='outlined'
                  className='w-1/3'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>#</InputAdornment>
                    ),
                  }}
                />
              </div>

              <div className='flex flex-row gap-2'>
                <TextField
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  required
                  label='Title'
                  variant='outlined'
                  className='w-full'
                />
              </div>

              <div className='flex flex-row gap-2'>
                <TextField
                  value={rate}
                  onChange={e => setRate(e.target.value)}
                  required
                  label='Rate / night'
                  variant='outlined'
                  className='w-2/3'
                  type='number'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>$</InputAdornment>
                    ),
                  }}
                />
                <TextField
                  value={capacity}
                  onChange={e => setCapacity(e.target.value)}
                  required
                  type='number'
                  label='Capacity'
                  variant='outlined'
                  className='w-1/3'
                />
              </div>

              <Autocomplete
                className='w -full'
                multiple
                id='tags-outlined'
                options={amenitiesOptions}
                value={selectedAmenities}
                onChange={(event, newValue) => setSelectedAmenities(newValue)}
                getOptionLabel={option => option.title}
                filterSelectedOptions
                renderInput={params => (
                  <TextField
                    {...params}
                    label='Amenities'
                    placeholder='Amenities'
                  />
                )}
              />

              <Button
                component='label'
                variant='outlined'
                startIcon={<CloudUploadIcon />}
                className='hover:bg-blue-600 hover:text-white font-bold py-2 px-4 rounded'
              >
                Upload Images
                <VisuallyHiddenInput
                  type='file'
                  accept='image/*'
                  onChange={handleImageUpload}
                  multiple
                />
              </Button>

              <div className='flex flex-col gap-2'>
                {images.map((image, index) => (
                  <div key={index} className='flex gap-2 items-center'>
                    <img
                      src={image.preview}
                      alt={image.file.name}
                      className='w-24 h-24 object-cover'
                    />
                    <span>{image.file.name}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={handleSave}
                variant='contained'
                className='self-end'
              >
                Save
              </Button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default AddRoomModalButton;