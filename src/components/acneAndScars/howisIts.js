import React from 'react'
import howisits from '../../assets/Acne-scar/howisits.png'
import NumericBullets from '../common/NumericBullets'

const HowisIts = () => {
    const content = [
        {
            id: 1,
            description:
                'Peel is applied very carefully by our expert aesthetic dermatologist. Skin is first thoroughly cleansed so that no other product is present on face. Sensitive areas of face around eyes, lips and nose are protected. ',
        },
        {
            id: 2,
            description:
                'Peel is applied on face starting from most resistant to most sensitive areas as judged by dermatologist.',
        },
        {
            id: 3,
            description:
                'There are different types of peel for different problems and for every different peel a unique application time is set that is maintained by the aesthetician. ',
        },
        {
            id: 4,
            description:
                'Also, every peel has a different end point which the dermatologist is aware of.',
        },
        {
            id: 5,
            description:
                'After its end point peel is wiped from the skin with fresh water. For some peels that are leave on peel are left on skin for 8-12 hours.',
        },
        {
            id: 6,
            description:
                'For best results combination of peel are used in single session that only our skin experts will recommend depending on the skin type, texture and skin concern.',
        },
    ]

    return (
        <>
            <div className=" py-2 md:py-8 ">
                <NumericBullets
                    title="How is it done?"
                    hideTitleDesc
                    hideSubtitle
                    topicNotNeeded
                    img={howisits}
                    description={content}
                    isReversed
                />
            </div>
        </>
    )
}
export default HowisIts
