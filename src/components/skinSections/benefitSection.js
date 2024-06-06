import React from 'react'
import NumericBullets from '../common/NumericBullets'
import WhoShould from '../../assets/skinImg/benefits.png'

const Benefits = () => {
    const contentMatter = [
        {
            id: 1,
            topic: 'Renewed skin texture ',
            description:
                'Chemical peels can help you achieve smoother, more radiant skin by removing dead skin cells and stimulating collagen production.',
        },
        {
            id: 2,
            topic: 'Treatment versatility',
            description:
                "Chemical peels come in various strengths, making them suitable for different skin types and concerns. Whether you want a subtle refresh or more dramatic results, there's a chemical peel for you.",
        },
        {
            id: 3,
            topic: 'Improved skin tone',
            description:
                'They can reduce the appearance of pigmentation issues like sunspots, melasma, and freckles, promoting a more even skin tone.',
        },
        {
            id: 4,
            topic: 'Acne scar reduction',
            description:
                'Chemical peels can help diminish the appearance of acne scars and improve skin clarity.',
        },
        {
            id: 5,
            topic: 'Quick and convenient',
            description:
                'These treatments are generally quick, with minimal downtime, allowing you to resume your daily activities soon after.',
        },
    ]

    return (
        <>
            <div className="pr-10 py-3 md:py-10">
                <p className="text-center font-semibold sm:text-[2rem] md:text-[2.5rem] leading-[3.125rem]">
                    What are its benefits?
                </p>
                <NumericBullets
                    img={WhoShould}
                    isReversed
                    description={contentMatter}
                />
            </div>
        </>
    )
}
export default Benefits
