import React from 'react'
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import CyroCooling from './CyroCooling'
import HowItWorks from './HowItWorks'
import Appointment from '../../homeLanding/appointment'
import Injections from './Injections'
import HowShould from './HowShould'
import greenApplePic from '../../../assets/weightMangement/greenApple.png'
import appointmentPic from '../../../assets/homeImg/AppointmentPic.png'
import BookAppointmentForm from '../../common/BookAppointmentForm'

const CryoCoolSection = () => {
    return (
        <div>
            <Header />
            <div>
                <CyroCooling />
                <HowItWorks />
                <BookAppointmentForm
                    appointmentPic={greenApplePic}
                    isReversed
                />
                <Injections />
                <HowShould />
                <BookAppointmentForm
                    appointmentPic={appointmentPic}
                    isReversed
                />
            </div>

            <Footer />
        </div>
    )
}
export default CryoCoolSection
