import React from 'react'
import Header from '../layout/header'
import Footer from '../layout/footer'
import AskedQuestion from './askedQuestion'
import TreatmentBenefits from './treament'
import QVampire from './qVampire'
import Range from './range'
import UnEvenSkin from './unEvenSkin'
import SkinHairServices from './SkinHairServices'
import SkinFacial from './skinFacial'
import Benefits from './benefitSection'
import Concerns from './concerns'
import ChemicalPeel from './chemicalPeel'
import KozaAesthetics from './kozaAesthetics'
import Causes from './Causes'
import SimpleSlider from '../homeLanding/testimonial'
import BookAppointmentForm from '../common/BookAppointmentForm'
import book from '../../assets/homeImg/AppointmentPic.png'

const SkinSection = () => {
    return (
        <div className="">
            <Header />
            <UnEvenSkin />
            <div>
                <Causes />
                <SkinHairServices />
                <Range />
                <Benefits />
                <ChemicalPeel />
                <TreatmentBenefits />
                <QVampire />
                <SkinFacial />
                <Concerns />
                <KozaAesthetics />
                <SimpleSlider />
                <AskedQuestion colorReversal hideBlackBG />
                <BookAppointmentForm isReversed appointmentPic={book} />
            </div>
            <Footer />
        </div>
    )
}
export default SkinSection
