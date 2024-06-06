import React from 'react'
import NumericBullets from '../common/NumericBullets'
import image from '../../assets/darkCircle/possibleTreatment.png'

const PossibleTreatment = () => {
    let description = [
        {
            id: '1',
            description: 'Skin lightening creams',
        },
        {
            id: '2',
            description: 'Carbon dioxide laser',
        },
        {
            id: '3',
            description: 'Q-switch laser',
        },
        {
            id: '4',
            description: 'Chemical peels',
        },
        {
            id: '5',
            description: 'Chemical peels',
        },
        {
            id: '6',
            description: 'Dermal fillers',
        },
    ]

    return (
        <>
            <div>
                <div className="mt-4">
                    <div className="mt-8">
                        <NumericBullets
                            img={image}
                            title="What Are Possible Treatments For Dark Circles?"
                            hideSubtitle
                            hideTitleDesc
                            topicNotNeeded
                            description={description}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PossibleTreatment
