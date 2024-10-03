import React from 'react';

const Header = () => {
  return (
    <div className='relative h-[100px] flex items-center justify-around gap-[300px] text-white'>
      <h1 className='text-[36px] font-italiana'>The Grand</h1> {/* Update this line */}
      <div className='flex items-center justify-center'>
        <ul className='flex items-center justify-center gap-[100px] text-[24px]'>
          <li>Home</li>
          <li>Room</li>
          <li>My Stays</li>
          <li>About us</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
