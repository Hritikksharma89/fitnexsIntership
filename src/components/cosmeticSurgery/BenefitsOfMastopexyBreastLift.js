import React from 'react'
import NumericBullets from '../common/NumericBullets'
import image from '../../assets/cosmeticSurgery/breastMastopexy.png'

const BenefitsOfMastopexyBreastLift = () => {
    let description = [
        {
            id: '1',
            topic: 'Improved breast shape',
            description:
                'Mastopexy can lift and reshape sagging breasts, giving them a more youthful and perkier appearance.',
        },
        {
            id: '2',
            topic: 'Enhanced confidence',
            description:
                'Achieve greater self-assurance by regaining the confidence that comes with beautifully lifted breasts.',
        },
        {
            id: '3',
            topic: 'Clothing fit',
            description:
                'Enjoy better-fitting clothing and swimsuits, as mastopexy can create a more balanced and attractive chest profile.',
        },
        {
            id: '4',
            topic: 'Correction after pregnancy',
            description:
                'Many women choose mastopexy to address breast changes that occur after pregnancy and breastfeeding.',
        },
    ]

    return (
        <>
            <div>
                <div className="mt-4">
                    <div className="text-center text-[2.5rem] lg:leading-[3.125rem] font-semibold text-[#060606]">
                        Benefits of mastopexy - Breast lift
                    </div>
                    <div className="mt-8 pr-10">
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

export default BenefitsOfMastopexyBreastLift
