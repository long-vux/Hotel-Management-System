import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Modal,
  TextField,
  Button,
  Autocomplete,
  InputAdornment
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';

const EditRoomModal = ({ open, handleClose, id }) => {
  // const [roomData, setRoomData] = useState({});
  const [images, setImages] = useState([]); // Uploaded images state
  const [roomType, setRoomType] = useState(''); // Selected room type
  const [roomNumber, setRoomNumber] = useState(''); // Room number
  const [title, setTitle] = useState(''); // Room title
  const [status, setStatus] = useState(''); // Room status
  const [rate, setRate] = useState(''); // Rate per night
  const [capacity, setCapacity] = useState(''); // Room capacity
  const [selectedAmenities, setSelectedAmenities] = useState([]); // Selected amenities


  const API_URL = process.env.REACT_APP_DB_HOST;
  const ROOT_URL = process.env.REACT_APP_ROOT_URL;
  // Arrays for room types and amenities options
  const roomTypes = ['Single Room', 'Double Room', 'Suite', 'Penthouse'];
  const amenitiesOptions = [
    { title: 'Wi-Fi' },
    { title: 'Air Conditioning' },
    { title: 'Swimming Pool' },
    { title: 'Breakfast Included' },
    { title: 'Gym Access' }
  ];

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    width: 1
  });

  // Fetch existing room data when the modal opens or `id` changes
  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get(`${API_URL}api/Room/${id}`);
        const data = response.data.data;

        // Populate form fields with the fetched room data
        setRoomType(data.roomType || '');
        setRoomNumber(data.roomNumber || '');
        setTitle(data.roomName || '');
        setStatus(data.roomStatus || '');
        setRate(data.roomPrice || '');
        setCapacity(data.capacity || '');
        setSelectedAmenities(
          data.amenities
            ? data.amenities.map(amenity => ({ title: amenity }))
            : []
        );
        setImages(
          data.imagePaths
            ? data.imagePaths.map(path => ({
              name: path.split('/').pop(),
              url: ROOT_URL + path
            }))
            : []
        );
      } catch (error) {
        console.error('Error fetching room data:', error);
      }
    };

    if (open && id) {
      fetchRoomData();
    }
  }, [open, id]);

  // Handle image upload
  const handleImageUpload = event => {
    const newImages = Array.from(event.target.files).map(file => ({
      file,
      name: file.name,
      url: URL.createObjectURL(file) // This creates a temporary URL for preview
    }));

    setImages(prevImages => [...prevImages, ...newImages]);
  };

  const handleDeleteRoomImage = async (imagePath) => {
    try {
      const originalImagePath = imagePath; // Lưu lại URL gốc để so sánh
      imagePath = imagePath.replace('http://localhost:8080', '');

      // Perform the delete request to the backend
      const response = await axios.delete(`${API_URL}api/Room/${id}/images`, {
        params: { imagePath },
      });

      if (response.data.success) {
        // Update the images state immediately
        setImages(prevImages => prevImages.filter(image => image.url !== originalImagePath));
        toast.success('Image deleted successfully!');
      } else {
        toast.error('Failed to delete image!');
      }
    } catch (error) {
      console.error('Error deleting image:', error.response?.data || error.message);
      toast.error('Failed to delete image!');
    }
  };


  const handleSave = async () => {

    const formData = new FormData();

    // Tạo object RoomDTO
    const roomDTO = {
      roomName: title,
      roomNumber: roomNumber,
      roomType: roomType,
      capacity: capacity,
      roomPrice: rate,
      roomStatus: status,
      amenities: selectedAmenities.map(amenity => amenity.title),
    };

    // Chuyển object RoomDTO thành JSON string
    formData.append('room', JSON.stringify(roomDTO));

    // Thêm ảnh vào FormData (nếu có ảnh mới)
    images.forEach(image => formData.append('ImagePaths', image.file));

    try {
      const response = await axios.put(`${API_URL}api/Room/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Room updated:', response.data);
      handleClose();
      toast.success('Room updated successfully!');
      window.location.reload();
    } catch (error) {
      console.error('Error updating room:', error);
    }
  };

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
    overflowY: 'auto'
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      style={{ overflowY: 'auto' }}
    >
      <Box sx={modalStyle}>
        <Typography
          id='modal-modal-title'
          variant='h6'
          component='h2'
          className='font-bold mb-5'
        >
          Edit Room
        </Typography>
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
                )
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
              className='w-2/3'
            />
            <Autocomplete
              value={status}
              onChange={(event, newValue) => setStatus(newValue)}
              disablePortal
              options={['Available', 'Booked', 'Maintenance']}
              className='w-1/3'
              renderInput={params => <TextField {...params} label='Status' />}
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
                )
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
            className='w-full'
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
                placeholder='Select amenities'
              />
            )}
          />

          {/* Image upload */}
          <div className='flex flex-col gap-2'>
            <Button
              required
              component='label'
              variant='outlined'
              startIcon={<CloudUploadIcon />}
              className='hover:bg-blue-600 hover:text-white font-bold py-2 px-4 rounded'
            >
              Upload Image
              <VisuallyHiddenInput
                type='file'
                accept='image/*'
                onChange={handleImageUpload}
                multiple
              />
            </Button>
            <table className='table-auto border-collapse border-gray-200'>
              <tbody>
                {images.map(image => (
                  <tr key={image.name}>
                    <td className='border px-4 py-2'>
                      <img
                        src={image.url}
                        alt={image.name}
                        className='w-50 h-50 object-cover'
                      />
                    </td>


                    <td className='border px-4 py-2'>
                      <button className='flex justify-center items-center' onClick={() => handleDeleteRoomImage(image.url)}>
                        <DeleteIcon className='text-red-500' />
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='flex justify-end w-full'>
            <Button onClick={handleSave} variant='contained'>
              Save
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default EditRoomModal
