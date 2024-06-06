import React from 'react'
import img from '../../assets/whatWeDo.png'
import smile from '../../assets/smile.png'
import heart from '../../assets/lovesym.png'
import comb from '../../assets/combsym.png'
import Do from '../common/Do'
import ButtonGradient from '../common/buttonGradient'

const WhatWeDoPage = () => {
    const data = [
        {
            bulletImg: smile,
            title: 'Authentic beauty, uncompromised comfort',
            description:
                'Walk into Koza just as you are, and walk out as beautiful as your heart desires. Our philosophy is rooted in the belief that your beauty journey should be as authentic as you are. We prioritize your comfort, ensuring that every step you take with us is a confident stride towards your desired beauty and wellness goals.',
        },
        {
            bulletImg: heart,
            title: 'Beyond skin and hair empowering choices',
            description:
                'Our dedication extends beyond traditional beauty treatments. Koza proudly offers specialized services such as Hymenoplasty, Cosmetic Surgery, Vaginal Rejuvenation, Labia Majora Plasty, Liposuction, and Vaginoplasty. We understand that beauty is a deeply personal journey, and we are here to empower you with a diverse range of choices to enhance your confidence.',
        },
        {
            bulletImg: comb,
            title: 'A holistic approach to beauty and wellness',
            description:
                'Koza is your haven for comprehensive beauty and wellness solutions. From nurturing your skin to rejuvenating your hair, we offer a wide array of treatments and procedures tailored to your individual needs. Our commitment is to provide you with not only flawless skin and healthy hair but also the confidence to be your most authentic self.',
        },
    ]
    const mainDescription =
        "At Koza, we understand that everyone craves the beauty of flawless skin and gorgeous hair. We don't just make it happen; we make it happen with a philosophy that encompasses your unique essence."
    const backgroundImage = img

    return (
        <>
            <div className="mt-12">
                <Do
                    data={data}
                    mainTitle="What we do"
                    mainDescription={mainDescription}
                    backgroundImage={backgroundImage}
                    buttonNotNeeded
                    bulletsNotNeeded
                    bulletImg={data.img}
                    itemGap="gap-y-10"
                />
            </div>
            <div className="bg-gradient-to-r from-[#632A3D] to-[#350340] text-[#fff] my-12">
                <div className="w-[90%] sm:w-[75%] mx-auto py-12 grid gap-y-4">
                    <p className="text-center text-[27px] sm:text-[33px] lg:text-[40px] ">
                        Your one-stop destination for beauty and wellness
                    </p>
                    <p className="text-[15px] sm:text-[18px] py-2 sm:py-5 text-center ">
                        If you seek a destination where the finest treatments
                        for all your cosmetic needs converge, Koza is
                        unquestionably your one-stop destination. Our commitment
                        to your beauty and wellness knows no bounds, and we are
                        here to ensure that every visit to Koza is a
                        transformative experience.
                    </p>
                    <p className="text-[15px] sm:text-[18px] py-2 sm:py-5 text-center">
                        Embrace the koza philosophy, where beauty is an
                        authentic expression of your unique self, and wellness
                        is a holistic journey towards confidence, empowerment,
                        and self-discovery. Join us on this remarkable voyage,
                        where your beauty and wellness aspirations become a
                        reality.
                    </p>

                    <div className=" flex items-center justify-center">
                        <ButtonGradient
                            WhiteButton={true}
                            actionRequired="Book Appointment"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatWeDoPage
