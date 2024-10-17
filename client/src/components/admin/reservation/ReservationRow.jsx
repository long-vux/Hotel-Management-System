import React from 'react'
import { CheckBox, CancelPresentationTwoTone } from '@mui/icons-material';
import DeleteConfirmModal from './DeleteConfirmModal';

const ReservationRow = ({ id, guestName, email, phoneNumber, roomType, totalAmount, status, checkIn, checkOut, createdAt }) => {
    // delete modal handler
    const [openDelete, setOpenDelete] = React.useState(false)
    const handleOpenDelete = () => setOpenDelete(true)
    const handleCloseDelete = () => setOpenDelete(false)

    const handleApprove = () => {
        console.log('Approve')
    }

    return (
        <>
            <tr class="bg-white text-black border border-b-gray-100 hover:bg-gray-100">
                <td class="px-4">#{id}</td>
                <td class="px-4">{guestName}</td>
                <td class="px-4">{email}</td>
                <td class="px-4">{phoneNumber}</td>
                <td class="px-4">{roomType}</td>
                <td class="px-4">{totalAmount}$</td>
                <td class="px-4">{status}</td>
                <td class="px-4">{checkIn} - {checkOut}</td>
                <td class="px-4">{createdAt}</td>
                <td class="px-4">
                    <div className='flex flex-row gap-[10px] items-center'>
                        <button className='text-green-500' onClick={handleApprove}><CheckBox fontSize='medium' /></button>
                        <div className='w-[1.5px] h-[25px] bg-black'></div>
                        <button className='text-red-500' onClick={handleOpenDelete}><CancelPresentationTwoTone fontSize='medium' /></button>
                    </div>
                </td>
            </tr>

            <DeleteConfirmModal
                open={openDelete}
                handleClose={handleCloseDelete}
                guestName={guestName}
            />
        </>
    )
}

export default ReservationRow