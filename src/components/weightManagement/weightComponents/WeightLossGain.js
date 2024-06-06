import React from 'react'
import CommonHeading from '../../common/commonHeading'
import bgimg from '../../../assets/weightMangement/weightLossGainBG.png'

const WeightLossGain = () => {
    return (
        <>
            <div className="relative w-full min-h-full ">
                <div className=" h-[70vh] sm:h-[70vh] md:h-[70vh] lg:h-[70vh] xl:h-full  min-h-full">
                    <img
                        src={bgimg}
                        alt="background"
                        className="min-w-full object-cover h-full "
                    />
                </div>
                {/* <div className="absolute inset-0 bg-[#353535]/40 h-[85vh] sm:h-full  min-h-full" /> */}
                <CommonHeading
                    title="Weight Management"
                    description="Welcome to KOZA Aesthetic Care – Your Path to a Healthier, Happier You! Are you ready to embark on a transformative journey towards a slimmer, healthier you?"
                />
            </div>
        </>
    )
}

export default WeightLossGain
