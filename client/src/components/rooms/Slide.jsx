import React from 'react';
import Search from '../landingpage/Search';

const Slide = ({  }) => {
  return (
    
    <section
      className={`h-[201px] relative mb-[62px]`}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/hotel_room/room2.jpg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute bottom-[-65px] left-1/2 transform -translate-x-1/2">
        <Search />
      </div>
    </section>
  );
};

export default Slide;