import React, { useState, useEffect } from 'react';
import ReservationRow from './ReservationRow';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Correct import

import usePagination from './usePagination';

const ReservationList = ({ data }) => {

  const [reservations, setReservations] = useState(data); // Renamed for clarity
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const PER_PAGE = 8;

  useEffect(() => {
    if (data) {
      setReservations(data); // Update state when data prop changes
      setIsLoading(false);
    }
  }, [data]);

  const count = Math.ceil((reservations?.length ?? 0) / PER_PAGE);
  const _DATA = usePagination(reservations || [], PER_PAGE);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
    _DATA.jump(newPage);
  };

  return (
    <>
      <tbody>
        {isLoading ? (
          <tr>
            <td >Loading...</td>
          </tr>
        ) : (
          _DATA.currentData().map(reservation => (
            <ReservationRow
              key={reservation.id} // Use reservation.id for key
              data={reservation}
            />
          ))
        )}
      </tbody>

      {/* Pagination */}
      <ThemeProvider theme={theme}>
        <Stack sx={{ mt: 2, justifyContent: 'center', display: 'flex' }}>
          <Pagination
            count={count}
            page={page}
            onChange={handlePageChange}
            renderItem={item => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
            showFirstButton
            showLastButton
            size="large"
            color="secondary"
          />
        </Stack>
      </ThemeProvider>
    </>
  );
};



const theme = createTheme({
  palette: {
    secondary: {
      main: '#0EB82', // Green color
    },
  },
});


export default ReservationList;