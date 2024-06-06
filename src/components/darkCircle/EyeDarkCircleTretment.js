import React from 'react'
import image from '../../assets/darkCircle/eyeDarkCircleTreatment.png'
import Do from '../common/Do'

const EyeDarkCircleTretment = () => {
    const data = [
        {
            title: 'Botanical and chemical peels',
            description: `Chemical Peel is one of the most common and effective treatments for under-eye dark circles. The procedure uses alpha hydroxy acids, for example glycolic acid, that is useful in lightening hyperpigmentation under the eyes.`,
        },
        {
            title: 'rejuvenating therapy for under eye rejuvenation',
            description: `Platelet Rich Plasma helps in under eye rejuvenation by improving dark circle appearance and also helps in reducing the sunken eyes and fine lines.`,
        },
        {
            title: 'Fillers',
            description: `Fillers are a good option to reduce the sunken under eye area and thus improving dark circle appearance. In such cases, patients can have injections of Platelet Rich Plasma (rejuvenating therapy) or hyaluronic acid gel into the affected area under the eye or sometimes can combines both the treatments.`,
        },
        {
            title: 'Laser treatment',
            description: `Laser treatment for dark circles is also popular. The procedure includes the usage of a laser beam that is absorbed deep down the skin.`,
        },
        {
            title: 'Mesotherapy',
            description: `Mesotherapy is an effective technique that helps to lighten up the under eye dark circles.`,
        },
    ]

    return (
        <div>
            <div className="bg-gradient-to-r from-[#632A3E] to-[#370541]">
                <Do
                    data={data}
                    backgroundImage={image}
                    mainTitle='Under Eye Dark Circle Treatments'
                    mainDescription='A no massage facial with therapeutic ingredients like Salicylic acid and tea tree extract designed to effectively target breakouts specifically for acne prone skin.'
                    largerGapOnPoints
                    colorForWhiteBG
                    colorReversal
                    buttonNotNeeded
                />
            </div>
        </div>
    )
}

export default EyeDarkCircleTretment
