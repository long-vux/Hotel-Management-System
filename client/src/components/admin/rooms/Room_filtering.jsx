import React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
const RoomFiltering = ({ filterBy }) => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <Autocomplete
      disablePortal
      options={options}
      className='bg-white'
      sx={{
        '& .MuiInputBase-root': {
          width: '200px' // Set the width of the input field
        }
      }}
      renderInput={params => <TextField {...params} label={filterBy} />}
    />
  )
}

export default RoomFiltering
