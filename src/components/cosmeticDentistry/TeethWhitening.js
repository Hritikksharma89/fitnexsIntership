import React from 'react'
import NumericBullets from '../common/NumericBullets'
import teethwhiteimg from '../../assets/cosmeticDentist/teethWhitening.png'

const TeethWhitening = () => {
    let description = [
        {
            id: '1',
            topic: 'Enhanced Confidence',
            description:
                'A brighter smile can significantly boost your self-confidence. Knowing your teeth look their best can make you feel more at ease in social and professional settings.',
        },
        {
            id: '2',
            topic: 'Youthful Appearance',
            description:
                'Whiter teeth are often associated with youthfulness. As we age, our teeth naturally darken, but teeth whitening can reverse this effect, making you appear more youthful.',
        },
        {
            id: '3',
            topic: 'Stain Removal',
            description:
                'Teeth whitening effectively eliminates stubborn stains caused by coffee, tea, red wine, tobacco, and certain foods, restoring the natural vibrancy of your teeth.',
        },
        {
            id: '4',
            topic: 'Safe and Non-Invasive',
            description:
                'Teeth whitening procedures are generally safe and non-invasive. When performed under the guidance of a dental professional, they pose minimal risk to your oral health.',
        },
        {
            id: '5',
            topic: 'Customized Options',
            description:
                'Teeth whitening is not a one-size-fits-all solution. You can choose from various methods, such as in-office treatments or at-home kits, to suit your preferences and lifestyle.',
        },
    ]
    let img = teethwhiteimg
    return (
        <>
            <div>
                <NumericBullets
                    title="Benefits of Teeth Whitening"
                    titleDescription="The allure of teeth whitening extends far beyond its cosmetic appeal. Here are some key benefits that make it a popular choice"
                    largeDescription
                    hideSubtitle
                    description={description}
                    img={img}
                />
            </div>
        </>
    )
}

export default TeethWhitening
