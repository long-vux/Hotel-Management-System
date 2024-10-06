import React from 'react'
import NavigationBar from '../layout/NavigationBar.jsx'
import Search from './Search.jsx'

const SlideSection = () => {
  return (
    <section className='h-[530px] relative'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/hotel_room/hotel_room_dark.jpg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>

      <NavigationBar theme="dark" />
      <div className='absolute bottom-[-65px] left-1/2 transform -translate-x-1/2'>
        <Search />
      </div>
    </section>
  )
}

export default SlideSection