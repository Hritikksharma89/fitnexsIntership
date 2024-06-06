import React from 'react'
import image from '../../assets/hair/hairTransplant.png'
import CommonHeading from '../common/commonHeading'

const HairTransplation = () => {
    return (
        <>
            <div className="relative w-full min-h-full ">
                <div className=" h-[85vh] sm:h-[80vh] md:h-[75vh] lg:h-[82vh] xl:h-full  min-h-full">
                    <img
                        src={image}
                        alt="background"
                        className="min-w-full object-cover  h-full "
                    />
                </div>
                <div className="absolute inset-0 bg-[#353535]/40 h-[85vh] sm:h-full  min-h-full" />
                <CommonHeading
                    title="Hair Transplantation"
                    Subtitle="“Your Path to Strong & Silky Hair, hair growth”"
                    description="At Koza Aestheric Care, we offer a range of Hair treatments to stop your hair fall."
                />
            </div>
        </>
    )
}

export default HairTransplation