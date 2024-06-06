import React from 'react'
import NumericBullets from '../common/NumericBullets'
import image from '../../assets/cosmeticSurgery/BenefitsofRhinoplasty.png'

const BenefitOfRhinoplasty = () => {
    let description = [
        {
            id: '1',
            topic: 'Improved Facial Harmony',
            description:
                'Rhinoplasty can enhance the balance and proportions of your face, making it more aesthetically pleasing.',
        },
        {
            id: '2',
            topic: 'Enhanced Breathing',
            description: 'In addition to cosmetic benefits, rhinoplasty can also address functional issues, such as a deviated septum, to improve your breathing.',
        },
        {
            id: '3',
            topic: 'Boosted Self-Confidence',
            description: 'Achieving a nose that complements your features can greatly increase your self-esteem and overall satisfaction with your appearance.',
        },
        {
            id: '4',
            topic: 'Personalized Results',
            description: 'Our skilled surgeons work closely with you to create a nose that fits your unique facial characteristics and goals.',
        },
    ]
    let img = image
    return (
        <>
            <div className="text-[1rem] md:text-[2.5rem] text-center md:leading-[3.125rem] font-semibold">Benefits of Rhinoplasty</div>
            <div className="mt-6">
                <NumericBullets
                    hideTitleDesc
                    hideSubtitle
                    description={description}
                    img={img}
                    isReversed={true}
                />
            </div>
        </>
    )
}

export default BenefitOfRhinoplasty
