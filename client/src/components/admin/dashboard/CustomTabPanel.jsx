import React, { useState, useEffect } from 'react'
import { Box, Tabs, Tab } from '@mui/material'
import PropTypes from 'prop-types'
import axios from 'axios'

// Custom Tab Panel
function CustomTabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
}

function a11yProps (index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`
  }
}

const DB_HOST = process.env.REACT_APP_DB_HOST

const RoomManagement = () => {
  // Check-in state
  const [value, setValue] = useState(0)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [customer, setCustomer] = useState(null)
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [idType, setIdType] = useState('')
  const [idNumber, setIdNumber] = useState('')
  const [booking, setBooking] = useState(null)
  const [roomType, setRoomType] = useState('')
  const [roomNo, setRoomNo] = useState('')

  // Check-out state
  const [checkoutPhoneNumber, setCheckoutPhoneNumber] = useState('')
  const [checkoutCustomer, setCheckoutCustomer] = useState(null)
  const [checkoutBooking, setCheckoutBooking] = useState(null)
  const [checkoutRoomType, setCheckoutRoomType] = useState('')
  const [checkoutRoomNo, setCheckoutRoomNo] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [payment, setPayment] = useState(null)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  // --- Check-in functions ---
  const handle_searchBooking = async () => {
    try {
      const response_customer = await axios.get(
        `${DB_HOST}api/customer?PhoneNumber=${phoneNumber}`
      )

      if (
        response_customer &&
        response_customer.data &&
        response_customer.data.length > 0
      ) {
        const customerData = response_customer.data[0]
        setCustomer(customerData)
        setFirstName(customerData.firstName)
        setLastName(customerData.lastName)
        setEmail(customerData.email)
        setIdNumber(customerData.identityNumber)
        setIdType(customerData.identityType)

        // Find the latest non-checked-out booking
        const latestBooking = customerData.bookings.find(b => !b.isCheckOut)
        setBooking(latestBooking)
      } else {
        alert('No customer found with the provided phone number.')
        clearCheckInFields() // Clear fields if no customer found
      }
    } catch (error) {
      console.error('Error searching for the booking:', error)
      alert(
        'An error occurred while searching for the booking. Please try again.'
      )
    }
  }

  useEffect(() => {
    const fetchRoomDetails = async () => {
      if (booking) {
        try {
          const response = await axios.get(
            `${DB_HOST}api/Room/${booking.roomId}`
          )
          if (response.data) {
            setRoomType(response.data.roomType)
            setRoomNo(response.data.roomNumber)
          }
        } catch (error) {
          console.error('Error searching for the room:', error)
        }
      }
    }

    fetchRoomDetails()
  }, [booking])

  const updateCustomerInfo = async () => {
    if (!customer) return // Don't try to update if no customer
    try {
      await axios.put(`${DB_HOST}api/customer/${customer.id}`, {
        firstName: firstname, // Use state variables here
        lastName: lastname,
        email: email,
        identityNumber: idNumber,
        identityType: idType,
        phoneNumber: phoneNumber
      })
    } catch (error) {
      console.error('Error updating customer:', error)
      alert('Error updating customer info.')
    }
  }

  const updateBookingInfo = async () => {
    if (!booking) return
    try {
      const formData = new FormData()
      formData.append('IsCheckIn', true)
      formData.append('Status', "Checked In")
      formData.append('CheckInDate', new Date().toISOString())

      await axios.put(`${DB_HOST}api/Booking/${booking.id}`, formData)
    } catch (error) {
      console.error('Error updating booking:', error)
      alert('Error updating booking info.')
    }
  }

  const createPayment = async () => {
    if (!booking) return
    try {
      const formData = new FormData()
      formData.append('TotalAmount', booking.totalAmount)
      formData.append('Status', 'Pending') // Or 'Paid' if paid at check-in
      formData.append('BookingId', booking.id)

      await axios.post(`${DB_HOST}api/Payment`, formData)
    } catch (error) {
      console.error('Error creating payment:', error)
      alert('Error creating payment.')
    }
  }

  const handleCheckin = async () => {
    // Validation for Check-In
    if (!customer || !booking) {
      alert('Please search for a reservation first.')
      return
    }

    if (!idType || !idNumber) {
      alert('Please fill in all required fields: ID Type, ID Number')
      return
    }
    try {
      await updateCustomerInfo()
      await updateBookingInfo()
      await createPayment()
      alert('Check-in successful!')
      clearCheckInFields() // Clear the form after successful check-in
      window.location.reload(true)
    } catch (error) {
      console.error('Error during check-in:', error)
      alert('An error occurred during check-in. Please try again.')
    }
  }

  const clearCheckInFields = () => {
    setPhoneNumber('')
    setCustomer(null)
    setFirstName('')
    setLastName('')
    setEmail('')
    setIdType('')
    setIdNumber('')
    setBooking(null)
    setRoomType('')
    setRoomNo('')
  }

  // --- Checkout functions ---

  const handleCheckoutSearch = async () => {
    try {
      const response = await axios.get(
        `${DB_HOST}api/customer?PhoneNumber=${checkoutPhoneNumber}`
      )

      if (response && response.data && response.data.length > 0) {
        const customerData = response.data[0]
        setCheckoutCustomer(customerData)

        // Find the latest checked-in booking that hasn't been checked out yet
        const latestCheckInBooking = customerData.bookings.find(
          booking => booking.isCheckIn && !booking.isCheckOut
        )

        if (latestCheckInBooking) {
          setCheckoutBooking(latestCheckInBooking)
        } else {
          alert('No active check-in found for this customer.')
          setCheckoutBooking(null) // Important: reset checkoutBooking if no active check-in
        }
      } else {
        alert('No customer found with the provided phone number.')
        clearCheckoutFields()
      }
    } catch (error) {
      console.error('Error searching for customer:', error)
      alert('An error occurred while searching. Please try again.')
    }
  }

  useEffect(() => {
    const fetchCheckoutRoomDetails = async () => {
      if (checkoutBooking) {
        try {
          const response = await axios.get(
            `${DB_HOST}api/Room/${checkoutBooking.roomId}`
          )
          if (response.data) {
            setCheckoutRoomType(response.data.roomType)
            setCheckoutRoomNo(response.data.roomNumber)
          }
        } catch (error) {
          console.error('Error fetching room details:', error)
        }

        try {
          const paymentResponse = await axios.get(`${DB_HOST}api/Payment`)
          if (paymentResponse.data && paymentResponse.data.length > 0) {
            const paymentThis = paymentResponse.data.find(
              p => p.bookingId === checkoutBooking.id
            )
            setPayment(paymentThis)
          }
        } catch (error) {
          console.error('Error fetching payment', error)
        }
      }
    }

    fetchCheckoutRoomDetails()
  }, [checkoutBooking])

  const handleCheckout = async () => {
    // Validation for Check-Out
    if (!checkoutBooking || !payment) {
      alert('Please search for a customer and booking first.')
      return
    }

    if (!paymentMethod) {
      alert('Please select a payment method.')
      return
    }
    try {
      // Booking update
      const bookingData = new FormData()
      bookingData.append('IsCheckOut', true)
      bookingData.append('Status', "Checked Out")
      bookingData.append('CheckOutDate', new Date().toISOString())

      await axios.put(
        `${DB_HOST}api/Booking/${checkoutBooking.id}`,
        bookingData
      )

      // Payment update
      const paymentData = new FormData()
      paymentData.append('PaymentDate', new Date().toISOString())
      paymentData.append('PaymentMethod', paymentMethod)
      console.log('This is payment methid when updating: ', paymentMethod)

      paymentData.append('TotalAmount', checkoutBooking.totalAmount)
      paymentData.append('Status', 'Successfully') // or "Paid"

      await axios.put(`${DB_HOST}api/Payment/${payment.id}`, paymentData)

      alert('Checkout successful!')
      clearCheckoutFields() // Clear checkout form after successful checkout
      window.location.reload(true)
    } catch (error) {
      console.error('Error during checkout:', error)
      alert('An error occurred during checkout. Please try again.')
    }
  }

  const clearCheckoutFields = () => {
    setCheckoutPhoneNumber('')
    setCheckoutCustomer(null)
    setCheckoutBooking(null)
    setCheckoutRoomType('')
    setCheckoutRoomNo('')
    setPaymentMethod('')
    setPayment(null)
  }

  return (
    <div className='w-[40%] mt-[5px] ml-[5px]'>
      <img
        src={`${process.env.PUBLIC_URL}/assets/hotel_facilities/building1.jpg`}
        alt='room'
        className='w-full h-[100px] border-1 border-gray-300 object-cover mb-2'
      />

      <div className='flex flex-col gap-[4px]'>
        <Box
          sx={{
            width: '100%',
            backgroundColor: 'white',
            padding: 1,
            borderRadius: 2
          }}
        >
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
            >
              <Tab label='Check in' {...a11yProps(0)} />
              <Tab label='Check out' {...a11yProps(1)} />
            </Tabs>
          </Box>

          {/* Check-in Tab */}
          <CustomTabPanel value={value} index={0}>
            <div className='flex flex-col gap-[13px] w-full h-full rounded-md'>
              {/* Phone number */}
              <div className='flex flex-col text-[14px] font-bold'>
                <h1>Phone number</h1>
                <div className='w-full flex flex-row gap-[10px]'>
                  <input
                    type='tel'
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    placeholder='(123) 456-7890' // Standard phone number format
                    pattern='\(\d{3}\) \d{3}-\d{4}' // Matches format like (123) 456-7890
                    title='Phone number must be in the format (123) 456-7890'
                    className='w-[60%] h-[30px] border-[1px] border-gray-400 rounded-md p-1'
                  />

                  <button
                    className='w-[40%] h-[30px] bg-[#1D4567] text-white rounded-md'
                    onClick={handle_searchBooking}
                  >
                    Search for reservation
                  </button>
                </div>
              </div>

              {/* First and Last Name */}
              <div className='flex flex-row text-[14px] font-bold gap-[10px]'>
                <div className='w-[50%] flex flex-col'>
                  <h1>First Name</h1>
                  <input
                    disabled
                    type='text'
                    value={firstname}
                    className='w-full h-[30px] border-[1px] border-gray-400 rounded-md p-1'
                  />
                </div>
                <div className='w-[50%] flex flex-col'>
                  <h1>Last Name</h1>
                  <input
                    disabled
                    type='text'
                    value={lastname}
                    className='w-full h-[30px] border-[1px] border-gray-400 rounded-md p-1'
                  />
                </div>
              </div>

              {/* Email */}
              <div className='flex flex-col text-[14px] font-bold'>
                <h1>Email</h1>

                <input
                  type='text'
                  disabled={!!email}
                  value={email} // Use the email state
                  onChange={e => setEmail(e.target.value)} // Allow editing
                  className='w-full h-[30px] border-[1px] border-gray-400 rounded-md p-1'
                />
              </div>

              {/* ID Type and ID No */}
              <div className='flex flex-row text-[14px] font-bold gap-[10px]'>
                <div className='w-full flex flex-col'>
                  <h1>ID Type</h1>
                  <select
                    className='w-full h-[30px] border-[1px] border-gray-400 rounded-md p-1'
                    value={idType}
                    onChange={e => setIdType(e.target.value)}
                  >
                    <option value='' disabled>
                      Select ID type
                    </option>
                    <option value='id'>ID</option>
                    <option value='passport'>Passport</option>
                  </select>
                </div>
                <div className='w-full flex flex-col'>
                  <h1>ID No.</h1>
                  <input
                    type='text'
                    value={idNumber}
                    onChange={e => setIdNumber(e.target.value)}
                    className='w-full h-[30px] border-[1px] border-gray-400 rounded-md p-1'
                  />
                </div>
              </div>

              {/* Room Details */}
              <div className='flex flex-row text-[14px] font-bold gap-[10px]'>
                <div className='w-[40%] flex flex-col'>
                  <h1>Room Type</h1>

                  <input
                    disabled
                    type='text'
                    value={booking ? roomType : ''}
                    className='w-full h-[30px] border-[1px] border-gray-400 rounded-md p-1'
                  />
                </div>

                <div className='w-[40%] flex flex-col'>
                  <h1>Number of Guests</h1>
                  <input
                    disabled
                    type='text'
                    value={booking ? booking.guestNumber : ''}
                    className='w-full h-[30px] border-[1px] border-gray-400 rounded-md p-1'
                  />
                </div>
                <div className='w-[20%] flex flex-col'>
                  <h1>Room No.</h1>
                  <input
                    disabled
                    type='text'
                    value={booking ? roomNo : ''}
                    className='w-full h-[30px] border-[1px] border-gray-400 rounded-md p-1'
                  />
                </div>
              </div>

              {/* Total Charge */}
              <div className='flex flex-col'>
                <div className='flex flex-row text-[14px] justify-between font-bold'>
                  <h1>Total charge</h1>
                  <span className='text-[18px] font-bold'>
                    {booking ? booking.totalAmount : 0}$
                  </span>
                </div>
                <div className='w-full h-[1px] bg-gray-400 pt-0'></div>
              </div>

              {/* Check-in Button */}
              <div className='flex justify-end'>
                <button
                  className='w-[100px] font-bold h-[30px] bg-[#1D4567] text-white rounded-md'
                  onClick={handleCheckin}
                >
                  Check in
                </button>
              </div>
            </div>
          </CustomTabPanel>

          {/* ========= Check-out Tab ============= */}
          <CustomTabPanel value={value} index={1}>
            <div className='flex flex-col gap-[13px] w-full h-full rounded-md'>
              {/* ... other checkout fields */}

              <div className='flex flex-col text-[14px] font-bold'>
                <h1>Phone number</h1>
                <div className='w-full flex flex-row gap-[10px]'>
                  <input
                    type='tel'
                    value={checkoutPhoneNumber}
                    onChange={e => setCheckoutPhoneNumber(e.target.value)}
                    placeholder='(123) 456-7890'
                    pattern='\(\d{3}\) \d{3}-\d{4}'
                    title='Phone number must be in the format (123) 456-7890'
                    className='w-[60%] h-[30px] border-[1px] border-gray-400 rounded-md p-1'
                  />
                  <button
                    className='w-[40%] h-[30px] bg-[#1D4567] text-white rounded-md'
                    onClick={handleCheckoutSearch}
                  >
                    Search customer
                  </button>
                </div>
              </div>

              {/* Guest Name (Checkout) */}
              <div className='flex flex-row text-[14px] font-bold gap-[10px]'>
                <div className='flex flex-col'>
                  <h1>First name</h1>
                  <input
                    disabled
                    type='text'
                    value={checkoutCustomer ? checkoutCustomer.firstName : ''}
                    className='w-full h-[30px] border-[1px] border-gray-400 rounded-md p-1'
                  />
                </div>
                <div className='flex flex-col'>
                  <h1>Last name</h1>
                  <input
                    disabled
                    type='text'
                    value={checkoutCustomer ? checkoutCustomer.lastName : ''}
                    className='w-full h-[30px] border-[1px] border-gray-400 rounded-md p-1'
                  />
                </div>
              </div>

              {/* Room No and Type (Checkout) */}
              <div className='flex flex-row text-[14px] font-bold gap-[10px]'>
                <div className='flex flex-col'>
                  <h1>Room No.</h1>
                  <input
                    disabled
                    type='text'
                    value={checkoutBooking ? checkoutRoomNo : ''}
                    className='w-full h-[30px] border-[1px] border-gray-400 rounded-md p-1'
                  />
                </div>
                <div className='flex flex-col'>
                  <h1>Room Type</h1>
                  <input
                    disabled
                    type='text'
                    value={checkoutBooking ? checkoutRoomType : ''}
                    className='w-full h-[30px] border-[1px] border-gray-400 rounded-md p-1'
                  />
                </div>
              </div>

              {/* Payment Method (Checkout) */}
              <div className='flex flex-row text-[14px] font-bold gap-[10px]'>
                <div className='flex flex-col w-full'>
                  <h1>Payment Method</h1>
                  <select
                    value={paymentMethod}
                    onChange={e => setPaymentMethod(e.target.value)}
                    className='w-full h-[30px] border-[1px] border-gray-400 rounded-md p-1'
                  >
                    <option value=''>Choose Payment Method</option>
                    <option value='Cash'>Cash</option>
                    <option value='Banking'>Banking</option>
                  </select>
                </div>
              </div>

              {/* Total Charge (Checkout) */}
              <div className='flex flex-col'>
                <div className='flex flex-row text-[14px] justify-between font-bold'>
                  <h1>Total charge</h1>
                  <span className='text-[18px] font-bold'>
                    {checkoutBooking ? checkoutBooking.totalAmount : 0}$
                  </span>
                </div>
                <div className='w-full h-[1px] bg-gray-400 pt-0'></div>
              </div>

              {/* Check-out Button */}
              <div className='flex justify-end'>
                <button
                  className='w-[100px] font-bold h-[30px] bg-[#1D4567] text-white rounded-md'
                  onClick={handleCheckout}
                >
                  Check out
                </button>
              </div>
            </div>
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  )
}

export default RoomManagement
