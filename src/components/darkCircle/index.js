import React from 'react'
import TiredEyes from './TiredEyes'
import Header from '../layout/header'
import Footer from '../layout/footer'
import KnowMoreAboutUs from './KnowMoreAboutUs'
import AboutDarkCircle from './AboutDarkCircle'
import EyeDarkCircleTretment from './EyeDarkCircleTretment'
import WhatAreDarkCircle from './WhatAreDarkCircle'
import CauseOfDarkCircle from './CauseOfDarkCircle'
import TypeOfDarkCircle from './TypeOfDarkCircle'
import PreventDarkCircle from './PreventDarkCircle'
import PossibleTreatment from './PossibleTreatment'
import AstheticCare from './AstheticCare'
import appointmentPic from '../../assets/homeImg/AppointmentPic.png'
import BookAppointmentForm from '../common/BookAppointmentForm'


const DarkCircle = () => {
    return (
        <div>
            <Header />
            <TiredEyes />
            <KnowMoreAboutUs />
            <AboutDarkCircle />
            <EyeDarkCircleTretment />
            <WhatAreDarkCircle />
            <CauseOfDarkCircle />
            <TypeOfDarkCircle />
            <PreventDarkCircle />
            <PossibleTreatment />
            <AstheticCare />
            <BookAppointmentForm appointmentPic={appointmentPic} isReversed />
            <Footer />
        </div>
    )
}

export default DarkCircle
