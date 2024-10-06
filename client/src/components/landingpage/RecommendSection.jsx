import React from 'react';

const RecommendSection = () => {
  return (
    <section id="recommend" className="mx-[70px] flex flex-col items-center gap-[50px]">
      <h1 className="text-[50px] font-italiana">Recommend for you</h1>
      <div className="grid grid-cols-12 grid-rows-12 gap-4 w-[1300px] h-[750px]">
        <div id="image1" className="col-start-1 col-span-4 row-start-1 row-span-8 w-full h-full">
          <img
            src={process.env.PUBLIC_URL + '/assets/hotel_facilities/pool.jpg'}
            alt="Pool"
            className="object-cover w-full h-full"
          />
        </div>
        <div id="image2" className="col-start-1 col-span-4 row-start-9 row-span-4 w-full h-full">
          <img
            src={process.env.PUBLIC_URL + '/assets/hotel_facilities/bar.jpg'}
            alt="Bar"
            className="object-cover w-full h-full"
          />
        </div>

        <div id="image3" className="col-start-5 col-span-4 row-start-1 row-span-4 w-full h-full">
          <img
            src={process.env.PUBLIC_URL + '/assets/hotel_facilities/gym.jpg'}
            alt="Gym"
            className="object-cover w-full h-full"
          />
        </div>

        <div id="image4" className="col-start-5 col-span-4 row-start-5 row-span-4 flex items-center justify-center bg-gray-100 p-8 w-full h-full">
          <div className="text-center">
            <h2 className="text-[35px] font-italiana">Our Services</h2>
            <p className="text-[25px] leading-7 mt-[10px]">Indulge in the epitome of hospitality at our world-class hotel.</p>
          </div>
        </div>
        <div id="image5" className="col-start-5 col-span-4 row-start-9 row-span-4 w-full h-full">
          <img
            src={process.env.PUBLIC_URL + '/assets/hotel_facilities/spa.jpg'}
            alt="Spa"
            className="object-cover w-full h-full"
          />
        </div>
        <div id="image6" className="col-start-9 col-span-4 row-start-1 row-span-4 w-full h-full">
          <img
            src={process.env.PUBLIC_URL + '/assets/hotel_facilities/bowling.jpg'}
            alt="Bowling"
            className="object-cover w-full h-full"
          />
        </div>
        <div id="image7" className="col-start-9 col-span-4 row-start-5 row-span-8 w-full h-full">
          <img
            src={process.env.PUBLIC_URL + '/assets/hotel_facilities/restaurant.jpg'}
            alt="Restaurant"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default RecommendSection;
