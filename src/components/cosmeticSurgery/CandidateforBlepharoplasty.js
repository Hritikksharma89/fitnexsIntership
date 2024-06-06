import React from 'react'
import image from '../../assets/cosmeticSurgery/CandidateForBlephropasty.png'
import Do from '../common/Do'
import AvailService from '../common/AvailService'

const CandidateforBlepharoplasty = () => {
    const data = [
        {
            description: `Have excess, sagging skin on the upper or lower eyelids.`,
        },
        {
            description: `Experience puffiness or bags under the eyes.`,
        },
        {
            description: `Want to address signs of aging around the eyes.`,
        },
        {
            description: `Are in good overall health and have realistic expectations about the procedure.`,
        },
    ]
    return (
        <div>
            <div>
                <Do
                    data={data}
                    pointsCentered
                    titleNotNeeded
                    backgroundImage={image}
                    buttonNotNeeded
                    subTitle="Who is the ideal candidate for blepharoplasty?"
                    subDescription={
                        'Blepharoplasty may be the right choice for individuals who'
                    }
                    isReversed={true}
                />
            </div>

            <AvailService
                title="How to avail our free Consultation?"
                text1=" At KOZA , we understand that considering blepharoplasty is a
                    significant decision. To help you make an informed choice,
                    we offer a complimentary consultation with our experienced
                    team. During this consultation, we will discuss your goals,
                    answer your questions, and determine if blepharoplasty is
                    the right option for you. Contact us today to schedule your
                    free consultation and begin your journey toward rejuvenated
                    and captivating eyes."
                text2=" Rediscover the natural beauty of your eyes with
                    blepharoplasty services at KOZA. We are here to guide you
                    through your transformation and enhance your overall
                    confidence and appearance. Get in touch with us now and take
                    the first step toward brighter, more youthful eyes."
            />
        </div>
    )
}

export default CandidateforBlepharoplasty
