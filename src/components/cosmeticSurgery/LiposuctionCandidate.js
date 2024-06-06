import React from 'react'
import image from '../../assets/cosmeticSurgery/lipoSuctionCandidate.png'
import Do from '../common/Do'
import AvailService from '../common/AvailService'
import ButtonGradient from '../common/buttonGradient'

const LiposuctionCandidate = () => {
    const data = [
        {
            description:
                'Have localized fat deposits that are resistant to diet and exercise.',
        },
        {
            description:
                'Are in good overall health and have realistic expectations.',
        },
        {
            description:
                'Are at or near their target weight but wish to address specific problem areas.',
        },
        {
            description:
                'Understand that liposuction is not a substitute for weight loss and a healthy lifestyle.',
        },
    ]

    const backgroundImage = image
    return (
        <div>
            <div className="mb-8 md:mb-24">
                <Do
                    isReversed
                    backgroundImage={backgroundImage}
                    hideMainDescription
                    subTitle="Who is the best candidate for liposuction?"
                    subDescription="Liposuction may be an ideal option for individuals who"
                    data={data}
                    titleNotNeeded
                    pointsCentered
                    buttonNotNeeded
                />
            </div>

            <AvailService
                title=" How to Avail Our FREE Body Composition Analysis?"
                text1=" At KOZA , we believe in helping you make informed decisions about your cosmetic journey. We offer a complimentary consultation with our experienced team to discuss your goals and determine if liposuction is right for you. To get started on your path to a more confident you, simply contact us today to schedule your free consultation."
                text2="Transform your body and regain your self-assurance with liposuction at KOZA . We're here to support you every step of the way towards achieving your dream physique. Contact us now, and let's embark on this journey together.
"
            />
        </div>
    )
}

export default LiposuctionCandidate
