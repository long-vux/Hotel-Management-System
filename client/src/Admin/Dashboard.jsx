import React from 'react'
import CardOverview from '../components/admin/dashboard/CardOverview'
import CustomerList from '../components/admin/dashboard/CustomerList'

const guestData = [
  {
    guestName: 'John Doe',
    checkIn: '2024-01-01',
    checkOut: '2024-01-01',
    roomType: 'Single',
    allocatedRoom: '#A101',
    dueAmount: '2999$'
  },
  {
    guestName: 'Jane Doe',
    checkIn: '2024-01-01',
    checkOut: '_',
    roomType: 'Single',
    allocatedRoom: '#C092',
    dueAmount: '1200$'
  },
  {
    guestName: 'Harry Potter',
    checkIn: '2024-01-01',
    checkOut: '2024-01-01',
    roomType: 'Single',
    allocatedRoom: '#A101',
    dueAmount: '3999$'
  },
  {
    guestName: 'Hermione Granger',
    checkIn: '2024-01-01',
    checkOut: '_',
    roomType: 'Single',
    allocatedRoom: '#B032',
    dueAmount: '1200$'
  },
  {
    guestName: 'Ron Weasley',
    checkIn: '2024-01-01',
    checkOut: '_',
    roomType: 'Single',
    allocatedRoom: '#A101',
    dueAmount: '1200$'
  },
  {
    guestName: 'Draco Malfoy',
    checkIn: '2024-01-01',
    checkOut: '_',
    roomType: 'Single',
    allocatedRoom: '#B032',
    dueAmount: '4900  $'
  },
  {
    guestName: 'Ginny Weasley',
    checkIn: '2024-01-01',
    checkOut: '_',
    roomType: 'Single',
    allocatedRoom: '#C092',
    dueAmount: '1200$'
  },
  {
    guestName: 'Luna Lovegood',
    checkIn: '2024-01-01',
    checkOut: '2024-01-09',
    roomType: 'Single',
    allocatedRoom: '#A101',
    dueAmount: '1200$'
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
    dueAmount: '1900$'
  },
  {
    guestName: 'George Weasley',
    checkIn: '2024-01-01',
    checkOut: '2024-01-09',
    roomType: 'Single',
    allocatedRoom: '#A101',
    dueAmount: '1200$'
  },
  {
    guestName: 'Ron Weasley',
    checkIn: '2024-01-01',
    checkOut: '_',
    roomType: 'Double',
    allocatedRoom: '#B032',
    dueAmount: '1600$'
  },
  {
    guestName: 'Harry Potter',
    checkIn: '2024-01-01',
    checkOut: '2024-01-09',
    roomType: 'Single',
    allocatedRoom: '#C092',
    dueAmount: '1200$'
  },
  {
    guestName: 'Harry Potter',
    checkIn: '2024-01-01',
    checkOut: '_',
    roomType: 'Double',
    allocatedRoom: '#A101',
    dueAmount: '1200$'
  },
  {
    guestName: 'Harry Potter',
    checkIn: '2024-01-01',
    checkOut: '2024-01-09',
    roomType: 'Double',
    allocatedRoom: '#B032',
    dueAmount: '1200$'
  }
]


