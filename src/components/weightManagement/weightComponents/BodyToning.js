import React from 'react'
import bodyToning from '../../../assets/weightMangement/bodyToning.png'
import NumericBullets from '../../common/NumericBullets'

const BodyToning = () => {
    const countingArr = [
        {
            id: 1,
            description: `At KOZA Aesthetic Care, we offer machine-based toning treatments designed to sculpt and define your muscles, 
            giving you that coveted toned and shapely physique you desire.`,
        },
        {
            id: 2,
            description: `Achieving a beautifully toned body requires a two-pronged approach: not only do we help you shed the layers of
            fat that obscure your muscles, but we also focus on toning and strengthening those muscles.`,
        },
        {
            id: 3,
            description: `By increasing your muscle tissue through our toning treatments, you boost your basal metabolic rate (resting metabolism),
            leading to a continuous calorie and fat burn, even at rest. `,
        },
        {
            id: 4,
            description: `This approach provides a more enduring solution to weight loss, ensuring your results are both impressive and long-lasting.`,
        },
    ]
    return (
        <>
            <div className="py-2 md:my-10">
                <NumericBullets
                    title="Body toning"
                    subtitle='"Transform your body into a toned and shapely marvel in minutes"'
                    img={bodyToning}
                    description={countingArr}
                    bulletsNotNeeded
                    topicNotNeeded
                    hideTitleDesc
                />
            </div>
        </>
    )
}

export default BodyToning
