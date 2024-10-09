import React from 'react'

const CustomerRow = ({ guestName, checkIn, checkOut, roomType, allocatedRoom, dueAmount }) => {
    return (
        <tr class="bg-white text-black text-[14px]">
            <td class="px-4 py-2 ">
                {guestName}
            </td>
            <td class="px-4 py-1">
                {checkIn}
            </td>
            <td class="px-4 py-1">
                {checkOut}
            </td>
            <td class="px-4 py-1">
                {roomType}
            </td>
            <td class="px-4 py-1">
                {allocatedRoom}
            </td>
            <td class="px-4 py-1">
                {dueAmount}
            </td>
        </tr>
    )
}

export default CustomerRow