const Dashboard = () => {
  return (
    <div className='w-full  flex flex-row justify-between font-inter gap-[8px]'>
      <div className='w-[60%]'>
        <h1 id='overview' className='text-[20px] font-bold'>Overview</h1>
        <div className='flex flex-col gap-[10px]'>
          <div className='w-full flex rounded-md '>
            <CardOverview />
            <CardOverview />
            <CardOverview />
            <CardOverview />
          </div>
          <div id='images' className='flex items-center gap-[10px] pl-1'>
            <img src={process.env.PUBLIC_URL + '/assets/hotel_facilities/building1.jpg'} alt='room' className='w-[140px] h-[100px]' />
            <img src={process.env.PUBLIC_URL + '/assets/hotel_facilities/building1.jpg'} alt='room' className='w-[140px] h-[100px]' />
            <img src={process.env.PUBLIC_URL + '/assets/hotel_facilities/building1.jpg'} alt='room' className='w-[140px] h-[100px]' />
            <img src={process.env.PUBLIC_URL + '/assets/hotel_facilities/building1.jpg'} alt='room' className='w-[140px] h-[100px]' />
            <img src={process.env.PUBLIC_URL + '/assets/hotel_facilities/building1.jpg'} alt='room' className='w-[140px] h-[100px]' />
          </div>
          <div class="relative overflow-x-auto ml-1 ">
            <h1 className='text-[20px] font-bold pb-1'>Guest List</h1>
            <table class="text-left bg-white rounded-md w-full pr-[20px]">
              <thead class="">
                <tr>
                  <th class="px-4 py-2 text-[14px]">
                    Guest Name
                  </th>
                  <th scope="col" class="px-4 py-2 text-[14px]">
                    Check in
                  </th>
                  <th scope="col" class="px-4 py-2 text-[14px]">
                    Check out
                  </th>
                  <th scope="col" class="px-4 py-2 text-[14px]">
                    Room Type
                  </th>
                  <th scope="col" class="px-4 py-2 text-[14px]">
                    Aloocated Room
                  </th>
                  <th scope="col" class="px-4 py-2 text-[14px]">
                    Due Amount
                  </th>
                </tr>
              </thead>
              <CustomerList guestData={guestData} />
            </table>
          </div>

        </div>
      </div>
      <div className='w-[40%] mt-[5px] ml-[5px]'>
        <img src={process.env.PUBLIC_URL + '/assets/hotel_facilities/building1.jpg'} alt='room' className='w-full h-[100px] border-1 border-gray-300 object-cover' />
        <div className='flex flex-col gap-[4px]'>
          <h1 id='quick-action' className='text-[20px] font-bold pt-2'>Quick action</h1>
          <div className='flex flex-col justify-between bg-white rounded-md p-2'>
            <div className='flex flex-row gap-[10px] w-full text-center '>
              <button className='text-[18px] font-bold w-[50%] h-[35px] bg-[#1D4567] text-white leading-9 rounded-md'>Check In</button>
              <button className='text-[18px] font-bold w-[50%] h-[35px] text-black border-[1px] leading-9 border-gray-400 rounded-md'>Check Out</button>
            </div>
            <div className=' flex flex-col gap-[13px] w-full h-full bg-[#F1F1F1] p-2 mt-2 rounded-md'>
              <div className='flex flex-col text-[14px] font-bold'>
                <h1>Phone number</h1>
                <div className='w-full flex flex-row gap-[10px]'>
                  <input type="text" className='w-[60%] h-[30px] border-[1px] border-gray-400 rounded-md' />
                  <button className='w-[40%] h-[30px] bg-[#1D4567] text-white rounded-md'>Search for reservation</button>
                </div>
              </div>
              <div className='flex flex-row text-[14px] font-bold gap-[10px]'>
                <div className='w-[20%] flex flex-col'>
                  <h1>Room No.</h1>
                  <input type="text" className='w-full h-[30px] border-[1px] border-gray-400 rounded-md' />
                </div>
                <div className='w-[40%] flex flex-col'>
                  <h1>Room Type</h1>
                  <input type="text" className='w-full h-[30px] border-[1px] border-gray-400 rounded-md' />
                </div>
                <div className='w-[40%] flex flex-col'>
                  <h1>Number of Guests</h1>
                  <input type="text" className='w-full h-[30px] border-[1px] border-gray-400 rounded-md' />
                </div>
              </div>
              <div className='flex flex-row text-[14px] font-bold gap-[10px]'>
                <div className='w-[50%] flex flex-col'>
                  <h1>First Name</h1>
                  <input type="text" className='w-full h-[30px] border-[1px] border-gray-400 rounded-md' />
                </div>
                <div className='w-[50%] flex flex-col'>
                  <h1>Last Name</h1>
                  <input type="text" className='w-full h-[30px] border-[1px] border-gray-400 rounded-md' />
                </div>
              </div>
              <div className='flex flex-row text-[14px] font-bold gap-[10px]'>
                <div className='w-[20%] flex flex-col'>
                  <h1>Identity type</h1>
                  <input type="text" className='w-full h-[30px] border-[1px] border-gray-400 rounded-md' />
                </div>
                <div className='w-[40%] flex flex-col'>
                  <h1>Identity No.</h1>
                  <input type="text" className='w-full h-[30px] border-[1px] border-gray-400 rounded-md' />
                </div>
                <div className='w-[40%] flex flex-col'>
                  <h1>DOB</h1>
                  <input type="text" className='w-full h-[30px] border-[1px] border-gray-400 rounded-md' />
                </div>
              </div>
              <div className='flex flex-col text-[14px] font-bold'>
                <h1>Email</h1>
                <input type="text" className='w-full h-[30px] border-[1px] border-gray-400 rounded-md' />
              </div>
              <div className='flex flex-col'>
                <div className='flex flex-row text-[14px] justify-between font-bold'>
                  <h1>Total charge</h1>
                  <span className='text-[18px] font-bold'>2999$</span>
                </div>
                <div className='w-full h-[1px] bg-gray-400 pt-0'></div>
              </div>
              <div className='flex justify-end '>
                <button className='w-[100px] font-bold h-[30px] bg-[#1D4567] text-white rounded-md'>Check in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard