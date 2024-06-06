import React from 'react'
import Do from '../common/Do'
import image from '../../assets/darkCircle/typeOfDarkCircle.png'

const TypeOfDarkCircle = () => {
    const data = [
        {
            title: 'Pigmented dark circles (brown in hue)',
            description:
                'These dark circles can be a result of extra melanin production and uneven pigment distribution.',
        },
        {
            title: 'Vascular dark circles',
            description:
                'Blue, pink or purple discoloration along with puffiness, in some cases, are characterized by the appearance of veins which happens as a result of thinning facial skin which results in decreased blood flow and retention of fluid.',
        },
        {
            title: 'Mixed dark circles',
            description:
                'Mix of pigmentation, structural and vascular features.',
        },
        {
            title: 'Structural dark circles',
            description:
                'These dark circles are shadows that are caused by skin laxity, fat loss under the skin and eye bags.',
        },
    ]

    return (
        <div>
            <div className="py-16 pr-6">
                <Do
                    backgroundImage={image}
                    mainTitle="Types of dark circles"
                    largerGapOnPoints
                    data={data}
                    buttonNotNeeded
                />
            </div>
        </div>
    )
}
export default TypeOfDarkCircle
