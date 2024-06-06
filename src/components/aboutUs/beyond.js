import React from 'react'
import bgimg01 from '../../assets/About us/background images/wellBeingBG.png'
import bgimg02 from '../../assets/About us/background images/beautyFreedomBG.png'
import bgimg03 from '../../assets/About us/background images/cuttingEdgeBG.png'
import bgimg04 from '../../assets/About us/background images/choicesHealthBG.png'
import img01 from '../../assets/About us/Front images/wellBeing.png'
import img02 from '../../assets/About us/Front images/beautyFreedom.png'
import img03 from '../../assets/About us/Front images/cuttingEdge.png'
import img04 from '../../assets/About us/Front images/choicesHealth.png'
import ImageScale from '../common/reverseBolierPlate'
import ButtonGradient from '../common/buttonGradient'

const Beyond = () => {
    const contentMatter = [
        {
            title: 'Our Commitment to Your Well-Being ',
            text: 'At Koza, your well-being is at the heart of everything we do. Our highly trained staff is committed to guiding you through every step of your treatment journey. We adhere to international protocols, both before and after treatment, to ensure your optimal safety and health. ',
            front: img01,
            bgimg: bgimg01,
        },
        {
            title: 'The Beauty and Freedom of Transformation ',
            text: "We firmly believe in  Every man and woman deserve to feel good about themselves, and our team of experts is here to enhance your beauty and boost your confidence. We stay at the forefront of medical advancements, tailoring our procedures to meet each individual patient's unique needs, thereby delivering the best treatments to fulfill your desires",
            front: img02,
            bgimg: bgimg02,
            isReversed: true,
        },
        {
            title: 'Cutting-Edge, Personalized Treatments',
            text: 'At Koza, we offer the most advanced, safe and personalized treatments in the industry. Our state-of-the-art facility is equipped with top-notch lasers and cutting-edge technology, complemented by our experienced and dedicated staff. We are committed to providing a comfortable and compassionate experience as you embark on your aesthetic journey with us.',
            front: img03,
            bgimg: bgimg03,
        },
        {
            title: 'Your Choices, Your Health, Your Outcomes ',
            text: " In today's world, patients have a myriad of choices when it comes to plastic surgery and non-surgical cosmetic therapies. At Koza, our skilled and experienced specialists are here to guide you in making informed decisions that prioritize your health and ensure the best possible outcomes.",
            front: img04,
            bgimg: bgimg04,
            isReversed: true,
        },
    ]
    return (
        <>
            <div className="">
                <div className="mx-auto w-[95%] lg:w-[75%] mb-12">
                    <p className="text-center text-[2.5rem] leading-[3.125rem] font-semibold py-4">
                        Beyond aesthetics with KOZA
                    </p>
                    <p className="text-center text-[1.125rem] leading-[1.8125rem] font-normal">
                        At Koza, we are dedicated to redefining beauty and
                        instilling confidence in every individual who walks
                        through our doors. Our mission is simple: to provide the
                        best treatments in an environment where customer comfort
                        and safety are our top priorities.
                    </p>
                </div>
                <div className="mb-12">
                    <ImageScale contentMatter={contentMatter} />
                </div>
                <div className="bg-gradient-to-r from-[#632A3D] to-[#350340]">
                    <div className="text-[#fff] w-full sm:w-[75%] md:w-[55%] leading-5 md:leading-[40px] px-2 sm:mx-auto text-center py-4 sm:py-10">
                        <p className="text-[15px] sm:text-[18px]">
                            Join us at Koza Aesthetic Care and experience a
                            transformation that goes beyond aesthetics - one
                            that encompasses confidence, self-assurance, and
                            empowerment. Your journey to beauty and freedom
                            begins here.
                        </p>
                        <div className=" flex items-center justify-center pt-3">
                            <ButtonGradient
                                WhiteButton={true}
                                actionRequired="Book Appointment"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Beyond
