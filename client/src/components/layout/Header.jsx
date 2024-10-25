import React from 'react'
import NavigationBar from './NavigationBar'
import AddIcCallRoundedIcon from '@mui/icons-material/AddIcCallRounded'
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver'
import BedIcon from '@mui/icons-material/Bed'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

export default function Header () {
  return (
    <div>
      <div className='flex  justify-between bg-blue-900 w-full mx-auto p-4 px-10 text-white font-inter'>
        {/* Cusomer care */}
        <ul className='flex gap-10 font-medium'>
          <li className='center gap-2'>
            <AddIcCallRoundedIcon /> 0329868603
          </li>
          <li className='center gap-2'>
            <RecordVoiceOverIcon /> Chat with us
          </li>
        </ul>

        {/* Customer related */}
        <ul className='flex gap-10 font-medium'>
          <li className='center gap-2'>
            <a href='/'>
              <BedIcon /> My Stay
            </a>
          </li>
          <li className='center gap-2'>
            <AccountCircleIcon /> Nguyen
          </li>
        </ul>
      </div>
      <NavigationBar />
    </div>
  )
}
