import React from 'react'
import Sculptingfrontone from '../../../assets/weightMangement/sculptingFrntImg.png'
import bgsculptingone from '../../../assets/weightMangement/sculptingBgImg.png'
import Sculptingfronttwo from '../../../assets/weightMangement/sculptimgtwo.png'
import bgsculptingtwo from '../../../assets/weightMangement/sculptingBgImgTwo.png'
import benfits from '../../../assets/weightMangement/cryoBenifts.png'
import ideal from '../../../assets/weightMangement/idealImg.png'
import ImageScale from '../../common/reverseBolierPlate'
import NumericBullets from '../../common/NumericBullets'

const HowItWorks = () => {
    const contentMatter = [
        {
            title: 'Cryo cool sculpting principle',
            text: "<div>Cryo cool sculpting is based on the principle of cryolipolysis, which means 'cold-induced fat cell destruction.'</div><div>The technology uses controlled cooling to freeze and break down fat cells without harming surrounding tissues.</div><div>During a Cryo Cool Sculpting session, a specialized device is applied to the targeted area of the body, such as the abdomen, thighs, love handles, or chin. This device uses cooling panels to lower the temperature of the fat cells in that area.</div> ",
            front: Sculptingfrontone,
            bgimg: bgsculptingone,
        },
        {
            text: "<div>As the fat cells are exposed to cold temperatures, they undergo a process called crystallization.</div><div>This essentially turns the fat from a liquid to a solid state. Over the following weeks, the body's natural processes kick in.</div><div>The crystallized fat cells are recognized as damaged by the body's immune system and gradually broken down. The broken-down fat cells are then naturally eliminated from the body through the lymphatic system and the liver.</div><div>This process typically takes several weeks, during which the treated area gradually becomes slimmer.</div>",
            front: Sculptingfronttwo,
            bgimg: bgsculptingtwo,
            isReversed: true,
        },
    ]
    const contentTwo = [
        {
            id: 1,
            topic: 'Non-invasive',
            description: 'Cryo cool sculpting is a non-surgical procedure, meaning no incisions or anaesthesia are needed, no downtime and risks',
        },
        {
            id: 2,
            topic: 'Effective & targeted fat reduction',
            description: 'It can effectively target and reduce localized fat pockets that are resistant to diet and exercise, leading to a slimmer appearance. It allows for precise targeting of specific problem areas, addressing localized fat pockets.',
        },
        {
            id: 3,
            topic: 'No scarring',
            description: "Since there are no incisions, there's no scarring associated with cryo cool sculpting ensuring a more natural-looking outcome.",
        },
        {
            id: 4,
            topic: 'No discomfort',
            description: 'Patients typically experience no discomfort during the procedure and can enjoy watching TV or can work on laptop',
        },
        {
            id: 5,
            topic: 'Natural-looking results',
            description:'Cryo cool sculpting provides gradual and natural-looking fat reduction, avoiding the frozen or overdone appearance sometimes associated with surgical procedures.',
        },
    ]
    const contentThree = [
        {
            id: 1,
            description: 'Have stubborn fat in specific areas, like the abdomen, flanks, thighs, or chin.',
        },
        {
            id: 2,
            description: 'Are at or near their target weight but struggle with localized fat deposits.',
        },
        {
            id: 3,
            description: 'Seek a non-surgical alternative to liposuction.',
        },
        {
            id: 4,
            description: 'Are in good overall health and have realistic expectations about the procedure.',
        },
        {
            id: 5,
            description: "It's important to note that while CoolSculpting can be highly effective for reducing fat in targeted areas, it is not a weight loss solution or a replacement for a healthy lifestyle. ",
        },
        {
            id: 6,
            description: 'It is most suitable for individuals who are close to their target weight but struggle with localized fat deposits that are resistant to diet and exercise.  ',
        },
    ]

    return (
        <>
            <div>
                <div className="py-2 md:py-5">
                    <ImageScale heading='How it works?' contentMatter={contentMatter} />
                </div>
                <div className="py-2 md:py-5">
                    <NumericBullets
                        isReversed
                        img={benfits}
                        title="Benefits of cryo cool sculpting"
                        hideSubtitle
                        description={contentTwo}
                    />
                </div>
                <div className="py-2 md:py-5">
                    <NumericBullets
                        title="Who is the ideal candidate for cryo cool sculpting?"
                        hideSubtitle
                        topicNotNeeded
                        titleDescription='Cryolipolysis may be an excellent option for individuals who'
                        img={ideal}
                        description={contentThree}
                    />
                </div>

                <div className="bg-gradient-to-r from-[#632A3D] to-[#350340] text-[#fff] mt-6 md:mt-14">
                    <div className=" w-[85%] lg:w-[76%] mx-auto md:py-8">
                        <p className="text-[15px] sm:text-[18px] md:text-[24px] py-2 sm:py-5 text-center md:leading-[25px] lg:leading-[36px]">
                            {' '}
                            At koza , we understand that achieving your desired
                            body shape is important. To help you make an
                            informed decision, we offer a complimentary
                            consultation with our experienced team.{' '}
                        </p>
                        <p className="text-[15px] sm:text-[18px] md:text-[24px] py-2 sm:py-5 text-center md:leading-[25px] lg:leading-[36px]">
                            During this consultation, we will discuss your
                            goals, answer your questions, and determine if cryo
                            cool sculpting is the right option for you.{' '}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HowItWorks
