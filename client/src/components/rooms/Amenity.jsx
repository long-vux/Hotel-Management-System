import React from 'react';

const Amenities = ({ name, icon }) => {
  return (
    <div className='center border-solid border-2 p-[10px] hover:border-black cursor-pointer rounded-md font-medium'>
      {icon ? icon : name}
    </div>
  );
};

export default Amenities;
