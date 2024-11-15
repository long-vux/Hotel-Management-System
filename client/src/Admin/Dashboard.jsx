import React, { useEffect, useState } from 'react'
import CardOverview from '../components/admin/dashboard/CardOverview'

import RoomManagement from '../components/admin/dashboard/CustomTabPanel'

import { useNavigate } from 'react-router-dom'
import LineChart from '../components/admin/dashboard/LineChart'

const Dashboard = () => {
  // get the room image and pass it into room preview

  const DB_HOST = process.env.REACT_APP_DB_HOST

  const [roomImages, setRoomImages] = useState([])
  const navigate = useNavigate()

  const handleImageClick = () => {
    navigate('/admin/room') // Change this to the desired route
  }

  useEffect(() => {
    const getRoomImages = async () => {
      try {
        const response = await fetch(DB_HOST + 'api/Room')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        const tempRoomImages = []

        data.forEach(room => {
          tempRoomImages.push(...room.imagePaths)
        })

        setRoomImages(tempRoomImages)
      } catch (error) {
        console.error('Error fetching room images:', error)
      }
    }

    getRoomImages()
  }, [DB_HOST])

  console.log(roomImages)

  return (
    <div className='w-full  flex flex-row justify-between font-inter gap-[8px]'>
      <div className='w-[60%]'>
        <h1 id='overview' className='text-[20px] font-bold'>
          Overview
        </h1>

        <div className='flex flex-col gap-[10px]'>
          <div className='w-full flex rounded-md '>
            <CardOverview isCheckin={true} /> <CardOverview isCheckout={true} />{' '}
            <CardOverview isRoomAvailable={true} />{' '}
            <CardOverview isReservation={true} />{' '}
          </div>

          <div id='images' className='flex items-center gap-[10px] pl-1'>
            {roomImages.slice(2, 7).map((image, index) => (
              <img
                key={index}
                src={DB_HOST + image}
                alt={`Room image ${index}`}
                className='w-[140px] h-[100px] rounded-md cursor-pointer'
                onClick={handleImageClick}
              />
            ))}
          </div>

          {/* chart */}
          <LineChart />
        </div>
      </div>

      <RoomManagement />
    </div>
  )
}

export default Dashboard
