import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box } from '@mui/material';

export default function BasicDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <Box sx={{ width: 160, height: 60 }}>
          <DatePicker 
            sx={{
              '& .MuiInputBase-root': {
                backgroundColor: '#f5f5f5', // Change background color
                height: '50px',
                fontSize: '14px',
              },
            }} 
          />
        </Box>
      </DemoContainer>
    </LocalizationProvider>
  );
}
