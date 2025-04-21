import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const dbHost = process.env.REACT_APP_DB_HOST

  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await axios.post(
        dbHost + 'api/account/register',
        { firstName, lastName, email, phoneNumber, password, confirmPassword },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      if (response.status === 200) {
        navigate('/login')
      }
    } catch (error) {
      console.error('Error:', error.response)
      if (error.response.data !== '')
        setError(error.response.data)
      else if (error.response.status === 401) {
        setError(error.response.data)
      } else if (error.response.status === 400) {
        setError(
          error.response.data.errors.FirstName?.[0] ||
          error.response.data.errors.LastName?.[0] ||
          error.response.data.errors.Email?.[0] ||
          error.response.data.errors.PhoneNumber?.[0] ||
          error.response.data.errors.Password?.[0] ||
          error.response.data.errors.ConfirmPassword?.[0]
        )
      } else if (error.response.status === 500) {
        setError(error.response.data[0].description)
      }
    }
  }

  return (
    <div className='flex flex-row justify-around gap-20 items-center h-[600px]'>
      <div className='w-3/5 flex flex-col items-center'>
        <div className='flex flex-col p-4 rounded-lg ml-20 border border-1 border-gray-300 mb-2 w-[70%]'>
          <h1 className='text-2xl font-bold mb-4'>Sign up</h1>
          <div className='flex flex-row gap-4'>
            <div className='flex flex-col mb-4 w-1/2'>
              <label className='text-sm font-bold mb-1'>First Name</label>
              <input type="text" value={firstName} className='border border-1 border-gray-300 rounded-md p-2' onChange={e => setFirstName(e.target.value)} />
            </div>
            <div className='flex flex-col mb-4 w-1/2'>
              <label className='text-sm font-bold mb-1'>Last Name</label>
              <input type="text" value={lastName} className='border border-1 border-gray-300 rounded-md p-2' onChange={e => setLastName(e.target.value)} />
            </div>
          </div>
          <div className='flex flex-col mb-4'>
            <label className='text-sm font-bold mb-1'>Email</label>
            <input type="email" value={email} className='border border-1 border-gray-300 rounded-md p-2' onChange={e => setEmail(e.target.value)} />
          </div>

          <div className='flex flex-col mb-4' >
            <label className='text-sm font-bold mb-1'>Phone Number</label>
            <input type="text" value={phoneNumber} className='border border-1 border-gray-300 rounded-md p-2' onChange={e => setPhoneNumber(e.target.value)} />
          </div>
          <div className='flex flex-row gap-4'>
            <div className='flex flex-col mb-4 w-1/2'>
              <label className='text-sm font-bold mb-1'>Password</label>
              <input type="password" value={password} className='border border-1 border-gray-300 rounded-md p-2' onChange={e => setPassword(e.target.value)} />
            </div>
            <div className='flex flex-col mb-4 w-1/2'>
              <label className='text-sm font-bold mb-1'>Confirm Password</label>
              <input type="password" value={confirmPassword} className='border border-1 border-gray-300 rounded-md p-2' onChange={e => setConfirmPassword(e.target.value)} />
            </div>
          </div>
          {error && (
            <div className='mb-4'>
              <p className='text-red-500'>{error}</p>
            </div>
          )}
          <button className='bg-[#1D4567] text-white p-2 rounded-md hover:bg-white hover:text-[#1D4567] hover:outline hover:outline-1 hover:outline-[#1D4567] hover:font-bold' onClick={handleSubmit}><span className='font-bold'>Sign up</span></button>
        </div>
        <span className='flex justify-center text-sm gap-2'>Already have an account?  <a href="/login" className='font-bold underline'>Login</a></span>
      </div>
      <div className='w-2/5'>
        <img src={process.env.PUBLIC_URL + '/assets/hotel_facilities/pool.jpg'} alt='room' className='h-[600px] w-full' />
      </div>
    </div>
  )
}
export default Signup