import React from 'react'
import faceTreatment from '../../assets/services/skin.png'
import Hair from '../../assets/services/Hair.png'
import weight from '../../assets/services/weigthManagement.png'
import Cosmetic from '../../assets/services/cosmeti.png'
import Gynaeoclogy from '../../assets/services/Gynaeoclogy.png'
import laser from '../../assets/services/laser.png'
import checkmark from '../../assets/checkmark.png'
import Slider from 'react-slick'

const servicesData = [
    {
        category: 'Skin Care',
        icon: faceTreatment,
        treatments: [
            'Regular Skin Care',
            'Skin Brightening & Pigmentation Treatment',
            'Acne & Acne Scar Treatments',
            'Anti Ageing Treatment',
            'Dark Circles Treatment',
            'Lip Darkening Treatment',
            'Wart / Moles Removal Treatments',
        ],
    },

    {
        category: 'Hair Care',
        icon: Hair,
        treatments: [
            'Hair Care',
            'Anti-Dandruff Treatment',
            'Hair Fall Treatment',
            'Stem Cell Meso Therapy',
            'GFC rejuvenating therapy Meso',
            'Hair Transplant',
        ],
    },

    {
        category: 'Weight Management',
        icon: weight,
        treatments: [
            'Weight Management',
            'Inch Loss',
            'Figure Correction',
            'Bust Line Treatments',
            'Non-Surgical Liposuction',
        ],
    },

    {
        category: 'Cosmetic Procedures',
        icon: Cosmetic,
        treatments: [
            'Weight Management',
            'Inch Loss',
            'Figure Correction',
            'Bust Line Treatments',
            'Non-Surgical Liposuction',
        ],
    },

    {
        category: 'Cosmetic Alternatives',
        icon: Gynaeoclogy,
        treatments: [
            'Liposuction',
            'Breast Lift / Augmentation',
            'Face Lift',
            'Gynecomastia',
            'Full Figure Correction',
            'Dimple Creation',
            'Rhinoplasy ',
            'Fat Grafting  and belly button surgery',
            'Mommy makeover',
        ],
    },

    {
        category: 'Laser Hair Reduction',
        icon: laser,
        treatments: [
            'Vaginal Rejuvenation and plasty',
            'Hymenoplasty ',
            'Labia Majora and minora Plasty',
            'Clitoral Hood reduction ',
            'Vaginal tightening with single-thread technique ',
            'Labia Majora Augmentation',
        ],
    },
]

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
}

const OurServices = () => {
    return (
        <>
            <div className="bg-secondary p-8">
                <div className="inline-block p-2 rounded-md">
                    <p className="w-[80%] md:w-full text-center text-[#666666] text-[16px] sm:text-[20px] bg-[#FFFF] rounded-lg px-3">
                        Our services
                    </p>
                </div>
                <div className="md:flex items-center">
                    <div className="md:w-1/2 text-[27px] sm:text-[33px] lg:text-[40px] font-bold  text-[#060606] pl-3">
                        We offer the best services
                    </div>
                    <div className="md:w-1/2 text-[16px] text-[#666666] font-normal">
                        We are dedicated to unlocking your true radiance.
                        Explore our range of personalized treatments and let
                        your inner beauty shine through. Your journey to
                        self-confidence begins here
                    </div>
                </div>
                <div className="hidden md:flex justify-center gap-x-10 gap-y-20 flex-wrap py-8">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="flex group transition-all duration-150"
                        >
                            <div className="bg-[#ECAD62] p-4 rounded-md md:flex md:flex-col justify-start items-start group-hover:scale-105 transition-all duration-150 cursor-pointer">
                                <div className="relative">
                                    <img
                                        src={service.icon}
                                        alt={service.category}
                                        className="mb-4"
                                    />
                                    <div className="flex justify-center items-center">
                                        <h3 className="absolute mb-[45px] text-center font-semibold text-[18px] bg-gradient-to-tr from-[#E8E8E8] to-transparent p-1 sm:p-2 rounded-md">
                                            {service.category}
                                        </h3>
                                    </div>
                                </div>
                                {service.treatments.map((treatment, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-2"
                                    >
                                        <div className="w-4 h-4 bg-[#060606] flex justify-center items-center rounded-full shrink-0">
                                            <img
                                                src={checkmark}
                                                alt="checkmark"
                                                className=" "
                                            />
                                        </div>
                                        {treatment}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="block md:hidden">
                    <Slider
                        {...settings}
                        className="flex justify-center gap-x-10 gap-y-20 flex-wrap py-8 sm:hidden"
                    >
                        {servicesData.map((service, index) => (
                            <div
                                key={index}
                                className="flex group transition-all duration-150"
                            >
                                <div className="p-4 rounded-md md:flex md:flex-col justify-start items-start group-hover:scale-105 transition-all duration-150 cursor-pointer min-h-[70vh]">
                                    <div className="relative">
                                        <img
                                            src={service.icon}
                                            alt={service.category}
                                            className="mb-4"
                                        />
                                        <div className=" flex justify-center items-center">
                                            <p className="absolute mb-[45px] text-center font-semibold text-[18px] bg-gradient-to-tr from-[#E8E8E8] to-transparent  p-1 sm:p-2 rounded-md">
                                                {service.category}
                                            </p>
                                        </div>
                                    </div>
                                    {service.treatments.map(
                                        (treatment, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-2"
                                            >
                                                <div className="w-4 h-4 bg-[#060606] flex justify-center items-center rounded-full shrink-0">
                                                    <img
                                                        src={checkmark}
                                                        alt="checkmark"
                                                        className=" "
                                                    />
                                                </div>
                                                {treatment}
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default OurServices
