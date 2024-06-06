import React from 'react'
import Youthful from '../../../assets/skinImg/treamentImg/Youthful.png'
import Nonsurgica from '../../../assets/skinImg/treamentImg/Nonsurgical.png'
import removal from '../../../assets/skinImg/treamentImg/removal.png'
import Eliminate from '../../../assets/skinImg/treamentImg/Eliminate.png'
import procedure from '../../../assets/skinImg/treamentImg/Safe.png'
import Rejuvenation from '../../../assets/skinImg/treamentImg/Rejuvenation.png'

const AntiAgeingSkin = () => {
    const content = [
        {
            id: 1,
            title: 'Youthful appearance',
            Image: Youthful,
        },
        {
            id: 2,
            title: 'Nonsurgical procedure',
            Image: Nonsurgica,
        },
        {
            id: 3,
            title: 'Fine lines removal',
            Image: removal,
        },
        {
            id: 4,
            title: 'Eliminate dark circles',
            Image: Eliminate,
        },
        {
            id: 5,
            title: 'Safe procedure',
            Image: procedure,
        },
        {
            id: 6,
            title: 'Skin rejuvenation',
            Image: Rejuvenation,
        },
    ]
    return (
        <>
            <div className="relative w-full bg-cover bg-no-repeat bg-treatmentBG min-h-[80vh] overflow-hidden">
                <div>
                    <p
                        className="text-center text-[28px] sm:text-[34px] lg:text-[40px] leading-[30px]  
                   lg:leading-[50px] py-4 lg:py-8 font-semibold "
                    >
                        Treatment benefits
                    </p>
                    <div className="flex flex-wrap justify-center w-full mx-auto gap-y-4 gap-x-16 ">
                        {content.map(({ id, title, Image }) => (
                            <div
                                key={id}
                                className="relative rounded-full bg-black group flex flex-col items-center z-10 justify-center"
                            >
                                <img src={Image} alt="circle items" />
                                <div className="relative z-30 py-2 text-center">
                                    <p className="text-[1.5rem] leading-[3.125rem] pr-3 mr-2 font-normal z-10 ">
                                        {title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="absolute hidden sm:block top-[10rem] lg:top-[13.5rem] py-3 w-[50%] lg:w-[70%] mx-[200px] bg-[#090909] opacity-50"></div>
                    <div className="absolute hidden sm:block top-[480px] lg:top-[540px] py-3 w-[70%] xl:w-[31%] mx-[100px] xl:mx-[480px] bg-[#090909] rounded-md opacity-50"></div>
                    {/* <div className="absolute hidden sm:block md:top-[51.5rem] py-3 w-[40%] lg:w-[60%] mx-[280px] bg-[#090909] opacity-50"></div> */}
                    <div className="absolute hidden sm:block lg:hidden top-[50.5rem] lg:top-[51.6rem] py-3 w-[40%] mx-[300px] bg-[#090909] opacity-50"></div>
                    <div className="absolute hidden sm:block lg:hidden md:top-[92rem] py-3 w-[60%] mx-[300px] bg-[#090909] opacity-50"></div>
                </div>
            </div>
        </>
    )
}

export default AntiAgeingSkin
