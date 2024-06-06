import React from 'react'
import Do from '../common/Do'
import image from '../../assets/cosmeticSurgery/candidateOfBreastImplantation.png'
import AvailService from '../common/AvailService'

const CandidateOfBreastImplantation = () => {
    const data = [
        {
            description: 'Desire fuller or more shapely breasts.',
        },
        {
            description: 'Have breasts that are uneven or asymmetrical.',
        },
        {
            description:
                'Have lost breast volume due to pregnancy, weight loss or, aging.',
        },
        {
            description:
                'Have completed breast development (usually around the age of 18).',
        },
    ]
    let mainTitle = 'Who is the best candidate for breast implantation?'
    return (
        <div>
            <div className="mb-20">
                <Do
                    data={data}
                    backgroundImage={image}
                    buttonNotNeeded
                    subTitle={mainTitle}
                    subDescription="Breast implantation may be suitable for individuals who"
                    isReversed
                    titleNotNeeded
                    pointsCentered
                    hideMainDescription
                />
            </div>
            <AvailService
                title="How to Avail Our FREE Service?"
                text1="At KOZA , we understand that choosing breast implantation is a significant decision. To help you make an informed choice, we offer a free consultation with our expert team. During this consultation, we will discuss your goals, answer your questions, and determine if breast implantation is the right option for you. Contact us today to schedule your complimentary consultation and take the first step toward the confident, beautiful you."
                text2="Experience the transformation youve always desired with breast implantation at KOZA . We are here to support you throughout your journey to achieve your dream look. Reach out to us now and lets start your path to enhanced confidence and beauty."
            />
        </div>
    )
}

export default CandidateOfBreastImplantation
