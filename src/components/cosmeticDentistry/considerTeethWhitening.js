import React from 'react'
import image from '../../assets/cosmeticDentist/ConsiderteethWhitning.png'
import Do from '../common/Do'

const ConsiderTeethWhitening = () => {
    const data = [
        {
            title: 'Those with discolored teeth',
            description: 'If your teeth have become discolored due to aging, lifestyle choices, or dietary habits, teeth whitening can help restore their natural brightness.',
        },
        {
            title: 'Special occasions',
            description: 'Many people opt for teeth whitening before special events like weddings, graduations, or job interviews to ensure their smile looks its best.',
        },
        {
            title: 'Smokers and coffee drinkers',
            description: 'Tobacco and coffee are known to stain teeth. Teeth whitening can be particularly beneficial for individuals who want to counteract the effects of smoking or excessive coffee consumption.',
        },
        {
            title: 'Those with yellow or stained teeth',
            description: 'Yellow or stained teeth can be a source of embarrassment. Teeth whitening can address these concerns, providing a more appealing and confident smile.',
        },
    ]
    return (
        <div>
            <div className="bg-gradient-to-r from-[#632A3E] to-[#370541] py-6 mb-8">
                <Do
                    data={data}
                    backgroundImage={image}
                    action="BOOK APPOINTMENT NOW"
                    buttonNotNeeded
                    colorReversal
                    largerGapOnPoints
                    mainTitle='Who should consider teeth whitening?'
                    mainDescription='Teeth whitening is an option for anyone looking to enhance their smile and improve their overall appearance. However, it may be especially appealing to'
                />
            </div>
            <div className="bg-gradient-to-r from-[#632A3E] to-[#370541] text-[#fff] text-center py-7 px-7 lg:px-24">
                <p className="text-center text-[18px] lg:text-[24px] font-normal md:leading-9">
                    In summary, teeth whitening is a versatile and accessible
                    cosmetic dentistry procedure that offers numerous benefits,
                    including increased confidence, a more youthful appearance,
                    and the removal of stubborn stains. It is a suitable option
                    for individuals looking to rejuvenate their smile and is
                    especially appealing to those with discolored, stained, or
                    yellowed teeth. Whether you choose in-office treatments or
                    at-home kits, teeth whitening provides an effective way to
                    achieve a brighter, more vibrant smile. To know more,
                    connect with Koza Team today!
                </p>
            </div>
        </div>
    )
}

export default ConsiderTeethWhitening
