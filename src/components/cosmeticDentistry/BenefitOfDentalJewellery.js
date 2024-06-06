import React from 'react'
import NumericBullets from '../common/NumericBullets'
import image from '../../assets/cosmeticDentist/benefitOfDentalJewellery.svg'

const BenefitOfDentalJewellery = () => {
    let title = 'Benefits of Dental Jewellery (Tooth Gems)'
    let description = [
        {
            id: '1',
            topic: 'Customized aesthetics',
            description:
                `Dental jewellery provides a unique opportunity to express your personal style and creativity through your smile. With a wide
                 range of designs, colors, and shapes available, you can choose a tooth gem that complements your personality and suits any occasion.`,
        },
        {
            id: '2',
            topic: 'Non-invasive and painless',
            description: `The process of attaching a tooth gem is entirely non-invasive and painless. It doesn't require drilling, injections,
             or any other procedures that might cause discomfort. The bonding agent used is gentle on your tooth enamel, ensuring that your 
             natural tooth structure remains intact.`,
        },
        {
            id: '3',
            topic: 'Temporary and reversible',
            description: `Dental jewellery is a temporary enhancement. If you ever decide to change your style or simply remove the tooth gem, 
            it can be done easily by a dental professional without causing any damage to your tooth. This reversibility allows you to experiment 
            with different designs and looks over time.`,
        },
        {
            id: '4',
            topic: 'Quick application',
            description: `The application of a tooth gem is a quick and straightforward process. You can have it done during a regular dental 
            visit or at a specialized cosmetic dental clinic in just a few minutes, making it a convenient way to update your smile.`,
        },
    ]
    let img = image
    return (
        <div className='my-20'>
            <NumericBullets
                title={title}
                hideSubtitle
                description={description}
                img={img}
            />
        </div>
    )
}

export default BenefitOfDentalJewellery
