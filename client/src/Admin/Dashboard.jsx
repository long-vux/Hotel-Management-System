import React, { useEffect, useRef, useState } from 'react'
import CardOverview from '../components/admin/dashboard/CardOverview'
import CustomerList from '../components/admin/dashboard/CustomerList'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { useLocation } from 'react-router-dom'
import Chart from 'chart.js/auto'
import RoomManagement from '../components/admin/dashboard/CustomTabPanel'

// https://mui.com/x/react-charts/
function CustomTabPanel (props) {
  const { children, value, index, ...other } = props
  const location = useLocation()
  const data = location.state

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps (index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

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
    allocatedRoom: '#B032'
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
  // For quick action
  const [value, setValue] = React.useState(0)
  const chartRef = useRef(null) // Reference to hold the Chart instance
  const canvasRef = useRef(null) // Reference to the canvas element

  // useEffect for initializing chart
  useEffect(() => {
    // Sample data
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 }
    ]

    // Destroy any existing chart instance on the canvas
    if (chartRef.current) {
      chartRef.current.destroy()
    }

    // Initialize the new chart instance
    chartRef.current = new Chart(canvasRef.current, {
      type: 'line',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      },
      options: {
        responsive: true
      }
    })

    // Cleanup on component unmount
    return () => {
      if (chartRef.current) chartRef.current.destroy()
    }
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

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
            <img
              src={
                process.env.PUBLIC_URL +
                '/assets/hotel_facilities/building1.jpg'
              }
              alt='room'
              className='w-[140px] h-[100px] rounded-md'
            />
            <img
              src={
                process.env.PUBLIC_URL +
                '/assets/hotel_facilities/building1.jpg'
              }
              alt='room'
              className='w-[140px] h-[100px] rounded-md'
            />
            <img
              src={
                process.env.PUBLIC_URL +
                '/assets/hotel_facilities/building1.jpg'
              }
              alt='room'
              className='w-[140px] h-[100px] rounded-md'
            />
            <img
              src={
                process.env.PUBLIC_URL +
                '/assets/hotel_facilities/building1.jpg'
              }
              alt='room'
              className='w-[140px] h-[100px] rounded-md'
            />
            <img
              src={
                process.env.PUBLIC_URL +
                '/assets/hotel_facilities/building1.jpg'
              }
              alt='room'
              className='w-[140px] h-[100px] rounded-md'
            />
          </div>

          {/* chart */}
          <div>
            <canvas id='acquisitions' ref={canvasRef}></canvas>
          </div>

          <div class='relative overflow-x-auto ml-1 '>
            <h1 className='text-[20px] font-bold pb-1'>Guest List</h1>
            <table class='text-left bg-white rounded-md w-full pr-[20px]'>
              <thead class=''>
                <tr>
                  <th class='px-4 py-2 text-[14px]'>Guest Name</th>
                  <th scope='col' class='px-4 py-2 text-[14px]'>
                    Check in
                  </th>
                  <th scope='col' class='px-4 py-2 text-[14px]'>
                    Check out
                  </th>
                  <th scope='col' class='px-4 py-2 text-[14px]'>
                    Room Type
                  </th>
                  <th scope='col' class='px-4 py-2 text-[14px]'>
                    Aloocated Room
                  </th>
                  <th scope='col' class='px-4 py-2 text-[14px]'>
                    Due Amount
                  </th>
                </tr>
              </thead>
              <CustomerList guestData={guestData} />
            </table>
          </div>
        </div>
      </div>

      <RoomManagement />
    </div>
  )
}

export default Dashboard

// import React, { useEffect, useRef, useState } from 'react'
// import CardOverview from '../components/admin/dashboard/CardOverview'
// import CustomerList from '../components/admin/dashboard/CustomerList'
// import PropTypes from 'prop-types'
// import Tabs from '@mui/material/Tabs'
// import Tab from '@mui/material/Tab'
// import Box from '@mui/material/Box'
// import { useLocation } from 'react-router-dom'
// import Chart from 'chart.js/auto'

// // CustomTabPanel Component
// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props
//   const location = useLocation()
//   const data = location.state

//   return (
//     <div
//       role='tabpanel'
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </div>
//   )
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired
// }

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`
//   }
// }

// // Sample guest data
// const guestData = [ /* ... your guest data here ... */ ]

// // Dashboard Component
// const Dashboard = () => {
//   const [value, setValue] = useState(0)
//   const chartRef = useRef(null) // Reference to hold the Chart instance
//   const canvasRef = useRef(null) // Reference to the canvas element

//   // useEffect for initializing chart
//   useEffect(() => {
//     // Sample data
//     const data = [
//       { year: 2010, count: 10 },
//       { year: 2011, count: 20 },
//       { year: 2012, count: 15 },
//       { year: 2013, count: 25 },
//       { year: 2014, count: 22 },
//       { year: 2015, count: 30 },
//       { year: 2016, count: 28 }
//     ]

//     // Destroy any existing chart instance on the canvas
//     if (chartRef.current) {
//       chartRef.current.destroy()
//     }

//     // Initialize the new chart instance
//     chartRef.current = new Chart(canvasRef.current, {
//       type: 'bar',
//       data: {
//         labels: data.map(row => row.year),
//         datasets: [
//           {
//             label: 'Acquisitions by year',
//             data: data.map(row => row.count)
//           }
//         ]
//       },
//       options: {
//         responsive: true
//       }
//     })

//     // Cleanup on component unmount
//     return () => {
//       if (chartRef.current) chartRef.current.destroy()
//     }
//   }, [])

//   const handleChange = (event, newValue) => {
//     setValue(newValue)
//   }

//   return (
//     <div className='w-full flex flex-row justify-between font-inter gap-[8px]'>
//       <div className='w-[60%]'>
//         <h1 id='overview' className='text-[20px] font-bold'>Overview</h1>

//         <div className='flex flex-col gap-[10px]'>
//           <div className='w-full flex rounded-md '>
//             <CardOverview />
//             <CardOverview />
//             <CardOverview />
//             <CardOverview />
//           </div>

//           <div id='images' className='flex items-center gap-[10px] pl-1'>
//             {/* Image components */}
//           </div>

//           <div className='relative overflow-x-auto ml-1 '>
//             <h1 className='text-[20px] font-bold pb-1'>Guest List</h1>
//             <table className='text-left bg-white rounded-md w-full pr-[20px]'>
//               <thead>
//                 {/* Table header */}
//               </thead>

//               {/* Customer list */}
//               <div>
//                 <canvas id='acquisitions' ref={canvasRef}></canvas>
//               </div>
//             </table>
//           </div>
//         </div>
//       </div>

//       <div className='w-[40%] mt-[5px] ml-[5px]'>
//         <Box>
//           <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
//             <Tab label='Check in' {...a11yProps(0)} />
//             <Tab label='Check out' {...a11yProps(1)} />
//           </Tabs>

//           <CustomTabPanel value={value} index={0}>
//             {/* Check-in form */}
//           </CustomTabPanel>
//           <CustomTabPanel value={value} index={1}>
//             {/* Check-out form */}
//           </CustomTabPanel>
//         </Box>
//       </div>
//     </div>
//   )
// }

// export default Dashboard
