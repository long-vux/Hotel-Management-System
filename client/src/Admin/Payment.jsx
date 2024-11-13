import React, { useState, useEffect } from 'react'
import PaymentList from '../components/admin/payment/PaymentList'
import axios from 'axios'

const Payment = () => {


  const DB_HOST = process.env.REACT_APP_DB_HOST

  const [payment, setPayment] = useState(null)
  const [isPaymentLoading, setIsPaymentLoading] = useState(null)

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const response = await axios.get(`${DB_HOST}api/Payment`)

        if (response.data) {
          setPayment(response.data)
        } else {
          console.error('Error fetching payment: Invalid response data.')
        }
      } catch (error) {
        console.error('Error fetching payments:', error)
      } finally {
        setIsPaymentLoading(false)
      }
    }
    fetchPayment()
  }, [])

  


  return (
    <div>
      <div className='flex flex-col  w-full'>
        <h1 className=' text-[25px] font-medium'> Payment</h1>

        <table class='text-left bg-white rounded-md w-full pr-[20px]'>
          <thead class=''>
            <tr>
              <th scope='col' class='px-4 py-2 text-[14px]'>
                ID
              </th>

              <th scope='col' class='px-4 py-2 text-[14px]'>
                Reservation ID
              </th>

              <th scope='col' class='px-4 py-2 text-[14px]'>
                Guest name
              </th>

              <th scope='col' class='px-4 py-2 text-[14px]'>
                Room No.
              </th>

              <th scope='col' class='px-4 py-2 text-[14px]'>
                Payment date
              </th>
              <th scope='col' class='px-4 py-2 text-[14px]'>
                Amount paid
              </th>

              <th scope='col' class='px-4 py-2 text-[14px]'>
                Payment method
              </th>

              <th scope='col' class='px-4 py-2 text-[14px]'>
                Status
              </th>

              <th scope='col' class='px-4 py-2 text-[14px]'>
                Action
              </th>
            </tr>
          </thead>

          {!isPaymentLoading ? (
            <PaymentList paymentData={payment} />
          ) : (
            <tbody>
              <tr>
                <td colSpan='9' className='text-center p-4'>
                  Loading...
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  )
}

export default Payment
