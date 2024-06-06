import React from 'react'
import image from '../../assets/cosmeticSurgery/candidateForgynecomastia.png'
import Do from '../common/Do'
import AvailService from '../common/AvailService'

const CandidateOfGynecomastia = () => {
    const data = [
        {
            description: `Experience enlarged or swollen breast tissue, causing a feminine chest appearance.`,
        },
        {
            description: `Feel self-conscious or emotionally distressed due to gynecomastia.`,
        },
        {
            description: `Are in good overall health and have realistic expectations about the procedure.`,
        },
        {
            description: `Have stabilized their weight and addressed any underlying hormonal imbalances.`,
        },
    ]

    return (
        <div>
            <div>
                <Do
                    data={data}
                    backgroundImage={image}
                    buttonNotNeeded
                    subTitle='Who is the ideal candidate for gynecomastia treatment?'
                    subDescription='Gynecomastia treatment may be suitable for individuals who'
                    titleNotNeeded
                    pointsCentered
                    isReversed={true}
                />
            </div>

            <AvailService
                title="How to avail our Free Consultation?"
                text1="At KOZA , we recognize that deciding on gynecomastia treatment is a significant step. To help you make an informed decision, we offer a complimentary consultation with our experienced team. During this consultation, we will discuss your goals, address your concerns, and determine if gynecomastia treatment is the right choice for you. Contact us today to schedule your free consultation and begin your journey toward renewed confidence and comfort."
                text2="Reclaim your confidence and achieve the chest youve always desired with gynecomastia treatment at KOZA . We are dedicated to supporting you throughout your transformation and enhancing your overall well-being. Get in touch with us now and take the first step toward a more confident and masculine you."
            />
        </div>
    )
}

export default CandidateOfGynecomastia
