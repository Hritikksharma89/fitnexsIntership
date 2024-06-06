import React from 'react'
import Therapy from '../../../assets/skinImg/antiageingimg/Careimgs/therapy.png'
import Botox from '../../../assets/skinImg/antiageingimg/Careimgs/Botox.png'
import Dermal from '../../../assets/skinImg/antiageingimg/Careimgs/Dermal.png'
import Threadlift from '../../../assets/skinImg/antiageingimg/Careimgs/Threadlift.png'
import Microneedling from '../../../assets/skinImg/antiageingimg/Careimgs/Microneedling.png'
import Wrinkle from '../../../assets/skinImg/antiageingimg/Careimgs/Wrinkle.png'
// import Slider from 'react-slick'
import signs from '../../../assets/skinImg/antiageingimg/signs.png'
import AboutServices from '../../common/AboutServices'
import PicCatalog from '../../common/PicCatalog'
// import signs from '../../../assets/skinImg/antiageingimg/signs.png'

const SkinantiCare = () => {
    const contents = [
        {
            id: 1,
            Img: Therapy,
            topic: 'Magical facial anti-ageing therapy',
        },
        {
            id: 2,
            Img: Botox,
            topic: 'Muscle Relaxers',
        },
        {
            id: 3,
            Img: Dermal,
            topic: 'Dermal fillers',
        },
        {
            id: 4,
            Img: Threadlift,
            topic: 'Thread lift',
        },
        {
            id: 5,
            Img: Microneedling,
            topic: 'RF microneedling',
        },
        {
            id: 6,
            Img: Wrinkle,
            topic: 'Anti-wrinkle program',
        },
    ]
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     arrows: false,
    //     autoplay: true,
    //     autoplaySpeed: 3000,

    //     responsive: [
    //         {
    //             breakpoint: 786,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1,
    //             },
    //         },
    //         {
    //             breakpoint: 425,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //             },
    //         },
    //     ],
    // }

    return (
        <>
            <div id='nextSection' className='py-2 md:py-5 lg:pt-12 lg:pb-5'>
                {/* <div>
                    <div className="w-[90%] sm:w-[80%] lg:w-[70%] mx-auto text-center my-2 py-2 pb-3">
                        <p className="text-[28px] sm:text-[33px] lg:text-[40px] font-medium leading-[30px] md:leading-[50px] py-2">
                            Know more about us
                        </p>
                        <p className="text-[17px] sm:text-[20px] font-normal py-2">
                            We offer the best skin and hair care treatment and
                            provides proper solutions
                        </p>
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-6 w-[85%] gap-x-2 mx-auto py-4">
                        {content.map(({ id, Img, topic }) => (
                            <div
                                key={id}
                                className="h-full flex flex-col place-items-center hover:shadow-2xl rounded-xl p-4"
                            >
                                <div className="rounded-full h-30 w-30 overflow-clip flex flex-shrink-0">
                                    <img
                                        src={Img}
                                        alt="imagesInQueue"
                                        className="flex self-center"
                                    />
                                </div>
                                <p className="my-2 text-[20px] text-center">
                                    {topic}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="lg:hidden w-[70%] mx-auto py-10">
                        <Slider {...settings} className="mx-3">
                            {content.map(({ id, Img, topic }) => (
                                <div
                                    key={id}
                                    className="grid grid-cols-1 sm:grid-cols-3 p-4"
                                >
                                    <div className="hover:shadow-2xl rounded-xl flex items-center flex-col justify-center p-2">
                                        <img
                                            src={Img}
                                            alt="img"
                                            className="object-contain"
                                        />
                                        <p className=" text-center my-2 text-[20px]">
                                            {topic}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

                <div>
                    <div className=" text-center text-[28px] sm:text-[33px] lg:text-[40px] leading-[30px] lg:leading-[50px]  pb-3 md:pb-7 font-semibold  ">
                        Know all about skin ageing & treatments
                    </div>
                    <div className="grid sm:grid-cols-2 my-3 gap-y-5">
                        <div>
                            <img
                                src={signs}
                                alt="iimm"
                                className={`object-contain sm:px-0 px-3 `}
                            />
                        </div>
                        <div className="flex gap-x-2 p-2 mx-6 justify-start items-center">
                            <div className=" sm:px-6  ">
                                <p className=" text-[16px] sm:text-[18px] lg:text-[24px] leading-[40px] font-normal py-1">
                                    What are seven signs of ageing?
                                </p>
                                <p className="text-[16px] sm:text-[18px] lg:text-[24px] leading-[40px] font-normal py-1">
                                    What causes our skin to age?
                                </p>
                                <p className="text-[16px] sm:text-[18px] lg:text-[24px] leading-[40px] font-normal py-1">
                                    What can we do about it?
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}
                <AboutServices
                    content={contents}
                    subtitle="We offer the best skin and hair care treatment and provides proper solutions"
                    title="Know more about us"
                />
            </div>
            <div className='pr-10 '>
                <p className='my-8 text-center text-[2rem] text-[#060606] sm:text-[2.5rem] font-semibold leading-[3.125rem]'>Know all about skin ageing & treatments</p>
                <PicCatalog 
                    titleNotNeeded
                    secondTitleNotNeeded
                    description='<div>What are seven signs of Ageing?</div>
                    <div>What causes our skin to age ?</div>
                    <div>What can we do about it ?</div>'
                    img={signs}
                    isReversed
                />
            </div>
        </>
    )
}

export default SkinantiCare
