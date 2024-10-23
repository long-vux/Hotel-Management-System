import React from 'react'
import { VisibilityOutlined, CancelPresentationTwoTone } from '@mui/icons-material';

const CustomerRow = ({ guestName, checkIn, checkOut, roomType, allocatedRoom }) => {
    return (
            <tr class="bg-white text-black border-b border-gray-300">
                <th scope="row" class="px-4 pt-3 pb-1 font-medium ">
                    {guestName}
                </th>
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
                    <div className='flex flex-row gap-[10px] items-center'>
                        <button className='text-black'><VisibilityOutlined fontSize='large' /></button>
                        <div className='w-[1.5px] h-[25px] bg-black'></div>
                        <button className='text-red-500'><CancelPresentationTwoTone fontSize='large' /></button>
                    </div>
                </td>
        </tr>
    )
}

export default CustomerRow