import React, { useEffect, useState } from 'react'
import RoomCardListAdmin from '../components/admin/rooms/RoomCardList_admin'
import RoomFiltering from '../components/admin/rooms/Room_filtering'
import AddRoomModalButton from '../components/admin/rooms/AddRoom_Modal_Button'
import axios from 'axios'

const Room = () => {
  const [rooms, setRooms] = useState([])
  const DB_HOST = process.env.REACT_APP_DB_HOST

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(`${DB_HOST}api/Room`)
        setRooms(response.data)
      } catch (error) {
        console.error('Error fetching rooms:', error)
      }
    }
    fetchRooms()
  }, [])

  return (
    <div>
      <AddRoomModalButton />
      <div className='flex flex-col  w-full'>
        <h1 className=' text-[25px] font-medium'>Room List</h1>

        <div className='flex gap-2 pb-2'>
          <RoomFiltering filterBy={'Type'} />
          <RoomFiltering filterBy={'Status'} />
          <RoomFiltering filterBy={'Price'} />
        </div>
      </div>
      <RoomCardListAdmin rooms={rooms} />
    </div>
  )
}

export default Room
