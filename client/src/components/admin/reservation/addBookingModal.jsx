import React, { useState, useEffect } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  Modal,
  TextField,
  Fab,
  Button,
  Grid,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const AddBookingModal = () => {
  const DB_HOST = process.env.REACT_APP_DB_HOST;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [roomData, setRoomData] = useState({});
  const [roomType, setRoomType] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [selectedRoomCapacity, setSelectedRoomCapacity] = useState(0); // Added for room capacity

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState('');
  const [customerId, setCustomerId] = useState(0);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await axios.get(`${DB_HOST}api/Room`);

        // Organize room data by roomType
        const roomData = response.data.data.reduce((acc, room) => {
          const { id, roomType, roomNumber, imagePaths, capacity } = room; // Include capacity
          if (!acc[roomType]) {
            acc[roomType] = [];
          }
          acc[roomType].push({ id, roomNumber, imagePaths, capacity }); // Store capacity
          return acc;
        }, {});

        setRoomData(roomData);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRoom();
  }, [DB_HOST]);

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
    gap: 2,
  };

  const handleRoomTypeChange = event => {
    setRoomType(event.target.value);
    setRoomNumber('');
    setSelectedImage(null); // Reset image when room type changes
    setSelectedRoomId(null); // Reset room ID when room type changes
    setSelectedRoomCapacity(0); // Reset room capacity
  };

  const handleRoomNumberChange = event => {
    const selectedRoomNumber = event.target.value;
    setRoomNumber(selectedRoomNumber);

    // Find the room with the selected roomNumber to get its id and images
    const selectedRoom = roomData[roomType]?.find(
      room => room.roomNumber === selectedRoomNumber
    );

    if (selectedRoom) {
      setSelectedRoomId(selectedRoom.id); // Set the room ID
      setSelectedImage(selectedRoom.imagePaths?.[0] || null); // Load the first image if available
      setSelectedRoomCapacity(selectedRoom.capacity); // Set the room capacity
    } else {
      setSelectedImage(null);
      setSelectedRoomId(null); // Clear room ID if no room is selected
      setSelectedRoomCapacity(0); // Reset room capacity if no room is selected
    }
  };

  const checkCustomerByPhone = async phoneNumber => {
    try {
      const response = await axios.get(`${DB_HOST}api/customer?phoneNumber=${phoneNumber}`);

      if (response.data && response.data.length > 0) {
        const customer = response.data[0];
        setCustomerId(customer.id);
        await createBooking();
      } else {
        const customerData = new FormData();
        customerData.append('FirstName', firstName);
        customerData.append('LastName', lastName);
        customerData.append('Email', email);
        customerData.append('PhoneNumber', phoneNumber);

        const newCustomerResponse = await axios.post(`${DB_HOST}api/customer`, customerData);

        if (newCustomerResponse.data && newCustomerResponse.data.id) {
          const newCustomerId = newCustomerResponse.data.id;
          setCustomerId(newCustomerId);
          await createBooking();
        } else {
          console.error('Invalid new customer response:', newCustomerResponse.data);
        }
      }
    } catch (error) {
      console.error('Error checking customer:', error);
    }
  };

  const createBooking = async () => {
    try {
      const bookingData = new FormData();
      bookingData.append('GuestNumber', numberOfGuests);
      bookingData.append('CheckInDate', checkInDate.toISOString());
      bookingData.append('CheckOutDate', checkOutDate.toISOString());
      bookingData.append('CustomerId', customerId);
      bookingData.append('RoomId', selectedRoomId);

      const newBookingResponse = await axios.post(`${DB_HOST}api/Booking`, bookingData);

      if (newBookingResponse.status === 201) {
        handleClose();
        window.location.reload();
      } else {
        console.error('Error creating booking (non-201 status):', newBookingResponse);
      }
    } catch (e) {
      console.error('Error creating booking:', e);
    }
  };

  const validateFields = () => {
    if (!firstName || !lastName || !phoneNumber || !numberOfGuests || !roomType || !roomNumber || !checkInDate || !checkOutDate) {
      alert('Please fill in all required fields.');
      return false;
    }

    if (numberOfGuests > selectedRoomCapacity) {
      alert('Out of capacity for the selected room. The room capacity is ');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      alert('Please enter a valid phone number (10 to 15 digits).');
      return false;
    }

    if (checkInDate && checkOutDate && checkInDate.isAfter(checkOutDate)) {
      alert('Check-in date must be before check-out date.');
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateFields()) {
      return; // Prevent submission if validation fails
    }
    checkCustomerByPhone(phoneNumber);
  };

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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
      >
        <Box sx={style}>
          <Typography variant='h6' component='h2' textAlign='center'>
            New Reservation
          </Typography>

          <div className='flex gap-2'>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='First Name'
                  required
                  variant='outlined'
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Last Name'
                  required
                  variant='outlined'
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                />
              </Grid>

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
                  required
                  variant='outlined'
                  value={phoneNumber}
                  onChange={e => setPhoneNumber(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label='Check In Date'
                    required
                    value={checkInDate}
                    onChange={newValue => setCheckInDate(newValue)}
                    renderInput={params => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label='Check Out Date'
                    required
                    value={checkOutDate}
                    onChange={newValue => setCheckOutDate(newValue)}
                    renderInput={params => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Grid>

              {/* Room Type Selector */}
              <Grid item xs={12} sm={6}>
                <FormControl variant='outlined' fullWidth required>
                  <InputLabel id='room-type-label'>Room Type</InputLabel>
                  <Select
                    labelId='room-type-label'
                    value={roomType}
                    onChange={handleRoomTypeChange}
                    label='Room Type'
                  >
                    {Object.keys(roomData).map(type => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Room Number Selector based on selected Room Type */}
              <Grid item xs={12} sm={6}>
                <FormControl variant='outlined' fullWidth required>
                  <InputLabel id='room-number-label'>Room Number</InputLabel>
                  <Select
                    labelId='room-number-label'
                    value={roomNumber}
                    onChange={handleRoomNumberChange}
                    label='Room Number'
                    disabled={!roomType} // Disable if no room type selected
                  >
                    {roomType &&
                      roomData[roomType].map(({ roomNumber }) => (
                        <MenuItem key={roomNumber} value={roomNumber}>
                          {roomNumber}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            {/* Image Display */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <div className='w-full h-full'>
                {selectedImage ? (
                  <img
                    src={DB_HOST + selectedImage}
                    alt='Room Image'
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '400px',
                      borderRadius: 8,
                    }}
                    className='object-cover'
                  />
                ) : (
                  <Typography variant='body2' color='textSecondary'>
                    Select a room number to view image
                  </Typography>
                )}
              </div>
            </Box>
          </div>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <TextField
              label='Number Of Guests'
              required
              variant='outlined'
              sx={{
                width: '500px',
              }}
              type='number'
              value={numberOfGuests}
              onChange={e => setNumberOfGuests(e.target.value)}
            />
            <Button variant='contained' onClick={handleSubmit}>
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AddBookingModal;