import React from 'react'
import image from '../../assets/cosmeticSurgery/BenefitOfBlephropasty.png'
import NumericBullets from '../common/NumericBullets'

const BenefitsOfBlepharoplasty = () => {
    let description = [
        {
            id: '1',
            topic: 'Improved chest contour',
            description: `Gynecomastia treatment reduces excess breast tissue, resulting in a flatter and more masculine chest profile.`,
        },
        {
            id: '2',
            topic: 'Enhanced self-esteem',
            description:
                'Regain your self-confidence and feel more comfortable in your own skin.',
        },
        {
            id: '3',
            topic: 'Better quality of life',
            description:
                'Enjoy improved physical and emotional well-being, leading to a higher quality of life.',
        },
        {
            id: '4',
            topic: 'Customized solutions',
            description: `Our skilled surgeons work closely with you to achieve your desired chest appearance, tailoring treatment to your unique needs.`,
        },
    ]

    return (
        <>
            <div>
                <div className="mt-4">
                    <div className="text-[40px] font-semibold leading-[50px] text-center">
                        Benefits of blepharoplasty
                    </div>
                    <div className="mt-8">
                        <NumericBullets
                            hideTitleDesc
                            hideSubtitle
                            description={description}
                            img={image}
                            isReversed
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BenefitsOfBlepharoplasty
