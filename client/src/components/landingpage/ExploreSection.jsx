import React from 'react'

const ExploreSection = () => {
  return (
    <section id='explore' className='h-[800px] mx-[70px]'>
      <div className='flex justify-center items-center gap-[30px] '>
        <h1 className='text-[30px] underline'>Holiday In Resort</h1>
        <h1 className='text-[30px]'>Intercontinental</h1>
      </div>
      <div className='flex justify-between items-center gap-[50px] mt-[40px]'>
        <div className='w-[650px] p-[54px] flex flex-col gap-[15px]'>
            <h1 className='text-[40px] font-italiana'>Indulge in Luxury</h1>
            <p className='text-[20px]'>Our luxurious accommodations provide a comfortable and inviting retreat, ensuring a restful sleep and a rejuvenating stay. Enjoy world-class amenities, including a spa, swimming pools, fitness center, and gourmet dining options.</p>
            <button className='w-[177px] h-[43px] bg-[#1D4567] text-white px-[20px] py-[10px] rounded-full'>Explore now</button>
        </div>
        <div>
            <img src={process.env.PUBLIC_URL + '/assets/hotel_facilities/building1.jpg'} alt='room' className='w-[644px] h-[683px]' />
        </div>
        
      </div>
    </section>
  )
}

export default ExploreSection