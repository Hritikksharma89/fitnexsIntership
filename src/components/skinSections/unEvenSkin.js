import React from 'react'
import CommonHeading from '../common/commonHeading.js'
import bgSkin from '../../assets/skinImg/Skinbackground.png'

const UnEvenSkin = () => {
    return (
        <div className="relative w-full min-h-full ">
            <div className=" h-[85vh] sm:h-[80vh] md:h-[75vh] lg:h-[85vh] xl:h-full  min-h-full">
                <img
                    src={bgSkin}
                    alt="background"
                    className="min-w-full object-cover h-full "
                />
            </div>
            <div className="absolute inset-0 bg-[#353535]/40 h-[85vh] sm:h-full  min-h-full brightness-50" />
            <CommonHeading
                title="We care for your uneven skin tone and pigmentation"
                description="At koza aesthetic care we care for your uneven skin tone and pigmentation,
             We treat all types of skin related issues and provide a perfect solution for your skin problems. "
            />
        </div>
    )
}
export default UnEvenSkin
