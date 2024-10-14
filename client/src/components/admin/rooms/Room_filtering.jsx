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
          width: '200px',
          height: '35px',
          // Add padding to vertically center the placeholder and input text
          paddingTop: '7px', // Adjust these values as needed
          paddingBottom: '7px' // Adjust these values as needed
        },
        '& .MuiInputLabel-root': {
          // Styles for the label when the input is focused
          top: '-10px' // To prevent label overlapping with input
        },
        '& .MuiInputLabel-shrink': {
          top: '0px'
        }
      }}
      renderInput={params => <TextField {...params} label={filterBy} />}
    />
  )
}

export default RoomFiltering
