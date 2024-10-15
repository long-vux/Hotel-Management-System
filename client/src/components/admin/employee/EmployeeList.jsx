import React, { useState } from 'react'
import Pagination from '../../layout/Pagination'
import EmployeeRow from './EmployeeRow'

const EmployeeList = ({ employeeData = [] }) => {  // Provide default empty array to avoid undefined
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  // Pagination logic
  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = employeeData.slice(firstPostIndex, lastPostIndex)

  return (
    <>
      
        <tbody>
          {currentPosts.map((employee, index) => (
            <EmployeeRow
              key={index}
              EmployeeID={employee.EmployeeID}
              FirstName={employee.FirstName}
              LastName={employee.LastName}
              Gender={employee.Gender}
              DateOfBirth={employee.DateOfBirth}
              Email={employee.EmailAddress}
              PhoneNumber={employee.PhoneNumber}
              Address={employee.Address}
              Avatar={employee.Avatar}
              EmployeeStatus={employee.EmployeeStatus}
              Salary={employee.Salary}
              Role={employee.Role}
              Department={employee.Department}
            />
          ))}
        </tbody>
 
      <div className='mb-4 ml-3'>
        <Pagination
          totalPosts={employeeData.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  )
}

export default EmployeeList
