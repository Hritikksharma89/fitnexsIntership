import React from 'react'
import CommonHeading from '../../common/commonHeading'
import bgimg from '../../../assets/skinImg/antiageingimg/bg_antiagening.png'

const AntiAgeingIntro = () => {
    return (
        <>
            {/* <div className="relative top-0">
                <div className="bg-Antiageingbg bg-center md:bg-cover h-[28rem] sm:h-[40rem] sm:min-w-full brightness-50 "></div>
                <div className="absolute top-2 sm:top-[20%] min-w-full ">
                    <CommonHeading
                        title="Anti Ageing"
                        description="Young & Rejuvenated Skin not a dream anymore with best skin clinic in Bangalore"
                    />
                </div>
            </div> */}

            <div className="relative w-full min-h-full ">
                <div className=" h-[70vh] sm:h-[70vh] md:h-[70vh] lg:h-[70vh] xl:h-full  min-h-full">
                    <img
                        src={bgimg}
                        alt="background"
                        className="min-w-full object-cover h-full "
                    />
                </div>
                <div className="absolute inset-0 bg-[#353535]/40 h-[70  vh] sm:h-full  min-h-full" />
                <CommonHeading
                    title="Anti Ageing"
                    description="Young & Rejuvenated Skin not a dream anymore with best skin clinic in Bangalore"
                />
            </div>
        </>
    )
}

export default AntiAgeingIntro
