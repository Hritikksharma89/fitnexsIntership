import React from 'react'
// import bgimg from "../../assets/skinImg/treamentImg/bgtreament.png";
import HairFall from '../../assets/hair/Component 25.png'
import baldness from '../../assets/hair/Component 26.png'
import Alopecia from '../../assets/hair/Component 27.png'
import Nonsurgical from '../../assets/hair/Component 28.png'
import RiskFree from '../../assets/hair/Component 30.png'
import NoSideEffect from '../../assets/hair/Component 31.png'
import Confidence from '../../assets/hair/Component 32.png'
import Esteem from '../../assets/hair/Component 33.png'
import Oriented from '../../assets/hair/Component 34.png'
import HairDensity from '../../assets/hair/Component 38.png'

const TreatmentBenefit = () => {
    const content = [
        {
            id: 1,
            title: 'Stop hair fall',
            Image: HairFall,
        },
        {
            id: 2,
            title: 'Prevent baldness',
            Image: baldness,
        },
        {
            id: 3,
            title: 'Cure alopecia',
            Image: Alopecia,
        },
        {
            id: 4,
            title: 'Nonsurgical treatment',
            Image: Nonsurgical,
        },
        {
            id: 5,
            title: 'Risk free',
            Image: RiskFree,
        },
        {
            id: 6,
            title: 'No side effect',
            Image: NoSideEffect,
        },
        {
            id: 7,
            title: 'Bring back confidence',
            Image: Confidence,
        },
        {
            id: 8,
            title: 'Self esteem',
            Image: Esteem,
        },
        {
            id: 9,
            title: 'Result oriented',
            Image: Oriented,
        },
        {
            id: 10,
            title: 'Increase hair density',
            Image: HairDensity,
        },
    ]

    return (
        <>
            <div className="relative w-full bg-cover bg-no-repeat bg-treatmentBG min-h-[100vh]">
                <div>
                    <p className="text-center text-[28px] md:text-[34px] lg:text-[2.5rem] leading-[3.125rem] py-6 font-semibold">
                        Treatment Benefits
                    </p>
                    <div className="flex flex-wrap justify-center w-full mx-auto gap-y-4 gap-x-16">
                        {content.map(({ id, title, Image }) => (
                            <div
                                key={id}
                                className="relative rounded-full bg-black group flex flex-col items-center z-10 justify-center"
                            >
                                <img src={Image} alt="circle items" />
                                <div className="relative z-30 py-2 text-center">
                                    <p className="text-[1.5rem] leading-[3.125rem] pr-3 mr-2 font-normal z-50 ">
                                        {title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* <div className=" absolute block sm:hidden top-[100px] left-[44%] px-3 h-[3100px] bg-[#090909] -z-20"></div> */}

                    <div className="absolute hidden sm:block md:top-[12.43rem] py-3 w-[50%] lg:w-[70%] mx-[200px] bg-[#090909] opacity-50"></div>
                    <div className="absolute hidden sm:block md:top-[518px] py-3 w-[50%] lg:w-[70%] mx-[200px] bg-[#090909]  opacity-50"></div>
                    <div className="absolute hidden sm:block md:top-[52.5rem] py-3 w-[70%] xl:w-[30%] mx-[100px] xl:mx-[450px] bg-[#090909] opacity-50"></div>
                    <div className="absolute hidden sm:block lg:hidden top-[72.5rem] lg:top-[71.6rem] py-3 w-[40%] mx-[300px] bg-[#090909] opacity-50"></div>
                    <div className="absolute hidden sm:block lg:hidden top-[93rem] lg:top-[92rem] py-3 w-[40%] mx-[300px] bg-[#090909] opacity-50"></div>
                </div>
            </div>
        </>
    )
}
export default TreatmentBenefit
