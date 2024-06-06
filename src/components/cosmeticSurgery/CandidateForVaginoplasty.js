import React from 'react'
import image from '../../assets/cosmeticSurgery/candidateForVaginoplasty.png'
import Do from '../common/Do'
import AvailService from '../common/AvailService'
const CandidateForVaginoplasty = () => {
    const data = [
        {
            description: `Experience vaginal laxity or looseness due to childbirth, aging, or other factors.`,
        },
        {
            description: `Desire to enhance their sexual wellness and intimacy.`,
        },
        {
            description: `Have realistic expectations about the outcomes of the procedure.`,
        },
        {
            description: `Are in good overall health and do not plan to have more children, as pregnancy can affect the results.`,
        },
    ]
    return (
        <div>
            <div className="mb-4 md:mb-16">
                <Do
                    data={data}
                    backgroundImage={image}
                    buttonNotNeeded
                    subTitle="Who is the best candidate for vaginoplasty?"
                    subDescription="Vaginoplasty may be a suitable choice for individuals who"
                    isReversed={true}
                    titleNotNeeded
                    pointsCentered
                />
            </div>

            <AvailService
                title="How to Avail Our Free Consultation"
                text1="At KOZA , we understand that considering vaginoplasty is a personal and important decision. To assist you in making an informed choice, we offer a free consultation with our experienced team. During this consultation, we will discuss your goals, answer your questions, and determine if vaginoplasty is the right option for you. Contact us today to schedule your complimentary consultation and take the first step toward enhanced intimate wellness and confidence."
                text2="Rediscover your comfort and confidence with vaginoplasty services at KOZA . We are here to support you throughout your journey to achieve your desired intimate well-being. Reach out to us now and embark on the path to enhanced confidence and pleasure."
            />
        </div>
    )
}
export default CandidateForVaginoplasty
