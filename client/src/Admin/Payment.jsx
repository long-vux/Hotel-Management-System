import React from 'react'
import PaymentList from '../components/admin/payment/PaymentList'

const Payment = () => {
  const data = [
    {
        id: 1,
        reservationId: 'RES12345',
        guestName: 'John Doe',
        roomNo: '101',
        amountPaid: 200.0,
        paymentDate: '2024-10-20',
        status: 'Confirmed'
    },
    {
        id: 2,
        reservationId: 'RES12346',
        guestName: 'Jane Smith',
        roomNo: '102',
        amountPaid: 150.0,
        paymentDate: '2024-10-21',
        status: 'Pending'
    },
    {
        id: 3,
        reservationId: 'RES12347',
        guestName: 'Alice Johnson',
        roomNo: '103',
        amountPaid: 300.0,
        paymentDate: '2024-10-22',
        status: 'Cancelled'
    },
    {
        id: 4,
        reservationId: 'RES12348',
        guestName: 'Bob Brown',
        roomNo: '104',
        amountPaid: 250.0,
        paymentDate: '2024-10-23',
        status: 'Confirmed'
    },
    {
        id: 5,
        reservationId: 'RES12349',
        guestName: 'Charlie White',
        roomNo: '105',
        amountPaid: 180.0,
        paymentDate: '2024-10-24',
        status: 'Confirmed'
    },
    {
        id: 6,
        reservationId: 'RES12350',
        guestName: 'Diana Black',
        roomNo: '106',
        amountPaid: 230.0,
        paymentDate: '2024-10-25',
        status: 'Pending'
    },
    {
        id: 7,
        reservationId: 'RES12351',
        guestName: 'Eve Green',
        roomNo: '107',
        amountPaid: 210.0,
        paymentDate: '2024-10-26',
        status: 'Cancelled'
    },
    {
        id: 8,
        reservationId: 'RES12352',
        guestName: 'Frank Red',
        roomNo: '108',
        amountPaid: 240.0,
        paymentDate: '2024-10-27',
        status: 'Confirmed'
    },
    {
        id: 9,
        reservationId: 'RES12353',
        guestName: 'Grace Blue',
        roomNo: '109',
        amountPaid: 260.0,
        paymentDate: '2024-10-28',
        status: 'Pending'
    },
    {
        id: 10,
        reservationId: 'RES12354',
        guestName: 'Hank Silver',
        roomNo: '110',
        amountPaid: 200.0,
        paymentDate: '2024-10-29',
        status: 'Confirmed'
    },
    {
        id: 11,
        reservationId: 'RES12355',
        guestName: 'Ivy Gold',
        roomNo: '111',
        amountPaid: 175.0,
        paymentDate: '2024-10-30',
        status: 'Cancelled'
    },
    {
        id: 12,
        reservationId: 'RES12356',
        guestName: 'Jack Gray',
        roomNo: '112',
        amountPaid: 195.0,
        paymentDate: '2024-11-01',
        status: 'Confirmed'
    },
    {
        id: 13,
        reservationId: 'RES12357',
        guestName: 'Kim White',
        roomNo: '113',
        amountPaid: 215.0,
        paymentDate: '2024-11-02',
        status: 'Pending'
    },
    {
        id: 14,
        reservationId: 'RES12358',
        guestName: 'Leo Brown',
        roomNo: '114',
        amountPaid: 220.0,
        paymentDate: '2024-11-03',
        status: 'Confirmed'
    },
    {
        id: 15,
        reservationId: 'RES12359',
        guestName: 'Mona Purple',
        roomNo: '115',
        amountPaid: 290.0,
        paymentDate: '2024-11-04',
        status: 'Cancelled'
    },
    {
        id: 16,
        reservationId: 'RES12360',
        guestName: 'Nick Black',
        roomNo: '116',
        amountPaid: 255.0,
        paymentDate: '2024-11-05',
        status: 'Confirmed'
    },
    {
        id: 17,
        reservationId: 'RES12361',
        guestName: 'Oscar Yellow',
        roomNo: '117',
        amountPaid: 265.0,
        paymentDate: '2024-11-06',
        status: 'Pending'
    },
    {
        id: 18,
        reservationId: 'RES12362',
        guestName: 'Paula Gray',
        roomNo: '118',
        amountPaid: 280.0,
        paymentDate: '2024-11-07',
        status: 'Cancelled'
    },
    {
        id: 19,
        reservationId: 'RES12363',
        guestName: 'Quincy Orange',
        roomNo: '119',
        amountPaid: 175.0,
        paymentDate: '2024-11-08',
        status: 'Confirmed'
    },
    {
        id: 20,
        reservationId: 'RES12364',
        guestName: 'Rita Blue',
        roomNo: '120',
        amountPaid: 300.0,
        paymentDate: '2024-11-09',
        status: 'Pending'
    },
    {
        id: 21,
        reservationId: 'RES12365',
        guestName: 'Sam Green',
        roomNo: '121',
        amountPaid: 240.0,
        paymentDate: '2024-11-10',
        status: 'Confirmed'
    },
    {
        id: 22,
        reservationId: 'RES12366',
        guestName: 'Tina Pink',
        roomNo: '122',
        amountPaid: 285.0,
        paymentDate: '2024-11-11',
        status: 'Cancelled'
    },
    {
        id: 23,
        reservationId: 'RES12367',
        guestName: 'Uma Violet',
        roomNo: '123',
        amountPaid: 225.0,
        paymentDate: '2024-11-12',
        status: 'Pending'
    },
    {
        id: 24,
        reservationId: 'RES12368',
        guestName: 'Vince Red',
        roomNo: '124',
        amountPaid: 235.0,
        paymentDate: '2024-11-13',
        status: 'Confirmed'
    }
];

  

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
                Amount paid
              </th>
              <th scope='col' class='px-4 py-2 text-[14px]'>
                Payment date
              </th>
              <th scope='col' class='px-4 py-2 text-[14px]'>
                Status
              </th>
              <th scope='col' class='px-4 py-2 text-[14px]'>
                Action
              </th>
            </tr>
          </thead>
          <PaymentList paymentData={data}/>
        </table>
      </div>
    </div>
  )
}

export default Payment
