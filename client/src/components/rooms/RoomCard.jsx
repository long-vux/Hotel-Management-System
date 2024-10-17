import React from 'react';
import KingBedIcon from '@mui/icons-material/KingBed';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';

const RoomCard = ({ 
  roomTitle, 
  imageUrl, 
  availability, 
  price, 
  roomType, 
  capacity 
}) => {
  // Determine background color based on availability
  const availabilityColor = availability === 'Available' ? 'bg-green-700' : 'bg-red-700';

  return (
    <div className='grid grid-cols-12 gap-10'>
      {/* Room Image and Status */}
      <div className='relative col-span-4 max-h-[220px] w-full'>
        <img
          src={imageUrl}
          alt='room'
          className='w-full h-full object-cover rounded'
        />
        <div className={`absolute top-2 right-2 text-[12px] text-white ${availabilityColor} max-h-[28px] max-w-[81px] p-[4px] rounded`}>
          {availability}
        </div>
      </div>

      {/* Room Info */}
      <div className='col-span-8'>
        <div className='grid grid-cols-6 gap-4'>
          {/* Left Section */}
          <div className='col-span-4'>
            <h2 className='text-2xl font-bold text-[30px]'>{roomTitle}</h2>

            <div className='flex mt-2 flex-col'>
              <div className='room-type flex items-center'>
                <KingBedIcon /> {roomType}
              </div>
              <div className='room-capacity flex items-center'>
                <PersonIcon /> {capacity}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className='col-span-2 text-right gap-5 flex flex-col justify-between'>
            <div className='top mb-4'>
              {/* Info Section */}
              <div className='info flex items-center justify-end mb-2'>
                <span className='text-[rgba(0, 0, 0, 0.6)]'>Non-refundable</span>
                <InfoIcon className='ml-2' />
              </div>

              {/* Price Section */}
              <div className='price'>
                <h3 className='text-3xl font-bold'>{price} USD</h3>
                <p className='text-sm text-gray-500'>per night</p>
              </div>
            </div>

            {/* Select Button */}
            <div className='flex justify-end'>
              <button className='bg-blue-900 text-white max-w-[120px] py-2 px-4 rounded hover:bg-blue-800 transition duration-200'>
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;