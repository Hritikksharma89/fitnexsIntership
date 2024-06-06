import React from 'react'
import AntiDandruffTreatment from './AntiDandruffTreatment'
import AestheticCare from './AestheticCare'
import ScalePeel from './ScalePeel'
import ScalpPurify from './ScalpPurify'
import HairFall from './HairFall'
import HairCare from './HairCare'
import Header from '../layout/header'
import Footer from '../layout/footer'
import WhyHairCare from './WhyHairCare'
import CausesofHairLoss from './CausesofHairLoss'
import TreatmentBenefit from './TreatmentBenefits'
import AntiDandruffAndHairFall from './AntiDandruffAndHairFall'
import appointmentPic from '../../assets/homeImg/AppointmentPic.png'
import BookAppointmentForm from '../common/BookAppointmentForm'

const AntiDandruff = () => {
    return (
        <div>
            <Header />
            <AntiDandruffAndHairFall />
            <AntiDandruffTreatment />
            <AestheticCare />
            <ScalePeel />
            <ScalpPurify />
            <HairFall />
            <HairCare />
            <TreatmentBenefit />
            <WhyHairCare />
            <CausesofHairLoss />
            <BookAppointmentForm appointmentPic={appointmentPic} isReversed />
           <Footer />
        </div>
    )
}

export default AntiDandruff
