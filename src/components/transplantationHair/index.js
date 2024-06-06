import React from 'react'
import HairTransplation from './HairTransplation'
import Header from '../layout/header'
import Footer from '../layout/footer'
import HairTransplationSection from './HairTransplationSection'
import AestheticCare from './AestheticCare'
import TechniqueUsed from './TechniqueUsed'
import Proceder from './Proceder'
import Appointment from '../homeLanding/appointment'
import appointmentPic from '../../assets/homeImg/AppointmentPic.png'

import BookAppointmentForm from '../common/BookAppointmentForm'

const Transplantation = () => {
    return (
        <>
            <div>
                <Header />
                <HairTransplation />
                <HairTransplationSection />
                <AestheticCare />
                <TechniqueUsed />
                <Proceder />
                {/* <Appointment /> */}
                <BookAppointmentForm
                    appointmentPic={appointmentPic}
                    isReversed
                />

                <Footer />
            </div>
        </>
    )
}

export default Transplantation
