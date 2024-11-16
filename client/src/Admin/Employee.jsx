import React, { useEffect } from 'react'
import EmployeeList from '../components/admin/employee/EmployeeList'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import AddEmployeeModal from '../components/admin/employee/addEmployeeModal'
import axios from 'axios'
const Employee = () => {

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  
  const [employeesData, setEmployeesData] = React.useState([])

  const DB_HOST = process.env.REACT_APP_DB_HOST
  console.log(process.env.REACT_APP_DB_HOST)
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(`${DB_HOST}api/Employee`)
        setEmployeesData(response.data)
      } catch (error) {
        console.error('Error fetching employee:', error)
      }
    }
    fetchEmployees()
  }, [])

  return (
    <div className='flex flex-col  w-full'>
      <h1 className=' text-[25px] font-medium'>Employee</h1>

      <table class='text-left bg-white rounded-md w-full pr-[20px]'>
        <thead class=''>
          <tr>
            <th scope='col' class='px-4 py-2 text-[14px]'>
              ID
            </th>
            <th scope='col' class='px-4 py-2 text-[14px]'>
              Full name
            </th>
            <th scope='col' class='px-4 py-2 text-[14px]'>
              Email
            </th>
            <th scope='col' class='px-4 py-2 text-[14px]'>
              Phone number
            </th>
            <th scope='col' class='px-4 py-2 text-[14px]'>
              Department
            </th>
            <th scope='col' class='px-4 py-2 text-[14px]'>
              Role
            </th>
            <th scope='col' class='px-4 py-2 text-[14px]'>
              Salary
            </th>
            <th scope='col' class='px-4 py-2 text-[14px]'>
              Status
            </th>
            <th scope='col' class='px-4 py-2 text-[14px]'>
              Action
            </th>
          </tr>
        </thead>
        <EmployeeList employeeData={employeesData} />
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
  )
}

export default Employee
