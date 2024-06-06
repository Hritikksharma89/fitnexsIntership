import React from 'react'
import Header from '../layout/header'
import Footer from '../layout/footer'
import MoreAbout from './moreAbout'
import MediFacial from './mediFacial'
import WeProperly from './weProperly'
import AcneScarsBg from './acneScars'
import MicroDerma from './microderma'
import HowisIts from './howisIts'
import TreatmentBenefits from '../skinSections/treament'
import Dermapen from './dermaPen'
import PigmentSkin from './Pigments'
import PrfThreeSection from './PRFthreeS'
import Dermatologists from './dermatologists'
import AskedQuestion from './AcneFrequentlyAskedQuestion'
import WhoShouldTakeThis from './WhoShouldTakeThis'
import BenefitsOfMicroneedlingPRP from './BenefitsOfMicroneedlingPRP'
import HowDarmaRollerDone from './HowDarmaRollerDone'
import BenefitsofDermaPen from './BenefitsofDermaPen'
import WhyToUndergoDermapenTreatment from './WhyToUndergoDermapenTreatment'
import ProcessOfDermaFiller from './ProcessOfDermaFiller'
import DermalFillersForAcneScars from './DermalFillersForAcneScars'
import MicroneedlingPrp from './MicroneedlingPrp'
import BookAppointmentForm from '../common/BookAppointmentForm'
import book from '../../assets/homeImg/AppointmentPic.png'

const Acnescar = () => {
    return (
        <>
            <div className="bg-white">
                <Header />
                <AcneScarsBg />
                <MoreAbout />
                <MediFacial />
                <WeProperly />
                <MicroDerma />
                <HowisIts />
                <TreatmentBenefits />
                <Dermatologists />
                <Dermapen />

                {/* <PigmentSkin /> */}
                {/* <PrfThreeSection /> */}
                {/* <Dermapen /> */}
                {/* <PigmentSkin /> */}
                {/* <PrfThreeSection /> */}
                {/* <WhyToUndergoDermapenTreatment /> */}

                <BenefitsofDermaPen />
                <HowDarmaRollerDone />
                <MicroneedlingPrp />
                <BenefitsOfMicroneedlingPRP />
                <WhoShouldTakeThis />
                <DermalFillersForAcneScars />
                <ProcessOfDermaFiller />
                <AskedQuestion />
                <BookAppointmentForm isReversed appointmentPic={book} />

                <Footer />
            </div>
        </>
    )
}
export default Acnescar
