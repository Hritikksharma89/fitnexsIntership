import React from 'react'
import Do from '../common/Do'
import image from '../../assets/cosmeticSurgery/CandidateRhinoplasty.png'
import AvailService from '../common/AvailService'

const CandidateForRhinoplasty = () => {
    const data = [
        {
            description:
                'Are unhappy with the size, shape, or overall appearance of their nose.',
        },
        {
            description:
                'Experience breathing difficulties due to structural issues in the nose.',
        },
        {
            description:
                'Have fully developed facial bones (typically age 15 or older for girls, and 17 or older for boys).',
        },
        {
            description:
                'Are in good overall health and have realistic expectations about the procedure.',
        },
    ]
    return (
        <div>
            <div>
                <Do
                    data={data}
                    backgroundImage={image}
                    action="BOOK APPOINTMENT NOW"
                    buttonNotNeeded
                    subTitle="Who is the best candidate for rhinoplasty?"
                    subDescription="Rhinoplasty may be the right choice for individuals who"
                    isReversed
                    titleNotNeeded
                    pointsCentered
                    hideMainDescription
                />
            </div>

            <AvailService
                title="How to Claim Your Free Consultation? "
                text1="At KOZA , we understand that choosing to undergo rhinoplasty is a significant decision. That's why we offer a complimentary consultation with our experienced team to discuss your goals, concerns, and whether rhinoplasty is the right option for you. To take the first step toward a more confident you, reach out to us today to schedule your free consultation.
"
                text2="Transform your appearance and breathe easier with rhinoplasty at KOZA . Let us help you achieve the nose you've always dreamed of. Contact us now, and start your journey towards a more confident and harmonious you."
            />
        </div>
    )
}

export default CandidateForRhinoplasty
