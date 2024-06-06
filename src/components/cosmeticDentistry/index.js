import React from 'react'
import CosmeticDentistry from './CosmeticDentistry'
import Header from '../layout/header'
import Footer from '../layout/footer'
import IntroductionToTeethWhite from './IntroductionToTeethWhite'
import TeethWhitening from './TeethWhitening'
import DentalVeneers from './DentalVeneers'
import BenefitOfDentelVeneers from './BenefitOfDentelVeneers'
import DentalImplants from './DentalImplants'
import BenefitOfDentalImplants from './BenefitOfDentalImplants'
import ConsiderDentalImplants from './ConsiderDentalImplants'
import DentalAligner from './DentalAligner'
import BenefitOfDentalAligner from './BenefitOfDentalAligner'
import ConsiderDentalAligner from './ConsiderDentalAligner'
import Gingivoplasty from './Gingivoplasty'
import BenefitsOfGingivoplasty from './BenefitsofGingivoplasty'
import ConsiderGingivoplasty from './ConsiderGingivoplasty'
import DentalJewellery from './DentalJewellery'
import BenefitOfDentalJewellery from './BenefitOfDentalJewellery'
import ConsiderDentalJewellery from './ConsiderDentalJewellery'
import ConsiderTeethWhitening from './considerTeethWhitening'
import BookAppointmentForm from '../common/BookAppointmentForm'
import book from '../../assets/homeImg/AppointmentPic.png'

const Dentistry = () => {
    return (
        <div className="bg-white">
            <Header />
            <CosmeticDentistry />
            <IntroductionToTeethWhite />
            <TeethWhitening />
            <ConsiderTeethWhitening />
            <DentalVeneers />
            <BenefitOfDentelVeneers />
            <DentalImplants />
            <BenefitOfDentalImplants />
            <ConsiderDentalImplants />
            <DentalAligner />
            <BenefitOfDentalAligner />
            <ConsiderDentalAligner />
            <Gingivoplasty />
            <BenefitsOfGingivoplasty />
            <ConsiderGingivoplasty />
            <DentalJewellery />
            <BenefitOfDentalJewellery />
            <ConsiderDentalJewellery />
            <BookAppointmentForm isReversed appointmentPic={book} />
            <Footer />
        </div>
    )
}

export default Dentistry
