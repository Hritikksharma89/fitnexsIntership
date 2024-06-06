import React from 'react'
import NumericBullets from '../common/NumericBullets'
import image1 from '../../assets/hair/whyHairCare1.png'
import image2 from '../../assets/hair/whyHairCare2.png'

const WhyHairCare = () => {
    const description2 = [
        {
            id: '1',
            description:
                "Patient customised counselling has been in order to understand the patient's concern",
        },
        {
            id: '2',
            description:
                'Any past medical history has an impact on present situation so a proper medical history is taken.',
        },
        {
            id: '3',
            description:
                'Various tests like folliscopy and trichoscopic analysis is done at the time of counselling to completely understand the condition of the scalp.',
        },
        {
            id: '4',
            description:
                'Identifying the root cause of hair loss is very important and so the treatment is planned accordingly for every single patient.',
        },
        {
            id: '5',
            description:
                'Latest and advanced tools are used for the procedure.',
        },
        {
            id: '6',
            description:
                'Every machine used for the procedures is US-FDA approved',
        },
        {
            id: '7',
            description:
                'Proper sterilization is our top most priority to avoid any kind of infection and thus the procedure becomes risk free',
        },
    ]
    const description = [
        {
            id: '8',
            description:
                'Number of sessions and the nature of the treatment are always planned according to individual consultation with the dermatologist',
        },
        {
            id: '9',
            description:
                'The desire of the patient is always kept in mind in order to give the best and desired result',
        },
        {
            id: '10',
            description:
                'Every pre and post-operative instructions are always given to the patient before and after the procedure.',
        },
        {
            id: '11',
            description:
                'Regular follow up calls by the clinic to ensure patient is not facing any discomfort',
        },
        {
            id: '12',
            description:
                'Every procedure is explained properly to the patient regarding downtime and any special instructions.',
        },
        {
            id: '13',
            description:
                'In case of any discomfort patient can also contact clinic any time during working hours for any support regarding treatment.',
        },
        {
            id: '14',
            description:
                'The results of the treatments are long lasting and even permanent for some chronic skin and scalp problems, as our doctors advise the right diet and products according to individual skin/scalp types to maintain and enhance the results.',
        },
    ]
    return (
        <>
            <div className="py-2">
                <div className="py-2 md:py-14 md:pr-16">
                    <NumericBullets
                        description={description2}
                        img={image2}
                        title="Why koza aesthetic care?"
                        topicNotNeeded
                        hideTitleDesc
                        hideSubtitle
                        isReversed
                    />
                </div>
                <div className="py-2 md:py-5">
                    <NumericBullets
                        hideTitleDesc
                        topicNotNeeded
                        hideSubtitle
                        description={description}
                        img={image1}
                    />
                </div>
            </div>
        </>
    )
}

export default WhyHairCare
