import React from 'react'

const CustomerRow = ({ guestName, checkIn, checkOut, roomType, allocatedRoom, dueAmount }) => {
    return (
        <tr class="bg-white text-black text-[14px] border-b border-gray-300">
            <td class="px-4 pt-2 pb-1 ">
                {guestName}
            </td>
            <td class="px-4">
                {checkIn}
            </td>
            <td class="px-4">
                {checkOut}
            </td>
            <td class="px-4">
                {roomType}
            </td>
            <td class="px-4">
                {allocatedRoom}
            </td>
            <td class="px-4">
                {dueAmount}
            </td>
        </tr>
    )
}

export default CustomerRow