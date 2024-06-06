import React from 'react'
import tightening from '../../../assets/skinImg/treamentImg/tightening02.png'
import lifting from '../../../assets/skinImg/treamentImg/lifting02.png'
import young from '../../../assets/skinImg/treamentImg/young02.png'
import texture from '../../../assets/skinImg/treamentImg/texture02.png'
import AcneScar from '../../../assets/skinImg/treamentImg/acnescar02.png'
import rejuvenation from '../../../assets/skinImg/treamentImg/rejuvenation02.png'
import marks from '../../../assets/skinImg/treamentImg/Stretch02.png'
import PicCatalog from '../../common/PicCatalog'
import Vampire from '../../../assets/skinImg/antiageingimg/Vampire.png'

const TighteningBenifits = () => {
    const content = [
        {
            id: 1,
            title: 'Skin tightening',
            Image: tightening,
        },
        {
            id: 2,
            title: 'Skin lifting',
            Image: lifting,
        },
        {
            id: 3,
            title: 'Young look',
            Image: young,
        },
        {
            id: 4,
            title: 'Texture correction',
            Image: texture,
        },
        {
            id: 5,
            title: 'Acne scar skin glow',
            Image: AcneScar,
        },
        {
            id: 6,
            title: 'Skin rejuvenation',
            Image: rejuvenation,
        },
        {
            id: 7,
            title: 'Stretch marks',
            Image: marks,
        },
    ]
    return (
        <>
            <div className="relative w-full bg-cover bg-no-repeat bg-treatmentBG min-h-[80vh]">
                <div>
                    <p className="text-center text-[28px] sm:text-[34px] lg:text-[40px] leading-[30px] lg:leading-[50px] py-4 lg:py-8 font-semibold">
                        Treatment benefits
                    </p>
                    <div className="flex flex-wrap justify-center w-full mx-auto gap-y-4 gap-x-16 py-8">
                        {content.map(({ id, title, Image }) => (
                            <div
                                key={id}
                                className="relative rounded-full bg-black group flex flex-col items-center z-10 justify-center"
                            >
                                <img src={Image} alt="circle items" />
                                <div className="relative z-30 py-2 text-center">
                                    <p className="text-[1.5rem] leading-[3.125rem] pr-3 mr-2 font-normal ">
                                        {title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="absolute hidden sm:block top-[12rem] lg:top-[15.5rem] py-3 w-[50%] lg:w-[70%] mx-[200px] bg-[#090909] opacity-50"></div>
                    <div className="absolute hidden sm:block top-[515px] lg:top-[565px] py-3 w-[70%] xl:w-[40%] mx-[100px] xl:mx-[420px] bg-[#090909] opacity-50"></div>
                    <div className="absolute hidden sm:block lg:hidden top-[52.5rem] lg:top-[51.6rem] py-3 w-[40%] mx-[300px] bg-[#090909] opacity-50"></div>
                </div>
            </div>
            <div>
                <p className="text-center py-4 md:py-10 text-[28px] sm:text-[33px] lg:text-[40px] leading-[30px] font-semibold md:leading-[50px]">
                    rejuvenating therapy – Vampire facial
                </p>
                <div className="py-2">
                    <PicCatalog
                        img={Vampire}
                        isReversed
                        titleNotNeeded
                        second_title="What it is?"
                        description="Imagine your own blood giving a new life to your facial skin! Vampire facial therapy is the most natural method to rejuvenate the skin, stop the signs of ageing, treat scars, pigmentation and improve the texture of skin. Growth factors extracted from individual’s own blood are used to promote collagen formation and rejuvenation of the skin."
                    />
                </div>
            </div>
        </>
    )
}

export default TighteningBenifits
