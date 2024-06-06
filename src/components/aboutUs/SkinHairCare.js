import React from 'react'
import Lightnening from '../../assets/new-landing/SkinLightnening.png'
import Hairloss from '../../assets/new-landing/Hair loss.png'
import Management from '../../assets/new-landing/Weight.png'
import surgery from '../../assets/new-landing/Cosmeticsurgery.png'
import Gynacelogy from '../../assets/new-landing/Gynacelogy.png'
import Laser from '../../assets/new-landing/Laserhair.png'
import Slider from 'react-slick'
import { useNavigate } from 'react-router-dom'

const SkinHairCare = () => {
    const navigate = useNavigate()

    const content = [
        {
            id: 1,
            Img: Lightnening,
            topic: 'Skin Lightnening',
            link: '/skin',
        },
        {
            id: 2,
            Img: Hairloss,
            topic: 'Hair loss',
            link: '/antiDandruff',
        },
        {
            id: 3,
            Img: Management,
            topic: 'Weight Management',
            link: '/weight-management',
        },
        {
            id: 4,
            Img: surgery,
            topic: 'Cosmetic Procedures',
            link: '/cosmetic-procedures',
        },
        {
            id: 5,
            Img: Gynacelogy,
            topic: 'Cosmetic Alternatives',
        },
        {
            id: 6,
            Img: Laser,
            topic: 'Laser Hair Reduction',
        },
    ]
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
                    slidesToScroll: 3,
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
            <div id="nextSection">
                <div className="w-[90%] sm:w-[80%] lg:w-[70%] mx-auto text-center my-2 py-2 pb-3">
                    <p className="text-[28px] sm:text-[33px] lg:text-[40px] font-bold py-2">
                        Our Skin and Hair Care services
                    </p>
                    <p className="text-[17px] sm:text-[20px]">
                        We offer the best skin and hair care treatment and
                        provides proper solutions
                    </p>
                </div>
                <div className="hidden lg:grid lg:grid-cols-6 w-[88%] gap-x-2 mx-auto py-4">
                    {content.map(({ id, Img, topic, link }) => (
                        <div
                            key={id}
                            onClick={() => navigate(link)}
                            className="h-full flex flex-col place-items-center hover:shadow-2xl rounded-xl p-4"
                        >
                            <div className="rounded-full h-32 w-32 overflow-clip flex flex-shrink-0">
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
        </>
    )
}

export default SkinHairCare
