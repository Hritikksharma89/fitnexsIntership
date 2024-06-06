import React from 'react'
import NumericBullets from '../common/NumericBullets'
import image1 from '../../assets/darkCircle/causesOfDarkCircle.png'
import image2 from '../../assets/darkCircle/causeOfDarkCircle2.png'

const CauseOfDarkCircle = () => {
    let description2 = [
        {
            id: '1',
            description: `Thinning of under-eye skin`,
        },
        {
            id: '2',
            description: `Poor sleep habits`,
        },
        {
            id: '3',
            description: `Ageing`,
        },
        {
            id: '4',
            description: `Periorbital hyperpigmentation`,
        },
        {
            id: '5',
            description: `Excess production of melanin`,
        },
        {
            id: '6',
            description: `Deficiency of iron, causing anaemia`,
        },
        {
            id: '7',
            description: `High exposure to sunlight`,
        },
    ]

    let description = [
        {
            id: '8',
            description: `Excessive eye rubbing`,
        },
        {
            id: '9',
            description: `Smoking habits`,
        },
        {
            id: '10',
            description: `Genetic predominance`,
        },
        {
            id: '11',
            description: `Thinning of fat tissues around the eyes`,
        },
        {
            id: '12',
            description: `Thyroid conditions`,
        },
        {
            id: '13',
            description: `Certain medications`,
        },
        {
            id: '14',
            description: `Stress, fatigue`,
        },
    ]
    return (
        <>
            <div>
                <div className="mt-4">
                    <div className="mt-8">
                        <NumericBullets
                            img={image1}
                            title="Causes of dark circles"
                            topicNotNeeded
                            hideSubtitle
                            hideTitleDesc
                            description={description2}
                            isReversed
                        />
                    </div>
                    <div className="mt-8">
                        <NumericBullets
                            img={image2}
                            description={description}
                            hideSubtitle
                            hideTitleDesc
                            topicNotNeeded
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CauseOfDarkCircle
