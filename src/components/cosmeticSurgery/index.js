import React from 'react'
import CosmeticSurgery from './CosmeticSurgery'
import Liposuction from './Liposuction'
import BenefitsOfLiposuction from './BenefitsOfLiposuction'
import LiposuctionCandidate from './LiposuctionCandidate'
import Header from '../layout/header'
import Footer from '../layout/footer'
import Rhinoplasty from './Rhinoplasty '
import BenefitOfRhinoplasty from './BenefitOfRhinoplasty'
import CandidateForRhinoplasty from './CandidateForRhinoplasty'
import BreastImplantation from './BreastImplantation'
import BenefitsofBreastImplantation from './BenefitsofBreastImplantation'
import CandidateOfBreastImplantation from './CandidateOfBreastImplantation'
import MastopexyBreastLift from './MastopexyBreastLift'
import BenefitsOfMastopexyBreastLift from './BenefitsOfMastopexyBreastLift'
import CandidateForMastopexy from './CandidateForMastopexy'
import Vaginoplasty from './Vaginoplasty'
import BenifitOfVaginoplasty from './BenefitOfVaginoplasty'
import CandidateForVaginoplasty from './CandidateForVaginoplasty'
import Gynecomastia from './Gynecomastia'
import BnenefitOfGynecomastia from './BnenefitOfGynecomastia'
import CandidateOfGynecomastia from './CandidateOfGynecomastia'
import Blephropasty from './Blephropasty'
import BenefitsOfBlepharoplasty from './BenefitsOfBlepharoplasty'
import CandidateforBlepharoplasty from './CandidateforBlepharoplasty'
import book from '../../assets/homeImg/AppointmentPic.png'
import BodyContours from './BodyContours'
import BookAppointmentForm from '../common/BookAppointmentForm'

const Surgery = () => {
    return (
        <div>
            <Header />
            <CosmeticSurgery />
            <BodyContours />
            <Liposuction />
            <BenefitsOfLiposuction />
            <LiposuctionCandidate />
            <Rhinoplasty />
            <BenefitOfRhinoplasty />
            <CandidateForRhinoplasty />
            <BreastImplantation />
            <BenefitsofBreastImplantation />
            <CandidateOfBreastImplantation />
            <MastopexyBreastLift />
            <BenefitsOfMastopexyBreastLift />
            <CandidateForMastopexy />
            <Vaginoplasty />
            <BenifitOfVaginoplasty />
            <CandidateForVaginoplasty />
            <Gynecomastia />
            <BnenefitOfGynecomastia />
            <CandidateOfGynecomastia />
            <Blephropasty />
            <BenefitsOfBlepharoplasty />
            <CandidateforBlepharoplasty />
            <BookAppointmentForm appointmentPic={book} isReversed />
            <Footer />
        </div>
    )
}

export default Surgery
