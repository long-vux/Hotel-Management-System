import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import Autocomplete from '@mui/material/Autocomplete'

import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { styled } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'

const AddRoomModalButton = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    borderRadius: 1,
    bgcolor: 'background.paper',
    border: '0.5px solid rgba(0, 0, 0, 0.5)',
    boxShadow: 24,
    p: 4,
    maxHeight: '80vh', 
    overflowY: 'auto'
  }
  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
      title: 'The Lord of the Rings: The Two Towers',
      year: 2002
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
      title: 'Star Wars: Episode IV - A New Hope',
      year: 1977
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
      title:
        'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
      year: 1964
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
      title: 'Star Wars: Episode VI - Return of the Jedi',
      year: 1983
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
      title: 'Eternal Sunshine of the Spotless Mind',
      year: 2004
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 }
  ]
  const options = ['The Godfather', 'Pulp Fiction']

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1
  })

  const [images, setImages] = useState([])

  const handleImageUpload = event => {
    const newImages = [] // Create an empty array for the new images
    for (let i = 0; i < event.target.files.length; i++) {
      const file = event.target.files[i]
      const reader = new FileReader()
      reader.onload = e => {
        newImages.push({
          name: file.name,
          url: e.target.result
        })
        setImages(newImages) // Update the state with the new array
      }
      reader.readAsDataURL(file)
    }
  }
  return (
    <div className='center h-100 font-inter'>
      <Fab
        onClick={handleOpen}
        color='primary'
        aria-label='add'
        style={{ position: 'fixed', bottom: '20px', right: '30px' }}
      >
        <AddIcon />
      </Fab>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        style={{ overflowY: 'auto' }}
      >
        <Box sx={style}>
          <Typography id='modal-modal-title'>
            <div className='mb-5 font-bold text-lg'>Add room </div>
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 1 }}>
            <form className='flex flex-col gap-2'>
              <div className='flex flex-row gap-2'>
                <Autocomplete
                  required
                  disablePortal
                  options={options}
                  className='w-2/3'
                  renderInput={params => (
                    <TextField {...params} label='Room Type' />
                  )}
                />
                <TextField
                  required
                  id='outlined-basic'
                  label='Room No.'
                  variant='outlined'
                  className='w-1/3'
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position='start'>#</InputAdornment>
                      )
                    }
                  }}
                />
              </div>

              <div className='flex flex-row gap-2'>
                <TextField
                  required
                  id='outlined-basic'
                  label='Title'
                  variant='outlined'
                  className='w-2/3'
                />
                <Autocomplete
                  required
                  disablePortal
                  options={options}
                  className='w-1/3'
                  renderInput={params => (
                    <TextField {...params} label='Status' />
                  )}
                />
              </div>

              <div className='flex flex-row gap-2'>
                <TextField
                  required
                  id='outlined-basic'
                  label='Rate / night'
                  variant='outlined'
                  className='w-2/3'
                  type='number'
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position='start'>$</InputAdornment>
                      )
                    }
                  }}
                />
                <TextField
                  required
                  type='number'
                  min='0'
                  id='outlined-basic'
                  label='Capacity'
                  variant='outlined'
                  className='w-1/3'
                />
              </div>
              <div className='flex flex-row gap-2'>
                <Autocomplete
                  className='w-full'
                  multiple
                  id='tags-outlined'
                  options={top100Films}
                  getOptionLabel={option => option.title}
                  filterSelectedOptions
                  renderInput={params => (
                    <TextField
                      {...params}
                      label='Amenities'
                      placeholder='Amenities'
                    />
                  )}
                />
              </div>
              <div className='flex flex-col gap-2'>
                <Button
                  required
                  component='label'
                  variant='outlined'
                  startIcon={<CloudUploadIcon />}
                  className=' hover:bg-blue-600 hover:text-white font-bold py-2 px-4 rounded' // Tailwind CSS styling
                >
                  Upload Image
                  <VisuallyHiddenInput
                    type='file'
                    accept='image/*'
                    onChange={handleImageUpload}
                    multiple
                  />
                </Button>
                <table className='table-auto border-collapse border-gray-200'>
                  <tbody>
                    {images.map(image => (
                      <tr key={image.name}>
                        <td className='border px-4 py-2'>
                          <img
                            src={image.url}
                            alt={image.name}
                            className='w-24 h-24 object-cover'
                          />
                        </td>
                        <td className='border px-4 py-2'>{image.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className='flex justify-end w-full'>
                <Button type='submit' variant='contained'>
                  Save
                </Button>
              </div>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default AddRoomModalButton
