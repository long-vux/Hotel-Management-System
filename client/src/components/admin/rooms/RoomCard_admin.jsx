import React, { useState } from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import DeleteIcon from '@mui/icons-material/Delete'
import RoomDetails from './RoomDetails'
import EditRoomModal from './EditRoom_Modal'
import { Icon, IconButton } from '@mui/material' // Import MUI components
import DeleteConfirmModal from './DeleteConfirmModal'

const RoomCardAdmin = ({
  roomId,
  capacity,
  image,
  title,
  allocated,
  price,
  type,
  status,
  amenities
}) => {

  
  // delete modal handler
  const [openDelete, setOpenDelete] = React.useState(false)
  const handleOpenDelete = () => setOpenDelete(true)
  const handleCloseDelete = () => setOpenDelete(false)

  const [modalOpen, setModalOpen] = useState(false)

  const handleOpen = () => setModalOpen(true)
  const handleClose = () => setModalOpen(false)

  const [open, setOpen] = React.useState(false)
  const handleOpenEdit = () => setOpen(true)
  const handleCloseEdit = () => setOpen(false)
  return (
    <div className='room-card-admin text-[20px] hover:shadow-xl transition-duration duration-100 font-inter flex gap-2 flex-col p-2 rounded-[5px] bg-white relative'>
      <div
        className='img-container h-[150px] cursor-pointer'
        onClick={handleOpen}
      >
        <img
          src={process.env.PUBLIC_URL + image}
          alt={title}
          className='room-card-admin__image object-cover w-full h-full rounded-[5px]'
        />
      </div>

      <div className='room-info flex flex-col'>
        <div className='flex flex-row justify-between'>
          <div className='room-card-admin__title text-[20px] font-medium'>
            {title}
          </div>
          <p>{allocated}</p>
        </div>
        <div className='flex justify-between'>
          <div className='room-card-admin__price flex flex-col gap-1 '>
            <div className='info-title text-[12px] mb-[-5px] text-gray-500'>
              Price
            </div>
            <span className='font-medium'>$ {price}</span>
          </div>
          <div className='room-card-admin__type flex flex-col gap-1'>
            <div className='info-title text-[12px] mb-[-5px] text-gray-500'>
              Type
            </div>
            <span className='font-medium'>{type}</span>
          </div>

          <div className='room-card-admin__type flex flex-col gap-1 justify-end pb-1'>
            <div className='flex flex-row gap-1'>
              <IconButton>
                {' '}
                <ModeEditIcon
                  onClick={handleOpenEdit}
                  className='cursor-pointer'
                />
              </IconButton>
              <IconButton>
                <DeleteIcon onClick={handleOpenDelete}/>

              </IconButton>
            </div>
          </div>

          <div
            className={`absolute top-4 right-4 room-card-admin__status flex flex-col items-end font-medium text-white text-[12px] px-1 py-1 rounded-sm ${
              status === 'Available'
                ? 'bg-green-600'
                : status === 'Booked'
                ? 'bg-red-600'
                : 'bg-orange-600'
            }`}
          >
            {status}
          </div>
        </div>
      </div>

      
      <DeleteConfirmModal
        open={openDelete}
        handleClose={handleCloseDelete}
        id={allocated}
      />

      <RoomDetails
        open={modalOpen}
        handleClose={handleClose}
        imageUrls={process.env.PUBLIC_URL + image}
        title={title}
        allocated={allocated}
        price={price}
        type={type}
        status={status}
        roomId={roomId}
        capacity={capacity}
        amenities={amenities}
      />
    </div>
  )
}

export default RoomCardAdmin
