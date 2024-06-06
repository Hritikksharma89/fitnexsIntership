import React from 'react'
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import BodyCompositionAnalysis from './BodyCompositionAnalysis'
import BodyToning from './BodyToning'
import WeightLossGain from './WeightLossGain'
import WhatWeDo from './WhatWeDo'
import WhatWeOffer from './WhatWeOffer'
import BodyFirming from './BodyFirming'
import WeightProgram from './WeightProgram'
import WhyChooseKoza from './WhyChooseKoza'
import Consultation from './Consultation'

const WeightSection = () => {
    return (
        <div className="">
            <Header />
            <WeightLossGain />
            <WhatWeDo />
            <WhatWeOffer />
            <BodyFirming />
            <BodyToning />
            <BodyCompositionAnalysis />
            <WeightProgram />
            <WhyChooseKoza />
            <Consultation />
            <Footer />
        </div>
    )
}
export default WeightSection
