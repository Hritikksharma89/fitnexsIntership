import React from 'react'
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import AntiAgeingIntro from './AntiAgeingIntro'
import SkinAgeing from './skinAgeing'
import BotoxCosmetic from './BotoxCosmetic'
import BotaxFDA from './BotaxFDA'
import WhyBotox from './WhyBotox'
import BotoxBag from './BotoxBag'
import AntiAgeingSkin from './AntiAgeingSkin'
import ThreadLift from './ThreadLift'
import TighteningBenifits from './TighteningBenifits'
import Enzymes from './Enzymes'
import SkinantiCare from './SkinantiCare'
import SkinBenifits from './skinBenifits'
import Brightening from './Brightening'
import TreamentSkinThree from './TreamentSkinThree'
import AntiWrinkle from './AntiWrinkle'
import BookAppointmentForm from '../../common/BookAppointmentForm'
import appointmentPic from '../../../assets/homeImg/AppointmentPic.png'
import AgeingSkin from './AgeingSkin'
import Sevenmain from './sevenmain'
import TreamentBenifitsfour from './treamentBenifitsfour'


const AntiAgeingPage = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col gap-y-[3rem] md:gap-y-[1rem]">
                <AntiAgeingIntro />
                <SkinantiCare />
                <SkinAgeing />
                <BotoxCosmetic />
                <BotaxFDA />
                <WhyBotox />
                <BotoxBag />
                <AntiAgeingSkin />
                <ThreadLift />
                <TighteningBenifits />
                <Enzymes />
                <SkinBenifits />
                <Brightening />
                <TreamentSkinThree />
                <AntiWrinkle />
                {/* treamentBenifitsfour */}
                <TreamentBenifitsfour />
                <AgeingSkin />
                <Sevenmain />
                <BookAppointmentForm
                    appointmentPic={appointmentPic}
                    isReversed
                />
            </div>
            <Footer />
        </>
    )
}

export default AntiAgeingPage
