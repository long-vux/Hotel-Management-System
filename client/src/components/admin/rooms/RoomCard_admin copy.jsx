import React, { useState } from 'react';

const RoomCardAdmin = ({ image, title, allocated, price, type, status }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const imageUrls = [
    'https://via.placeholder.com/800x400?text=Slide+1',
    'https://via.placeholder.com/800x400?text=Slide+2',
    'https://via.placeholder.com/800x400?text=Slide+3',
  ];

  return (
    <div className='room-card-admin text-[20px] font-inter flex gap-2 flex-col p-2 rounded-[5px] bg-white'>
      <div className='img-container h-[200px] cursor-pointer' onClick={handleOpen}>
        <img
          src={process.env.PUBLIC_URL + image}
          alt={title}
          className='room-card-admin__image object-cover w-full h-full rounded-[5px]'
        />
      </div>

      <div className='room-info flex flex-col'>
        <div className='flex flex-row justify-between'>
          <h2 className='room-card-admin__title font-medium'>{title}</h2>
          <p>{allocated}</p>
        </div>
        <div className='flex justify-between'>
          <div className='room-card-admin__price flex flex-col'>
            <div className='info-title text-[12px] mb-[-5px]'>Price</div>
            <span className='font-medium'>{price}</span>
          </div>
          <div className='room-card-admin__type flex flex-col'>
            <div className='info-title text-[12px] mb-[-5px]'>Type</div>
            <span className='font-medium'>{type}</span>
          </div>
          <div className='room-card-admin__status flex flex-col'>
            <div className='info-title text-[12px] mb-[-5px]'>Status</div>
            <span
              className={`font-medium text-[17px] ${
                status === 'Available'
                  ? 'text-green-500'
                  : status === 'Booked'
                  ? 'text-red-500'
                  : 'text-orange-500'
              }`}
            >
              {status}
            </span>
          </div>
        </div>
      </div>

      {/* Room Details Modal */}
     
    </div>
  );
};

export default RoomCardAdmin;
