import React from 'react'
import NumericBullets from '../common/NumericBullets'
import image from '../../assets/cosmeticSurgery/benefitOfLiposuction.png'

const BenefitsOfLiposuction = () => {
    let description = [
        {
            id: '1',
            topic: 'Improved body contours',
            description:
                'Liposuction can target stubborn fat deposits in various areas of the body, giving you a more sculpted and balanced appearance. ',
        },
        {
            id: '2',
            topic: 'Enhanced self-confidence',
            description:
                'Achieving your desired body shape can boost your self-esteem and help you feel more comfortable in your skin.',
        },
        {
            id: '3',
            topic: 'Quick and low downtime',
            description:
                'Liposuction is a minimally invasive procedure with relatively short recovery times, allowing you to return to your daily activities faster.',
        },
        {
            id: '4',
            topic: 'Permanent results',
            description:
                'Fat cells removed during liposuction do not typically return, providing long-lasting results when coupled with a healthy lifestyle.',
        },
    ]

    return (
        <>
            <div>
                <div className="mt-4">
                    <div className="text-[40px] font-semibold leading-[50px] text-center">
                        Benefits of Liposuction
                    </div>
                    <div className="mt-8 lg:pr-12">
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

export default BenefitsOfLiposuction
