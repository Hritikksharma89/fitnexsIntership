import React from 'react'
import Do from '../common/Do'
import image from '../../assets/cosmeticSurgery/candidateOfMastopexy.png'
import AvailService from '../common/AvailService'

const CandidateForMastopexy = () => {
    const data = [
        {
            description: `Experience sagging or drooping breasts due to aging, pregnancy, or weight loss.`,
        },
        {
            description: `Have nipples that point downward or rest below the breast crease.`,
        },
        {
            description: `Are in good overall health and have realistic expectations about the procedure.`,
        },
        {
            description: `Are not planning to become pregnant in the near future, as pregnancy can affect results.`,
        },
    ]
    return (
        <div>
            <div className="md:mb-20">
                <Do
                    data={data}
                    backgroundImage={image}
                    buttonNotNeeded
                    subTitle="Who is the best candidate for mastopexy - breast lift?"
                    subDescription="Mastopexy - breast lift surgery may be the right choice for individuals who"
                    pointsCentered
                    titleNotNeeded
                    isReversed={true}
                />
            </div>

            <AvailService
                title="How to avail our free Consultation"
                text1="At KOZA , we understand that considering mastopexy is a significant decision. To assist you in making an informed choice, we offer a free consultation with our experienced team. During this consultation, we will discuss your goals, answer your questions, and determine if mastopexy is the right option for you. Contact us today to schedule your complimentary consultation and take the first step toward rejuvenated and confident breasts."
                text2="Rediscover your youthful beauty with mastopexy - breast lift services at KOZA. We are here to guide you through your journey to achieve your dream appearance. Reach out to us now and embark on the path to restored confidence and beauty."
            />
        </div>
    )
}

export default CandidateForMastopexy
