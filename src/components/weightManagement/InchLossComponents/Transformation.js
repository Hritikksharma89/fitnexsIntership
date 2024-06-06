import React from 'react'
import Do from '../../common/Do'
import Target from '../../../assets/weightMangement/transformImg.png'
import specific from '../../../assets/weightMangement/specificTarget.png'
import non from '../../../assets/weightMangement/non_surgical.png'
import science from '../../../assets/weightMangement/scienceImg.png'
import nsls from '../../../assets/weightMangement/nsls.png'
import PicCatalog from '../../common/PicCatalog'
import NumericBullets from '../../common/NumericBullets'

const Transformation = () => {
    const data = [
        {
            description:
                'Are you ready to embark on a journey of rejuvenation and transformation? At KOZA AESTHETIC CARE, we introduce you to our exclusive Transformation Therapy, a unique and comprehensive treatment designed to target specific areas of your body for remarkable results.',
        },
        {
            description:
                'This therapy offers a range of benefits, including improved blood flow, reduced cellulite, and enhanced skin tone. It effectively targets stubborn fat deposits, promoting lymphatic drainage and revitalizing deep tissues. ',
        },
        {
            description:
                "You can expect localized fat reduction, tighter skin, and a smoother, more contoured appearance. Additionally, the therapy promotes collagen production, tightens skin, and enhances your body's natural contours. ",
        },
        {
            description:
                'Its drainage mode eliminates toxins, reduces excess fluid, and provides a detoxifying effect, aiding in targeted area inch loss reduction. ',
        },
        {
            description:
                'The focused drainage system maximizes transformation therapy benefits and supports a natural detoxification process, leaving you feeling refreshed.',
        },
    ]
    const content = [
        {
            description:
                ' Our Non-Surgical Liposuction is based on the revolutionary principle of Ultrasonic waves within the specific range of 20-70 KHz. ',
        },
        {
            description:
                " These waves create a phenomenon known as 'cavitation', where high-energy waves focus on adipose tissue, creating microbubbles of vapor.",
        },
        {
            description:
                ' These bubbles form inside fat cells and the interstitial fluids of cellulite. Through a series of phase changes involving expansion and compression, the fat cells implode. This results in the release of water and fat, which is later metabolized by the liver.',
        },
        {
            description:
                " But that's not all. In addition to ultrasonic waves, we apply a high-frequency Radio Frequency (RF) electric wave. With 8 multi-polar RF for the body, 4 polar RF for the face, and Bipolar RF for the face and eye, this technology stimulates collagen production in deep tissues.",
        },
        {
            description:
                'RF electric waves not only enhance the cavitation effect but also provide a lifting and tightening effect on the skin. This makes it perfect for body shaping and rejuvenation.',
        },
    ]

    const contentOne = [
        {
            description:
                'Unlock the potential of KOZA Aesthetic Care Lipolaser Therapy for a healthier, more balanced you. Contact us today to schedule your session and discover the transformative benefits of this unique therapy. Embrace holistic wellness and take a step toward a lighter, more rejuvenated you.',
        },
    ]
    return (
        <>
            <div>
                <Do
                    data={data}
                    mainTitle='Transformation therapy'
                    mainDescription='“Experience the power of real life transformation”'
                    titleNotNeeded
                    pointsCentered
                    backgroundImage={Target}
                    action="Book Appointment Now"
                    bulletsNotNeeded
                />
                <div className="py-4">
                    <PicCatalog
                        isReversed
                        img={specific}
                        secondTitleNotNeeded
                        title="Targeted for specific areas"
                        description="<div>Our Transformation Therapy is tailored to address specific areas of concern, ensuring that you achieve your desired results in the most effective way possible. Whether you're looking to reduce cellulite, contour your body, or revitalize your skin, our therapy is the key to unlocking your transformation.</div><div>Are you ready to witness the incredible results of Transformation Therapy? Contact us today to schedule your session and experience the power of rejuvenation and renewal at Koza AESTHETIC CARE. Your transformation journey awaits.</div>"
                    />
                </div>
                <div className="py-4">
                    {' '}
                    <PicCatalog
                        img={non}
                        title="Non Surgical Liposuction" 
                        second_title="Experience the future of inch loss with advanced Non-Surgical Liposuction (NSLS)"
                        description="Are you ready to witness a miraculous transformation with permanent inch loss? Look no further than KOZA AESTHETIC CARE Aesthetics' Non-Surgical Liposuction, a cutting-edge technology that offers remarkable results in just one session. "
                    />{' '}
                </div>

                <div className="py-4 mt-[2rem]">
                    <NumericBullets
                        isReversed
                        img={science}
                        title="The Science Behind NSLS"
                        hideSubtitle
                        hideTitleDesc
                        topicNotNeeded
                        description={content}
                        bulletsNotNeeded
                    />
                </div>
                <div className="py-4">
                    <NumericBullets
                        img={nsls}
                        hideSubtitle
                        hideTitleDesc
                        topicNotNeeded
                        description={contentOne}
                        bulletsNotNeeded
                    />
                </div>

                <div className="bg-gradient-to-r from-[#632A3D] to-[#350340] text-[#fff] mt-6 md:mt-14 py-2 md:py-7">
                    <div className=" w-[85%] lg:w-[87%] mx-auto py-2 md:py-6">
                        <p className="text-[15px] sm:text-[18px] md:text-[24px] py-2 sm:py-5 text-center text-normal  md:leading-[25px] lg:leading-[36px]  ">
                            Experience the future of inch loss and body
                            transformation with KOZA AESTHETIC CARE Non-Surgical
                            Liposuction. Achieve remarkable results in just one
                            session, and embrace a new you with confidence.
                            Contact us today to schedule your session and unlock
                            the power of permanent inch loss and skin
                            rejuvenation.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Transformation
