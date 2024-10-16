import React from 'react'
import EmployeeList from '../components/admin/employee/EmployeeList'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import EmployeeDetails from '../components/admin/employee/EmployeeDetails'
import AddEmployeeModal from '../components/admin/employee/addEmployeeModal'

const Employee = () => {
  const data = [
    {
      EmployeeID: 'E001',
      FirstName: 'John',
      LastName: 'Doe',
      Gender: 0,
      DateOfBirth: '1990-05-15',
      PhoneNumber: '+1234567890',
      Address: '123 Main St, Springfield',
      Avatar: 'https://via.placeholder.com/150',
      EmployeeStatus: 'Active',
      Salary: 50000.0,
      Role: 'Front Desk Manager',
      Department: 'Reception',
      EmailAddress: 'john.doe@hotel.com'
    },
    {
      EmployeeID: 'E002',
      FirstName: 'Jane',
      LastName: 'Smith',
      Gender: 1,
      DateOfBirth: '1985-10-25',
      PhoneNumber: '+0987654321',
      Address: '456 Elm St, Metropolis',
      Avatar: 'https://via.placeholder.com/150',
      EmployeeStatus: 'Active',
      Salary: 55000.0,
      Role: 'Housekeeping Supervisor',
      Department: 'Housekeeping',
      EmailAddress: 'jane.smith@hotel.com'
    },
    {
      EmployeeID: 'E003',
      FirstName: 'Mike',
      LastName: 'Johnson',
      Gender: 0,
      DateOfBirth: '1992-07-08',
      PhoneNumber: '+1122334455',
      Address: '789 Oak St, Gotham',
      Avatar: 'https://via.placeholder.com/150',
      EmployeeStatus: 'On leave',
      Salary: 48000.0,
      Role: 'Restaurant Manager',
      Department: 'Food & Beverage',
      EmailAddress: 'mike.johnson@hotel.com'
    },
    {
      EmployeeID: 'E004',
      FirstName: 'Emily',
      LastName: 'Davis',
      Gender: 1,
      DateOfBirth: '1995-11-12',
      PhoneNumber: '+2233445566',
      Address: '321 Pine St, Star City',
      Avatar: 'https://via.placeholder.com/150',
      EmployeeStatus: 'Active',
      Salary: 60000.0,
      Role: 'Event Coordinator',
      Department: 'Events',
      EmailAddress: 'emily.davis@hotel.com'
    },
    {
      EmployeeID: 'E005',
      FirstName: 'David',
      LastName: 'Brown',
      Gender: 0,
      DateOfBirth: '1980-03-20',
      PhoneNumber: '+3344556677',
      Address: '654 Cedar St, Central City',
      Avatar: 'https://via.placeholder.com/150',
      EmployeeStatus: 'Inactive',
      Salary: 45000.0,
      Role: 'Maintenance Manager',
      Department: 'Maintenance',
      EmailAddress: 'david.brown@hotel.com'
    },
    {
      EmployeeID: 'E006',
      FirstName: 'Sophia',
      LastName: 'Wilson',
      Gender: 1,
      DateOfBirth: '1998-09-30',
      PhoneNumber: '+4455667788',
      Address: '987 Birch St, Coast City',
      Avatar: 'https://via.placeholder.com/150',
      EmployeeStatus: 'On leave',
      Salary: 62000.0,
      Role: 'Spa Manager',
      Department: 'Spa',
      EmailAddress: 'sophia.wilson@hotel.com'
    },
    {
      EmployeeID: 'E007',
      FirstName: 'Chris',
      LastName: 'Taylor',
      Gender: 0,
      DateOfBirth: '1987-04-18',
      PhoneNumber: '+5566778899',
      Address: '432 Maple St, Blüdhaven',
      Avatar: 'https://via.placeholder.com/150',
      EmployeeStatus: 'Active',
      Salary: 53000.0,
      Role: 'Security Officer',
      Department: 'Security',
      EmailAddress: 'chris.taylor@hotel.com'
    },
    {
      EmployeeID: 'E008',
      FirstName: 'Olivia',
      LastName: 'Martinez',
      Gender: 1,
      DateOfBirth: '1993-12-10',
      PhoneNumber: '+6677889900',
      Address: '567 Aspen St, National City',
      Avatar: 'https://via.placeholder.com/150',
      EmployeeStatus: 'Inactive',
      Salary: 47000.0,
      Role: 'Sous Chef',
      Department: 'Kitchen',
      EmailAddress: 'olivia.martinez@hotel.com'
    },
    {
      EmployeeID: 'E009',
      FirstName: 'Lucas',
      LastName: 'Anderson',
      Gender: 0,
      DateOfBirth: '1991-01-22',
      PhoneNumber: '+7788990011',
      Address: '765 Sycamore St, Keystone City',
      Avatar: 'https://via.placeholder.com/150',
      EmployeeStatus: 'Active',
      Salary: 59000.0,
      Role: 'Concierge',
      Department: 'Guest Services',
      EmailAddress: 'lucas.anderson@hotel.com'
    },
    {
      EmployeeID: 'E010',
      FirstName: 'Mia',
      LastName: 'Clark',
      Gender: 1,
      DateOfBirth: '2000-06-02',
      PhoneNumber: '+8899001122',
      Address: '543 Willow St, Smallville',
      Avatar: 'https://via.placeholder.com/150',
      EmployeeStatus: 'Active',
      Salary: 61000.0,
      Role: 'General Manager',
      Department: 'Administration',
      EmailAddress: 'mia.clark@hotel.com'
    },
    {
      EmployeeID: 'E011',
      FirstName: 'Liam',
      LastName: 'Lopez',
      Gender: 0,
      DateOfBirth: '1994-08-11',
      PhoneNumber: '+9900112233',
      Address: '654 Redwood St, Coast City',
      Avatar: 'https://via.placeholder.com/150',
      EmployeeStatus: 'On leave',
      Salary: 52000.0,
      Role: 'Bartender',
      Department: 'Bar',
      EmailAddress: 'liam.lopez@hotel.com'
    },
    {
      EmployeeID: 'E012',
      FirstName: 'Ava',
      LastName: 'Miller',
      Gender: 1,
      DateOfBirth: '1997-03-22',
      PhoneNumber: '+1100223344',
      Address: '213 Willow St, Smallville',
      Avatar: 'https://via.placeholder.com/150',
      EmployeeStatus: 'Active',
      Salary: 50000.0,
      Role: 'Receptionist',
      Department: 'Reception',
      EmailAddress: 'ava.miller@hotel.com'
    },
    {
      EmployeeID: 'E013',
      FirstName: 'Ethan',
      LastName: 'Garcia',
      Gender: 0,
      DateOfBirth: '1989-07-18',
      PhoneNumber: '+3311224455',
      Address: '897 Pine St, Gotham',
      Avatar: 'https://via.placeholder.com/150',
      EmployeeStatus: 'Inactive',
      Salary: 47000.0,
      Role: 'Chef',
      Department: 'Kitchen',
      EmailAddress: 'ethan.garcia@hotel.com'
    },
    {
      EmployeeID: 'E014',
      FirstName: 'Isabella',
      LastName: 'White',
      Gender: 1,
      DateOfBirth: '1988-12-05',
      PhoneNumber: '+4412335566',
      Address: '345 Maple St, Metropolis',
      Avatar: 'https://via.placeholder.com/150',
      EmployeeStatus: 'Active',
      Salary: 64000.0,
      Role: 'HR Manager',
      Department: 'Human Resources',
      EmailAddress: 'isabella.white@hotel.com'
    },
    {
      EmployeeID: 'E015',
      FirstName: 'James',
      LastName: 'Rodriguez',
      Gender: 0,
      DateOfBirth: '1993-09-12',
      PhoneNumber: '+5511223344',
      Address: '432 Elm St, Blüdhaven',
      Avatar: 'https://via.placeholder.com/150',
      EmployeeStatus: 'Active',
      Salary: 54000.0,
      Role: 'Night Manager',
      Department: 'Reception',
      EmailAddress: 'james.rodriguez@hotel.com'
    },
    {
      EmployeeID: 'E016',
      FirstName: 'Charlotte',
      LastName: 'Moore',
      Gender: 1,
      DateOfBirth: '1981-01-17',
      PhoneNumber: '+6612345678',
      Address: '678 Birch St, National City',
      Avatar: 'https://via.placeholder.com/150',
      EmployeeStatus: 'Inactive',
      Salary: 46000.0,
      Role: 'Valet Supervisor',
      Department: 'Valet',
      EmailAddress: 'charlotte.moore@hotel.com'
    },
    {
      EmployeeID: 'E017',
      FirstName: 'Benjamin',
      LastName: 'Perez',
      Gender: 0,
      DateOfBirth: '1990-02-14',
      PhoneNumber: '+7723345566',
      Address: '876 Cedar St, Keystone City',
      Avatar: 'https://via.placeholder.com/150',
      EmployeeStatus: 'Active',
      Salary: 57000.0,
      Role: 'IT Manager',
      Department: 'IT',
      EmailAddress: 'benjamin.perez@hotel.com'
    },
    {
      EmployeeID: 'E018',
      FirstName: 'Amelia',
      LastName: 'Martinez',
      Gender: 1,
      DateOfBirth: '1996-06-28',
      PhoneNumber: '+8823456677',
      Address: '321 Aspen St, Star City',
      Avatar: 'https://via.placeholder.com/150',
      EmployeeStatus: 'On leave',
      Salary: 48000.0,
      Role: 'Catering Manager',
      Department: 'Food & Beverage',
      EmailAddress: 'amelia.martinez@hotel.com'
    },
    {
      EmployeeID: 'E019',
      FirstName: 'Alexander',
      LastName: 'Walker',
      Gender: 0,
      DateOfBirth: '1983-05-09',
      PhoneNumber: '+9934567788',
      Address: '456 Maple St, Springfield',
      Avatar: 'https://via.placeholder.com/150',
      EmployeeStatus: 'Inactive',
      Salary: 51000.0,
      Role: 'Finance Manager',
      Department: 'Finance',
      EmailAddress: 'alexander.walker@hotel.com'
    },
    {
      EmployeeID: 'E020',
      FirstName: 'Harper',
      LastName: 'King',
      Gender: 1,
      DateOfBirth: '1999-11-23',
      PhoneNumber: '+1102334455',
      Address: '654 Oak St, Coast City',
      Avatar: 'https://via.placeholder.com/150',
      EmployeeStatus: 'Active',
      Salary: 60000.0,
      Role: 'Marketing Specialist',
      Department: 'Marketing',
      EmailAddress: 'harper.king@hotel.com'
    }
  ]


  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  

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
        <EmployeeList employeeData={data} />
      </table>

      <Fab
        onClick={handleOpen}
        color='primary'
        aria-label='add'
        style={{ position: 'fixed', bottom: '20px', right: '30px' }}
      >
        <AddIcon />
      </Fab>

    <AddEmployeeModal open={open} handleClose={handleClose}/>

    </div>
  )
}

export default Employee
