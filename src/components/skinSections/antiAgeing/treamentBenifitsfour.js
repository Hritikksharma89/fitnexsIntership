import React from 'react'
import SkinTightening from '../../../assets/skinImg/treamentImg/SkinTightening.png'
import WrinkleSmoothening from '../../../assets/skinImg/treamentImg/WrinkleSmoothening.png'
import Youthfullook from '../../../assets/skinImg/treamentImg/Youthfullook.png'
import Quickresults from '../../../assets/skinImg/treamentImg/Quickresults.png'
import Flawlesskin from '../../../assets/skinImg/treamentImg/Flawlesskin.png'
import Regulated from '../../../assets/skinImg/treamentImg/Regulated.png'

import Glowingskin from '../../../assets/skinImg/treamentImg/Glowingskin.png'
import Antiageing from '../../../assets/skinImg/treamentImg/Antiageing.png'

import Improvedexpressions from '../../../assets/skinImg/treamentImg/Improvedexpressions.png'
import Boostedconfidence from '../../../assets/skinImg/treamentImg/Boostedconfidence.png'

const TreamentBenifitsfour = () => {
    const content = [
        {
            id: 1,
            title: 'Skin tightening',
            Image: SkinTightening,
        },
        {
            id: 2,
            title: 'Wrinkle smoothening',
            Image: WrinkleSmoothening,
        },
        {
            id: 3,
            title: 'Youthful look',
            Image: Youthfullook,
        },
        {
            id: 4,
            title: 'Quick results',
            Image: Quickresults,
        },
        {
            id: 5,
            title: 'Flawless skin',
            Image: Flawlesskin,
        },
        {
            id: 6,
            title: 'Regulated sweat secretion',
            Image: Regulated,
        },
        {
            id: 7,
            title: 'Glowing skin',
            Image: Glowingskin,
        },
        {
            id: 8,
            title: 'Anti-ageing',
            Image: Antiageing,
        },
        {
            id: 9,
            title: 'Improved expressions',
            Image: Improvedexpressions,
        },
        {
            id: 10,
            title: 'Boosted confidence',
            Image: Boostedconfidence,
        },
    ]
    return (
        <>
            <div className="relative w-full bg-cover bg-no-repeat bg-treatmentBG min-h-[80vh] overflow-hidden">
                <div className="overflow-hidden">
                    <p className="text-center text-[28px] sm:text-[34px] lg:text-[40px] lg:leading-[50px] py-4 lg:py-8 font-semibold">
                        Treatment benefits
                    </p>
                    <div className="flex flex-wrap justify-center w-full mx-auto gap-y-4 gap-x-16 py-8">
                        {content.map(({ id, title, Image }) => (
                            <div
                                key={id}
                                className="relative rounded-full bg-black group flex flex-col items-center z-10 justify-center"
                            >
                                <img src={Image} alt="circle items" />
                                <div className="relative z-10 py-2 text-center">
                                    <p className="text-[1.5rem] leading-[3.125rem] pr-3 mr-2 font-normal z-50 text-[#3e3e3e]">
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

export default TreamentBenifitsfour
