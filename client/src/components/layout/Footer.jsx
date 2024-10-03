import React from 'react'

const Footer = () => {
  return (
    <section id='footer' className='h-[800px] mx-[70px]'>
      <div className='flex justify-between items-center border-b-[1px] border-gray-300 pb-[20px]' >
        <div className='flex flex-col gap-[10px]'>
            <h1 className='text-[20px] font-italiana'>Holiday In Resort</h1>
            <p className='text-[15px]'>Indulge in the epitome of hospitality at our world-class resort.</p>
        </div>
      </div>
    </section>
  )
}

export default Footer