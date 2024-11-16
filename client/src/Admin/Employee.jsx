import React, { useEffect } from 'react';
import EmployeeList from '../components/admin/employee/EmployeeList';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AddEmployeeModal from '../components/admin/employee/addEmployeeModal';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const Employee = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [employeesData, setEmployeesData] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState(''); // State for search query
  const [selectedStatus, setSelectedStatus] = React.useState(null); // State for selected status
  const [selectedRole, setSelectedRole] = React.useState(null); // State for selected role

  const DB_HOST = process.env.REACT_APP_DB_HOST
  console.log(process.env.REACT_APP_DB_HOST)
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(`${DB_HOST}api/Employee`);
        setEmployeesData(response.data);
      } catch (error) {
        console.error('Error fetching employee:', error);
      }
    };
    fetchEmployees();
  }, [DB_HOST]);

  const options = ["Active", "Inactive", "On leave"];
  const roleOptions = [];

  // Populate roleOptions based on employeesData
  employeesData.forEach(employee => {
    if (!roleOptions.includes(employee.role)) {
      roleOptions.push(employee.role);
    }
  });

  // Filter employees based on search query, selected status, and selected role
  const filteredEmployees = employeesData.filter(employee => {
    const fullName = `${employee.firstName} ${employee.lastName}`.toLowerCase();
    const matchesSearch = fullName.includes(searchQuery.toLowerCase()) ||
                          employee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          employee.phoneNumber.includes(searchQuery);
    const matchesStatus = selectedStatus ? employee.status === selectedStatus : true; // Check status if selected
    const matchesRole = selectedRole ? employee.role === selectedRole : true; // Check role if selected
    return matchesSearch && matchesStatus && matchesRole; // Return true if all conditions are met
  });

  return (
    <div className='flex flex-col w-full'>
      <h1 className='text-[25px] font-medium'>Employee</h1>

      <div className='w-full flex flex-row items-center justify-between mb-2'>
        <div className='flex flex-row items-center gap-[10px]'>
          <Autocomplete
            disablePortal
            options={options}
            className='bg-white'
            onChange={(event, newValue) => {
              setSelectedStatus(newValue); // Update selected status
            }}
            renderInput={params => <TextField {...params} label={'Status'} />}
            sx={{
              '& .MuiInputBase-root': {
                width: '200px',
                height: '35px',
                paddingTop: '7px',
                paddingBottom: '7px'
              },
              '& .MuiInputLabel-root': {
                top: '-10px'
              },
              '& .MuiInputLabel-shrink': {
                top: '0px'
              }
            }}
          />
          <Autocomplete
            disablePortal
            options={roleOptions}
            className='bg-white'
            onChange={(event, newValue) => {
              setSelectedRole(newValue); // Update selected role
            }}
            renderInput={params => <TextField {...params} label={'Role'} />}
            sx={{
              '& .MuiInputBase-root': {
                width: '200px',
                height: '35px',
                paddingTop: '7px',
                paddingBottom: '7px'
              },
              '& .MuiInputLabel-root': {
                top: '-10px'
              },
              '& .MuiInputLabel-shrink': {
                top: '0px'
              }
            }}
          />
        </div>
        <input
          type='text'
          placeholder='Search Employee'
          className='w-[20%] h-[40px] text-[14px] text-bold border border-gray-500 rounded-full px-[15px]'
          value={searchQuery} // Bind search query to input
          onChange={e => setSearchQuery(e.target.value)} // Update search query on input change
        />
      </div>

      <table className='text-left bg-white rounded-md w-full pr-[20px]'>
        <thead>
          <tr>
            <th scope='col' className='px-4 py-2 text-[14px]'>ID</th>
            <th scope='col' className='px-4 py-2 text-[14px]'>Full Name</th>
            <th scope='col' className='px-4 py-2 text-[14px]'>Email</th>
            <th scope='col' className='px-4 py-2 text-[14px]'>Phone Number</th>
            <th scope='col' className='px-4 py-2 text-[14px]'>Department</th>
            <th scope='col' className='px-4 py-2 text-[14px]'>Role</th>
            <th scope='col' className='px-4 py-2 text-[14px]'>Salary</th>
            <th scope='col' className='px-4 py-2 text-[14px]'>Status</th>
            <th scope='col' className='px-4 py-2 text-[14px]'>Action</th>
          </tr>
        </thead>
        <EmployeeList employeeData={filteredEmployees} /> {/* Pass filtered employees */}
      </table>

      <Fab
        onClick={handleOpen}
        color='primary'
        aria-label='add'
        style={{ position: 'fixed', bottom: '20px', right: '30px' }}
      >
        <AddIcon />
      </Fab>

      <AddEmployeeModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default Employee;