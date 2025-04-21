import React, { useState } from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import DeleteIcon from '@mui/icons-material/Delete'
import RoomDetails from './RoomDetails'
import EditRoomModal from './EditRoom_Modal'
import { IconButton } from '@mui/material' // Import MUI components
import DeleteConfirmModal from './DeleteConfirmModal'

const RoomCardAdmin = ({ room }) => {
  const ROOT_URL = process.env.REACT_APP_ROOT_URL

  const [openModal, setOpenModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleOpenEditModal = () => {
    setOpenEditModal(true)
  }

  const handleCloseEditModal = () => {
    setOpenEditModal(false)
  }

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true)
  }

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false)
  }

  return (
    <div className='room-card-admin text-[20px] hover:shadow-xl transition-duration duration-100 font-inter flex gap-2 flex-col p-2 rounded-[5px] bg-white relative'>
      <div className='img-container h-[150px] cursor-pointer'>
        <img
          src={ROOT_URL + room.imagePaths[0]} // Get the first img from image list
          alt={room.roomName}
          onClick={handleOpenModal}
          className='room-card-admin__image object-cover w-full h-full rounded-[5px]'
        />
      </div>

      <div className='room-info flex flex-col'>
        <div className='flex flex-row justify-between'>
          <div className='room-card-admin__title text-[20px] font-medium'>
            {room.roomName}
          </div>
          <p>#00{room.roomNumber}</p>
        </div>
        <div className='flex justify-between'>
          <div className='room-card-admin__price flex flex-col gap-1'>
            <div className='info-title text-[12px] mb-[-5px] text-gray-500'>
              Price
            </div>
            <span className='font-medium'>${room.roomPrice}</span>
          </div>
          <div className='room-card-admin__type flex flex-col gap-1'>
            <div className='info-title text-[12px] mb-[-5px] text-gray-500'>
              Type
            </div>
            <span className='font-medium'>{room.roomType}</span>
          </div>

          <div
            className={`absolute top-4 right-4 room-card-admin__status flex flex-col items-end font-medium text-white text-[12px] px-1 py-1 rounded-sm ${
              room.roomStatus === 'Available'
                ? 'bg-green-600'
                : room.roomStatus === 'Booked'
                ? 'bg-red-600'
                : 'bg-orange-600'
            }`}
          >
            {room.roomStatus}
          </div>

          <div className='room-card-admin__actions flex flex-col gap-1 justify-end pb-1'>
            <div className='flex flex-row gap-1'>
              <IconButton onClick={handleOpenEditModal}>
                <ModeEditIcon className='cursor-pointer' />
              </IconButton>
              <IconButton onClick={handleOpenDeleteModal}>
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>

      <DeleteConfirmModal
        open={openDeleteModal}
        handleClose={handleCloseDeleteModal}
        id={room.roomId} // Assuming you want to delete by room number
      />

      <RoomDetails
        open={openModal}
        handleClose={handleCloseModal}
        room={room}
      />  

      <EditRoomModal
        open={openEditModal}
        handleClose={handleCloseEditModal}
        id={room.roomId}
      />
    </div>
  )
}

export default RoomCardAdmin
