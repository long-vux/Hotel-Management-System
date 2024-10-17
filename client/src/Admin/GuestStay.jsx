import React from 'react'
import BasicDatePicker from '../components/admin/guest-stay/BasicDatePicker'
import CustomerList from '../components/admin/guest-stay/CustomerList';

const guestData = [
  {
    guestName: 'John Doe',
    checkIn: '2024-01-01',
    checkOut: '2024-01-01',
    roomType: 'Single',
    allocatedRoom: '#A101',
  },
  {
    guestName: 'Jane Doe',
    checkIn: '2024-01-01',
    checkOut: '_',
    roomType: 'Single',
    allocatedRoom: '#C092',
  },
  {
    guestName: 'Harry Potter',
    checkIn: '2024-01-01',
    checkOut: '2024-01-01',
    roomType: 'Single',
    allocatedRoom: '#A101',
  },
  {
    guestName: 'Hermione Granger',
    checkIn: '2024-01-01',
    checkOut: '_',
    roomType: 'Single',
    allocatedRoom: '#B032',
  },
  {
    guestName: 'Ron Weasley',
    checkIn: '2024-01-01',
    checkOut: '_',
    roomType: 'Single',
    allocatedRoom: '#A101',
  },
  {
    guestName: 'Draco Malfoy',
    checkIn: '2024-01-01',
    checkOut: '_',
    roomType: 'Single',
    allocatedRoom: '#B032',
  },
  {
    guestName: 'Ginny Weasley',
    checkIn: '2024-01-01',
    checkOut: '_',
    roomType: 'Single',
    allocatedRoom: '#C092',
  },
  {
    guestName: 'Luna Lovegood',
    checkIn: '2024-01-01',
    checkOut: '2024-01-09',
    roomType: 'Single',
    allocatedRoom: '#A101',
  },
  {
    guestName: 'Neville Longbottom',
    checkIn: '2024-01-01',
    checkOut: '2024-01-09',
    roomType: 'Single',
    allocatedRoom: '#B032',
  },
  {
    guestName: 'Fred Weasley',
    checkIn: '2024-01-01',
    checkOut: '_',
    roomType: 'Single',
    allocatedRoom: '#C092',
  },
  {
    guestName: 'George Weasley',
    checkIn: '2024-01-01',
    checkOut: '2024-01-09',
    roomType: 'Single',
    allocatedRoom: '#A101',
  },
  {
    guestName: 'Ron Weasley',
    checkIn: '2024-01-01',
    checkOut: '_',
    roomType: 'Double',
    allocatedRoom: '#B032',
  },
  {
    guestName: 'Harry Potter',
    checkIn: '2024-01-01',
    checkOut: '2024-01-09',
    roomType: 'Single',
    allocatedRoom: '#C092',
  },
  {
    guestName: 'Harry Potter',
    checkIn: '2024-01-01',
    checkOut: '_',
    roomType: 'Double',
    allocatedRoom: '#A101',
  },
  {
    guestName: 'Harry Potter',
    checkIn: '2024-01-01',
    checkOut: '2024-01-09',
    roomType: 'Double',
    allocatedRoom: '#B032',
  }
]

const GuestStay = () => {
  return (
    <div className='w-full h-[505px] flex flex-col mb-[110px]'>

      <h1 id='quick-action' className='text-[20px] font-bold'>Guest And Stays</h1>
      <div className='w-full flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center gap-[10px] '>
          <span className='text-[16px]'>Show</span>
          <BasicDatePicker />
        </div>
        <input type="text" placeholder='Search Customer' className='w-[20%] h-[40px] text-[14px] text-bold border border-gray-500 rounded-full px-[15px]' />
      </div>
      <div class="ml-1">
        <table class="text-left bg-white rounded-md w-full">
          <thead class="">
            <tr className='text-[16px]'>
              <th scope="col" class="px-4 py-2">
                Guest Name
              </th>
              <th scope="col" class="px-4 py-2">
                Check in
              </th>
              <th scope="col" class="px-4 py-2">
                Check out
              </th>
              <th scope="col" class="px-4 py-2">
                Room Type
              </th>
              <th scope="col" class="px-4 py-2">
                Aloocated Room
              </th>
              <th scope="col" class="px-9 py-2">
                Action
              </th>
            </tr>
          </thead>
            <CustomerList guestData={guestData} />
        </table>
      </div>


    </div>

  )
}

export default GuestStay