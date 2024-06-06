import React from 'react'
import Do from '../../common/Do'
import enzymes from '../../../assets/skinImg/antiageingimg/enzymes.png'

const Enzymes = () => {
    const data = [
        {
            description:
                'First, blood sample is taken in a tube enriched with growth factor releasing enzymes.',
        },
        {
            description:
                'The face is cleansed and local anaesthetic cream is centrifugal applied.',
        },
        {
            description:
                'Meanwhile the blood separation is done under a high-speed centrifugal machine which separates the red cells and extracts the growth factor serum from the blood.',
        },
        {
            description:
                'Anaesthetic cream is removed and growth factor serum obtained from your own blood is superficially applied to the skin of face, hands or the concerned area that requires rejuvenation, anti-ageing and glow.',
        },
        {
            description:
                'Technologies like Microneedling, MNRF, CO2 laser or derma roller can be used to boost the effect of growth factor therapy and amplify collagen synthesis.',
        },
    ]
    const backgroundImage = enzymes
    return (
        <>
            <Do
                mainTitle="How it is performed?"
                pointsCentered
                titleNotNeeded
                isReversed
                colorForWhiteBG
                data={data}
                buttonNotNeeded
                backgroundImage={backgroundImage}
            />
        </>
    )
}

export default Enzymes
