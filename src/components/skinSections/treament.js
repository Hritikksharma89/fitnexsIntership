import React from 'react'
// import bgimg from "../../assets/skinImg/treamentImg/bgtreament.png";
import Skin from '../../assets/skinImg/treamentImg/SkinLightning.png'
import Tan from '../../assets/skinImg/treamentImg/TanRemoval.png'
import Spots from '../../assets/skinImg/treamentImg/RemoveSpots.png'
import Blemishes from '../../assets/skinImg/treamentImg/TreatBlemishes.png'
import Oily from '../../assets/skinImg/treamentImg/OilySkin.png'
import scars from '../../assets/skinImg/treamentImg/TreatSkin.png'
import Wrinkles from '../../assets/skinImg/treamentImg/SoftenWrinkles.png'
import Circle from '../../assets/skinImg/treamentImg/DarkCircle.png'
import Rosacea from '../../assets/skinImg/treamentImg/FaceRosacea.png'
import Truncal from '../../assets/skinImg/treamentImg/TruncalAcne.png'
import Melasma from '../../assets/skinImg/treamentImg/Melasma.png'

const TreatmentBenefits = () => {
    const content = [
        {
            id: 1,
            title: 'Skin Lighting',
            Image: Skin,
        },
        {
            id: 2,
            title: ' Tan Removal',
            Image: Tan,
        },
        {
            id: 3,
            title: ' Remove Spots',
            Image: Spots,
        },
        {
            id: 4,
            title: 'Treat Blemishes',
            Image: Blemishes,
        },
        {
            id: 5,
            title: ' Treat Oily Skin',
            Image: Oily,
        },
        {
            id: 6,
            title: ' Improve scars',
            Image: scars,
        },
        {
            id: 7,
            title: 'Soften Wrinkles',
            Image: Wrinkles,
        },
        {
            id: 8,
            title: ' Cure Dark Circle',
            Image: Circle,
        },
        {
            id: 9,
            title: 'Face Rosacea',
            Image: Rosacea,
        },
        {
            id: 10,
            title: 'Cure Truncal Acne',
            Image: Truncal,
        },
        {
            id: 11,
            title: 'Melasma Treatment',
            Image: Melasma,
        },
    ]

    return (
        <>
            <div className="relative w-full bg-cover bg-no-repeat bg-treatmentBG min-h-[100vh]  ">
                <div>
                    <p className="font-semibold text-center text-[27px] md:text-[33px] lg:text-[40px] leading-[33px] md:leading-[50px] py-4 text-[#060606]">
                        Treatment benefits
                    </p>
                    <div className="flex flex-wrap justify-center w-full mx-auto gap-y-4 gap-x-16">
                        {content.map(({ id, title, Image }) => (
                            <div
                                key={id}
                                className="relative rounded-full bg-black group flex flex-col items-center z-10 justify-center"
                            >
                                <img src={Image} alt="circle items" />
                                <div className="relative z-30 py-2 text-center">
                                    <p className="text-[1.5rem] leading-[3.125rem] pr-3 mr-2 font-normal  text-[#3e3e3e]">
                                        {title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-[#3e3e3e] font-medium text-[16px] sm:text-[18px] md:text-[20px] leading-[30px] md:leading-[40px] w-[98%] sm:w-[73%] mx-auto mt-8 py-6">
                        Whether you have specific skin concerns or simply want
                        to revitalize your complexion, a chemical peel may be
                        the solution you've been searching for. Contact KOZA
                        Skin Experts today to schedule a consultation and
                        discover how chemical peels can enhance your skin's
                        natural beauty.
                    </p>
                    <div className="absolute hidden sm:block md:top-[11.43rem] py-3 w-[50%] lg:w-[70%] mx-[200px] bg-[#090909] opacity-50"></div>
                    <div className="absolute hidden sm:block md:top-[505px] py-3 w-[50%] lg:w-[70%] mx-[200px] bg-[#090909]  opacity-50"></div>
                    <div className="absolute hidden sm:block md:top-[51.5rem] py-3 w-[40%] lg:w-[60%] mx-[280px] bg-[#090909] opacity-50"></div>
                    <div className="absolute hidden sm:block xl:hidden md:top-[71.6rem] py-3 w-[40%] mx-[300px] bg-[#090909] opacity-50"></div>
                    <div className="absolute hidden sm:block lg:hidden md:top-[92rem] py-3 w-[40%] mx-[300px] bg-[#090909] opacity-50"></div>
                </div>
            </div>
        </>
    )
}
export default TreatmentBenefits
