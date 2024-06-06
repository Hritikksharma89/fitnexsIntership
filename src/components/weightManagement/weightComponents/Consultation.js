import React from 'react'
import BookAppointmentForm from '../../common/BookAppointmentForm'
import pic from '../../../assets/weightMangement/greenApple.png'

const Consultation = () => {
    return (
        <div>
            <BookAppointmentForm
                hideFogEffect
                isReversed
                appointmentPic={pic}
            />
        </div>
    )
}

export default Consultation
