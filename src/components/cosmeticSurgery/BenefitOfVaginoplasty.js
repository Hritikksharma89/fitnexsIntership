import React from 'react'
import image from '../../assets/cosmeticSurgery/benefitOfVaginoplasty.png'
import NumericBullets from '../common/NumericBullets'

const BenifitOfVaginoplasty = () => {
    let description = [
        {
            id: '1',
            topic: 'Improved vaginal tightness',
            description: `Vaginoplasty can tighten and tone the vaginal muscles, restoring sensation and pleasure during intimate moments.`,
        },
        {
            id: '2',
            topic: 'Enhanced aexual satisfaction',
            description:
                'Many individuals experience increased sexual satisfaction for both themselves and their partners after vaginoplasty.',
        },
        {
            id: '3',
            topic: 'Boosted self-confidence',
            description:
                'Regain confidence in your body and feel more comfortable in your own skin.',
        },
        {
            id: '4',
            topic: 'Functional restoration',
            description: `Vaginoplasty can address functional issues, such as urinary incontinence, which may improve as a result of the procedure.`,
        },
    ]

    return (
        <>
            <div>
                <div className="mt-4">
                    <div className="text-[40px] font-semibold leading-[50px] text-center">
                        Benefits of Vaginoplasty
                    </div>
                    <div className="mt-8">
                        <NumericBullets
                            hideSubtitle
                            hideTitleDesc
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
export default BenifitOfVaginoplasty
