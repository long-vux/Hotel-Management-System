import React from 'react'
import { VisibilityOutlined, CancelPresentationTwoTone } from '@mui/icons-material';

const CustomerRow = ({ guestName, checkIn, checkOut, roomType, allocatedRoom }) => {
    return (
            <tr class="bg-white text-black">
                <th scope="row" class="px-4 py-2 font-medium ">
                    {guestName}
                </th>
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