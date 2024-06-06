import React from 'react'
import Do from '../../common/Do'
import botoximg from '../../../assets/skinImg/antiageingimg/botoxcomstic.png'
import FDA from '../../../assets/skinImg/antiageingimg/FDA.png'

import NumericBullets from '../../common/NumericBullets'

const BotoxCosmetic = () => {
    const data = [
        {
            description:
                'The area between the eyebrows (glabellar region), to treat moderate to severe frown lines.',
        },
        {
            description: 'Around The eyes, commonly known as crow’s feet lines',
        },
    ]
    // const mainTitle =
    //     'What areas of the body can be treated with Botox Cosmetic?'
    const backgroundImage = botoximg
    const content = [
        {
            id: 1,
            description: 'Overactive bladder',
        },
        {
            id: 2,
            description: 'Excessive underarm sweating',
        },
        {
            id: 3,
            description: 'Lower limb spasticity',
        },
        {
            id: 4,
            description: 'Chronic migraines',
        },
    ]
    return (
        <>
            <div>
                <div className="py-2 md:py-5">
                    <Do
                        mainTitle="What areas of the body can be treated with cosmetic?"
                        titleNotNeeded pointsCentered
                        subDescription="Cosmetically, the injectable Can Be Used in the following areas"
                        isReversed
                        buttonNotNeeded
                        data={data}
                        colorForWhiteBG
                        backgroundImage={backgroundImage}
                    />
                </div>
                <div className="py-2 md:py-5">
                    <NumericBullets
                        topicNotNeeded
                        colorForWhiteBG
                        img={FDA}
                        isReversed
                        description={content}
                        subtitle="Also received FDA approval to treat various medical problems, including"
                    />
                </div>
            </div>
        </>
    )
}

export default BotoxCosmetic
