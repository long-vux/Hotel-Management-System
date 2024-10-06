import React from 'react';

const NavigationBar = ({ theme }) => {
  return (
    <div
      className={`relative h-[100px] flex items-center justify-around gap-[300px] bg-transparent ${
        theme === 'dark' ? 'text-white' : 'text-black shadow-md'
      }`}
    >
      <h1 className='text-[36px] font-italiana'>The Grand</h1> {/* Update this line */}
      <div className='flex items-center justify-center'>
        <ul className='flex items-center justify-center gap-[100px] text-[24px]'>
          <li><a href='/'>Home</a></li>
          <li><a href='/rooms'>Room</a></li>
          <li><a href='/my-stays'>My Stays</a></li>
          <li><a href='/about-us'>About us</a></li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
