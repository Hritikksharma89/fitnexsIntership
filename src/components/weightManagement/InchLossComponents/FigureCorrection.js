import React from 'react'
import CommonHeading from '../../common/commonHeading'
import bgimg from '../../../assets/weightMangement/bgImgs/bgInch.png'

const FigureCorrection = () => {
    return (
        <>
            <div className="relative w-full min-h-full ">
                <div className=" h-[85vh] sm:h-[80vh] md:h-[75vh] lg:h-[82vh] xl:h-full  min-h-full">
                    <img
                        src={bgimg}
                        alt="background"
                        className="min-w-full object-cover  h-full "
                    />
                </div>
                <CommonHeading
                    title="Inch loss/ Figure correction"
                    description="State of the Art New Age Technology based programs for Your Journey to Inch Loss and Body Sculpting"
                />
            </div>

            <div className="bg-gradient-to-r from-[#632A3D] to-[#350340] text-[#fff] mt-6 md:mt-16 py-6 md:py-12">
                <div className="w-[80%] lg:w-[90%] mx-auto md:py-6">
                    <p className="text-[15px] sm:text-[18px] md:text-[24px] py-2 sm:py-5 text-center md:leading-[25px] lg:leading-[36px]">
                        At KOZA Aesthetic Care, we offer a range of advanced inch loss and body sculpting treatments designed to help
                        you achieve your desired body contours and shed those extra inches. Our innovative therapies are tailored to
                        target stubborn fat, cellulite and provide overall body rejuvenation.
                    </p>
                </div>
            </div>
        </>
    )
}

export default FigureCorrection
