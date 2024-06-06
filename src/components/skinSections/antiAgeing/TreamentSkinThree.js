import React from 'react'
import Wrinklereduction from '../../../assets/skinImg/treamentImg/Wrinklereduction.png'
import Turkeyneck from '../../../assets/skinImg/treamentImg/Turkeyneck.png'
import eyelids from '../../../assets/skinImg/treamentImg/eyelids.png'
import Enhancing from '../../../assets/skinImg/treamentImg/Enhancing.png'
import AcneScar from '../../../assets/skinImg/treamentImg/acnescar02.png'
import decolletage from '../../../assets/skinImg/treamentImg/decolletage.png'
import Smoothingskin from '../../../assets/skinImg/treamentImg/Smoothingskin.png'
// import PicCatalog from '../../common/PicCatalog'
// import Vampire from '../../../assets/skinImg/antiageingimg/Vampire.png'
const TreamentSkinThree = () => {
    const content = [
        {
            id: 1,
            title: 'Wrinkle ',
            titletwo: 'reduction',
            Image: Wrinklereduction,
        },
        {
            id: 2,
            title: 'Turkey ',
            titletwo: 'neck',
            Image: Turkeyneck,
        },
        {
            id: 3,
            title: 'Lifting the cheeks,',
            titletwo: 'eyebrows and eyelids',
            Image: eyelids,
        },
        {
            id: 4,
            title: 'Enhancing  ',
            titletwo: 'jawline definition',
            Image: Enhancing,
        },

        {
            id: 5,
            title: 'Tightening of the',
            titletwo: 'decolletage',
            Image: decolletage,
        },
        {
            id: 6,
            title: 'Smoothing the skin ',
            Image: Smoothingskin,
        },
    ]
    return (
        <>
            <div className="relative w-full h-full bg-cover bg-no-repeat bg-treatmentBG min-h-[95vh] py-4">
                <div>
                    <p
                        className="text-center text-[28px] sm:text-[34px] lg:text-[40px] leading-[30px]  
                   lg:leading-[50px] py-4 lg:py-8 font-semibold "
                    >
                        Treatment Benefits
                    </p>
                    <div className="flex flex-wrap justify-center w-[95%] mx-auto gap-y-6 gap-x-8 xl:gap-x-0 ">
                        {content.map(({ id, title, Image, titletwo }) => (
                            <div
                                key={id}
                                className="relative  rounded-full z-10  xl:w-[25%] "
                            >
                                <div className="flex justify-center ">
                                    <img
                                        src={Image}
                                        alt={title}
                                        className="flex "
                                    />
                                </div>
                                <div className="relative z-30 flex justify-center flex-col ">
                                    <p className="text-center flex-warp  text-[1.5rem]  font-normal ">
                                        {title}
                                    </p>
                                    <p className="text-center flex-warp  text-[1.5rem]  font-normal ">
                                        {titletwo}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="absolute hidden sm:block top-[11rem] lg:top-[14.5rem] xl:top-[14.5rem] py-3 w-[50%] lg:w-[60%] mx-[140px]  xl:mx-[285px] bg-[#090909] opacity-50"></div>
                    <div className="absolute hidden sm:block top-[515px] lg:top-[570px] py-3 w-[50%] lg:w-[70%] xl:w-[30%] mx-[135px]  xl:mx-[500px] bg-[#090909]  opacity-50"></div>
                    <div className="absolute hidden sm:block lg:hidden top-[53rem] lg:top-[51.6rem] py-3 w-[40%] mx-[300px] bg-[#090909] opacity-50"></div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-[#632A3D] to-[#350340] text-[#fff] mt-6 md:mt-14 py-2">
                <div className="w-[85%] lg:w-[83%] mx-auto px-4 py-2 md:py-6">
                    <p className="text-[18px] md:text-[24px] py-2 sm:py-5 text-center text-normal lg:leading-[36px]">
                        The proven results of Ultherapy are clear, appearing
                        over two to three months as new collagen works to lift
                        skin on the neck, chin, and brow—as well as smooth skin
                        on the upper chest. Results may improve over the
                        following three to six months, and can last a year or
                        more. It won’t duplicate the results of a surgical
                        facelift, but Ultherapy is a clinically proven
                        non-invasive alternative for those not ready for
                        surgery.
                    </p>
                </div>
            </div>
        </>
    )
}

export default TreamentSkinThree
