import React from 'react'
import WhatWeDoImg from '../../../assets/weightMangement/whatWeDoImg.svg'

const WhatWeDo = () => {
    return (
        <div className="py-10">
            <div className="bg-WhatWeDoBG h-auto min-w-full bg-no-repeat bg-cover bg-center grid sm:grid-cols-2 justify-center items-center px-2 sm:pl-[2rem] lg:pl-[4rem] pt-[1rem] sm:pt-[6rem] pb-[2rem] sm:pb-[10rem]">
                <div className="grid gap-y-8 content-start text-center sm:text-start justify-items-center md:py-16 p-4">
                    <p className="font-semibold text-[2.5rem] leading-[3.125rem] sm:place-self-start">
                        What We Do?
                    </p>
                    <p className="font-normal text-[0.825rem] md:text-[1.125rem] leading-[1.8125rem]">
                        At KOZA Aesthetic Care, we are dedicated to helping you
                        achieve your weight loss goals through a holistic
                        approach that combines nutritional guidance,
                        cutting-edge weight loss machines and lifestyle
                        correction. We understand that losing weight is not just
                        about shedding kgs, it's about achieving sustainable,
                        long-term results while enhancing your overall
                        well-being.
                    </p>
                    <p className="font-normal text-[0.825rem] md:text-[1.125rem] leading-[1.8125rem]">
                        We provide a transformative experience that helps people
                        achieve and maintain an optimal state of health
                        integrative method available to achieve an optimal state
                        of health and wellbeing.
                    </p>
                </div>
                <div className="grid justify-center content-start p-4">
                    <img src={WhatWeDoImg} alt="contentImg" />
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo
