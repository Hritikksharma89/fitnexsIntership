import React from 'react'
import Skinrejuvenation from '../../../assets/skinImg/treamentImg/Skinrejuvenation.png'
import Glowingface from '../../../assets/skinImg/treamentImg/Glowingface.png'
import Removelines from '../../../assets/skinImg/treamentImg/removal.png'
import pigmentation from '../../../assets/skinImg/treamentImg/pigmentation.png'
import tightening from '../../../assets/skinImg/treamentImg/tightening.png'
import improvement from '../../../assets/skinImg/treamentImg/acnescar02.png'

import Skinlightening from '../../../assets/skinImg/treamentImg/Skinlightening.png'
import Melasmareduction from '../../../assets/skinImg/treamentImg/Melasmareduction.png'

import softening from '../../../assets/skinImg/treamentImg/softening.png'
import Improveskin from '../../../assets/skinImg/treamentImg/Improveskin.png'
const SkinBenifits = () => {
    const content = [
        {
            id: 1,
            title: 'Skin rejuvenation',
            Image: Skinrejuvenation,
        },
        {
            id: 2,
            title: 'Glowing face ',
            Image: Glowingface,
        },
        {
            id: 3,
            title: 'Remove fine lines',
            Image: Removelines,
        },
        {
            id: 4,
            title: 'Reduce pigmentation',
            Image: pigmentation,
        },
        {
            id: 5,
            title: 'Skin tightening',
            Image: tightening,
        },
        {
            id: 6,
            title: 'Acne scar improvement',
            Image: improvement,
        },
        {
            id: 7,
            title: 'Skin lightening',
            Image: Skinlightening,
        },
        {
            id: 8,
            title: 'Melasma reduction',
            Image: Melasmareduction,
        },
        {
            id: 9,
            title: 'Wrinkle softening',
            Image: softening,
        },
        {
            id: 10,
            title: 'Improve skin quality',
            Image: Improveskin,
        },
    ]
    return (
        <>
            <div className="relative w-full bg-cover bg-no-repeat bg-treatmentBG min-h-[80vh] overflow-hidden">
                <div className="overflow-hidden">
                    <p className="text-center text-[#060606] text-[28px] sm:text-[34px] lg:text-[40px] leading-[30px] lg:leading-[50px] py-4 lg:py-8 font-semibold">
                        Treatment benefits
                    </p>
                    <div className="flex flex-wrap justify-center w-full mx-auto gap-y-4 gap-x-16 py-8">
                        {content.map(({ id, title, Image }) => (
                            <div
                                key={id}
                                className="relative rounded-full bg-black group flex flex-col items-center z-10 justify-center"
                            >
                                <img src={Image} alt="circle items" />
                                <div className="relative py-2 text-center">
                                    <p className="text-[#3e3e3e] text-[1.5rem] leading-[3.125rem] pr-3 mr-2 font-normal z-10 ">
                                        {title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="absolute hidden sm:block top-[12.5rem] lg:top-[15.5rem] py-3 w-[50%] lg:w-[70%] mx-[200px] bg-[#090909] opacity-50"></div>
                    <div className="absolute hidden sm:block top-[516px] lg:top-[565px] py-3 w-[70%] xl:w-[70%] mx-[100px] xl:mx-[200px] bg-[#090909] opacity-50"></div>
                    <div className="absolute hidden sm:block top-[840px] lg:top-[890px] py-3 w-[70%] xl:w-[35%] mx-[100px] xl:mx-[500px] bg-[#090909] opacity-50"></div>
                    <div className="absolute hidden sm:block lg:hidden xl:block top-[1161px] lg:top-[1200px] py-3 w-[70%] xl:w-[35%] mx-[100px] xl:mx-[500px] bg-[#090909] opacity-50"></div>
                    <div className="absolute hidden sm:block top-[1480px] lg:top-[1500px] py-3 w-[70%] xl:w-[35%] mx-[100px] xl:mx-[500px] bg-[#090909] opacity-50"></div>
                </div>
            </div>
        </>
    )
}

export default SkinBenifits
