import React from 'react'
import Slider from 'react-slick'
import cx from 'classnames'
const AboutServices = ({ content = [], largeGap=false, largerGap= false, subtitle, title }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <>
            <div className="w-[92%] sm:w-[96%] lg:w-[96%] mx-auto text-center my-2 py-2 pb-3 overflow-x-clip">
                <p className="text-[#060606] text-[28px] sm:text-[33px] lg:text-[40px] font-semibold py-2">
                    {title}
                </p>
                <p className="text-[#3e3e3e] text-[14px] sm:text-[20px] font-normal">
                    {subtitle}
                </p>
                <div className={cx("hidden lg:flex lg:flex-row w-[88%] gap-x-2 gap-y-4 mx-auto py-4 justify-center justify-items-center",
                    {'justify-evenly justify-items-center lg:flex-wrap gap-x-2 lg:!gap-x-[6rem] 2xl:!gap-x-36 px-0':largerGap,
                        'justify-evenly':largeGap
                    })}>
                    {content.map(({ id, Img, topic }) => (
                        <div
                            key={id}
                            className="h-60 w-44 flex flex-col place-items-center hover:shadow-2xl rounded-xl p-4 overflow-clip"
                        >
                            <div className="rounded-full h-32 w-32 overflow-clip flex flex-shrink-0">
                                <img
                                    src={Img}
                                    alt="imagesInQueue"
                                    className="flex self-center"
                                /> 
                            </div>
                            <p className="my-2 text-[#3e3e3e] text-base 2xl:text-lg text-center flex flex-wrap flex-shrink">
                                {topic}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="lg:hidden w-[80%] py-10 mx-auto overflow-x-hidden">
                    <Slider {...settings} className="">
                        {content.map(({ id, Img, topic }) => (
                            <div
                                key={id}
                                className="grid grid-cols-1 sm:grid-cols-3 p-4 gap-y-4"
                            >
                                <div className="hover:shadow-2xl rounded-xl flex items-center flex-col justify-center p-2">
                                    <img
                                        src={Img}
                                        alt="img"
                                        className="object-contain"
                                    />
                                    <p className="text-center my-2 text-[20px] text-[#3e3e3e]">
                                        {topic}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}
export default AboutServices
