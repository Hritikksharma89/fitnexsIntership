import React from 'react'
import PicCatalog from '../common/PicCatalog'
import image from '../../assets/darkCircle/aboutDarkCircle.png'

const AboutDarkCircle = () => {
    const description =
        `<div>What are Dark Circles?</div>
        <div>What are the Causes of Dark Circles?</div>
        <div>What are the types of dark circles?</div>
        <div>How can I prevent dark circles?</div>
        <div>What are possible treatments for dark circles?</div>
        <div>When Should I meet a Dermatologist for Dark Circles?</div>
        <div>Why Choose Koza Aesthetic Care for Treatment?</div>`
    return (
        <>
            <div className="my-2 md:my-5">
                <div className=" py-2 text-[28px] md:text-[34px] lg:text-[40px] leading-[40px] lg:leading-[50px] font-semibold text-center">
                    Know all about dark circle & treatments
                </div>
                <div className="py-2 md:py-5">
                    <PicCatalog
                        img={image}
                        titleNotNeeded
                        secondTitleNotNeeded
                        description={description}
                        largeGapY
                        isReversed
                    />
                </div>
            </div>
        </>
    )
}

export default AboutDarkCircle
