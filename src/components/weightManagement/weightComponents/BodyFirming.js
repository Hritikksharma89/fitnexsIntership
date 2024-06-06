import React from 'react'
import AnimImg from '../../../assets/weightMangement/BodyFirming.png'
import Do from '../../common/Do'

const BodyFirming = () => {
    const data = [
        {
            description: `At KOZA Aesthetic Care, we offer specialized Body Firming treatments to help you achieve firmer, more resilient skin in just a few minutes.`,
        },
        {
            description: `Our innovative approach not only firms the skin but also strengthens, tones, and builds muscles, complementing your weight loss journey.
            When it comes to stubborn areas like the abdomen, where fat accumulation can stretch the skin, our Body Firming treatments work wonders.`,
        },

        {
            description: `As you melt away excess fat, your skin may struggle to regain its former elasticity. 
            Our body firming treatment acts as a proactive solution, particularly beneficial for those battling cellulite`,
        },
        {
            description: `While we understand that dieting alone may not eliminate cellulite, our holistic approach, which includes a healthy eating plan, regular exercise and
            body firming treatments, can help reduce its appearance, leaving you feeling more confident and rejuvenated.`,
        },
    ]

    const backgroundImage = AnimImg
    return (
        <div className="px-2">
            <Do
                mainTitle="Body firming"
                mainDescription='"Revitalize your skin and tone your body with ease"'
                bulletsNotNeeded
                bulletImagesNotNeeded
                data={data}
                backgroundImage={backgroundImage}
                action="BOOK APPOINTMENT NOW"
                titleNotNeeded
                largerGapOnPoints
                pointsCentered
            />
        </div>
    )
}

export default BodyFirming
