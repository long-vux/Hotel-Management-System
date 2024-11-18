import React, { useEffect, useState } from 'react';
import RoomCardListAdmin from '../components/admin/rooms/RoomCardList_admin';
import AddRoomModalButton from '../components/admin/rooms/AddRoom_Modal_Button';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const Room = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoomType, setSelectedRoomType] = useState(null);
  const [selectedRoomStatus, setSelectedRoomStatus] = useState(null);
  const DB_HOST = process.env.REACT_APP_DB_HOST;

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(`${DB_HOST}api/Room`);
        setRooms(response.data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };
    fetchRooms();
  }, [DB_HOST]);

  const roomStatusOptions = ['Available', 'Unavailable'];
  const roomTypeOptions = [];

  rooms.forEach(room => {
    if (!roomTypeOptions.includes(room.roomType)) {
      roomTypeOptions.push(room.roomType);
    }
  });

  // Filter rooms based on selected room type and status
  const filteredRooms = rooms.filter(room => {
    const matchesType = selectedRoomType ? room.roomType === selectedRoomType : true;
    const matchesStatus = selectedRoomStatus ? room.roomStatus === selectedRoomStatus : true;
    return matchesType && matchesStatus;
  });

  return (
    <div>
      <AddRoomModalButton />
      <div className='flex flex-col w-full'>
        <h1 className='text-[25px] font-medium'>Room List</h1>

        <div className='flex gap-2 pb-2'>
          <Autocomplete
            disablePortal
            options={roomTypeOptions}
            className='bg-white'
            onChange={(event, newValue) => {
              setSelectedRoomType(newValue); // Update selected room type
            }}
            renderInput={params => (
              <TextField {...params} label={'Room Type'} />
            )}
            sx={{
              '& .MuiInputBase-root': {
                width: '200px',
                height: '35px',
                paddingTop: '7px',
                paddingBottom: '7px',
              },
              '& .MuiInputLabel-root': {
                top: '-10px',
              },
              '& .MuiInputLabel-shrink': {
                top: '0px',
              },
            }}
          />
          <Autocomplete
            disablePortal
            options={roomStatusOptions}
            className='bg-white'
            onChange={(event, newValue) => {
              setSelectedRoomStatus(newValue); // Update selected room status
            }}
            renderInput={params => (
              <TextField {...params} label={'Status'} />
            )}
            sx={{
              '& .MuiInputBase-root': {
                width: '200px',
                height: '35px',
                paddingTop: '7px',
                paddingBottom: '7px',
              },
              '& .MuiInputLabel-root': {
                top: '-10px',
              },
              '& .MuiInputLabel-shrink': {
                top: '0px',
              },
            }}
          />
        </div>
      </div>
      <RoomCardListAdmin rooms={filteredRooms} /> {/* Pass filtered rooms */}
    </div>
  );
};

export default Room;