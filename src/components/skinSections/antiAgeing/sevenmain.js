import React from 'react'
import Smoking from '../../../assets/skinImg/treamentImg/Smoking.png'
import Overexposure from '../../../assets/skinImg/treamentImg/Overexposure.png'
import Stress from '../../../assets/skinImg/treamentImg/Stress.png'
import Lacksleep from '../../../assets/skinImg/treamentImg/Lacksleep.png'
import Coldweather from '../../../assets/skinImg/treamentImg/Coldweather.png'
import Consumption from '../../../assets/skinImg/treamentImg/Consumption.png'
import Lackxerceise from '../../../assets/skinImg/treamentImg/Lackxerceise.png'
import PicCatalog from '../../common/PicCatalog'
import Significant from '../../../assets/skinImg/antiageingimg/Significant.png'

const content = [
    {
        id: 1,
        title: 'Smoking',
        Image: Smoking,
    },
    {
        id: 2,
        title: 'Over-exposure to the sun',
        Image: Overexposure,
    },
    {
        id: 3,
        title: 'Stress',
        Image: Stress,
    },
    {
        id: 4,
        title: 'Lack of sleep ',
        Image: Lacksleep,
    },

    {
        id: 5,
        title: 'Cold weather',
        Image: Coldweather,
    },
    {
        id: 6,
        title: 'Alcohol consumption',
        Image: Consumption,
    },
    {
        id: 7,
        title: 'Lack of exercise',
        Image: Lackxerceise,
    },
]

const Sevenmain = () => {
    return (
        <>
            <div className="my-16 relative w-full h-full bg-cover bg-no-repeat bg-treatmentBG min-h-[95vh] overflow-hidden">
                <div className="py-4">
                    <p className="w-[80%] mx-auto text-center text-[28px] sm:text-[34px] lg:text-[40px] lg:leading-[50px] py-4 lg:py-8 font-semibold">
                        The seven main factors that age skin faster comes down
                        to
                    </p>
                    <div className="flex flex-wrap justify-center gap-y-4 lg:gap-y-16 mx-auto py-4 gap-x-7 xl:w-[95%]">
                        {content.map(({ id, title, Image }) => (
                            <div
                                key={id}
                                className="relative rounded-full z-10 lg:w-[30%] xl:w-[20%]"
                            >
                                <div className="flex justify-center">
                                    <img
                                        src={Image}
                                        alt={title}
                                        className="flex justify-center"
                                    />
                                </div>
                                <div className="relative z-30">
                                    <p className="text-[#3e3e3e] text-center m-auto text-[1.5rem] font-normal z-50">
                                        {title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="absolute hidden sm:block top-[16.6rem] lg:top-[18.5rem] xl:top-[18.1rem] 2xl:top-[15.4rem] py-3 w-[50%] lg:w-[60%] mx-[140px] xl:mx-[285px] bg-[#090909] opacity-50"></div>
                    <div className="absolute hidden sm:block top-[558px] lg:top-[634px] xl:top-[76.5%] 2xl:top-[622px] py-3 w-[50%] lg:w-[70%] xl:w-[57%] mx-[135px] xl:mx-[320px] bg-[#090909] opacity-50"></div>
                    <div className="absolute hidden sm:block lg:hidden top-[53.2rem] lg:top-[51.6rem] py-3 w-[40%] mx-[300px] bg-[#090909] opacity-50"></div>
                </div>
            </div>
            <div className="py-2 md:my-16">
                <PicCatalog
                    img={Significant}
                    isReversed
                    title="What can we do about it?"
                    secondTitleNotNeeded
                    description="<div>Significant advances in technology mean just about any anti-ageing skin concern can be treated. </div> <div> At Koza, we offer a comprehensive range of treatments which offers an effective solution to the all-visible signs of ageing, such as pigmentation, broken capillaries and fine lines.</div>"
                />
            </div>
        </>
    )
}

export default Sevenmain
