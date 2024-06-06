import React from 'react'
import benefitOfDentalAlignerImg from '../../assets/cosmeticDentist/benefitOfDentalAligner.svg'
import NumericBullets from '../common/NumericBullets'

const BenefitOfDentalAligner = () => {
    let title = 'Benefits of dental aligners'
    let description = [
        {
            id: '1',
            topic: 'Invisibility and aesthetics',
            description:
                'One of the primary advantages of dental aligners is their near invisibility. Made from clear, BPA-free plastic, they blend seamlessly with your natural teeth. This discreetness allows you to straighten your teeth without the conspicuous appearance of traditional braces, giving you the confidence to smile throughout your treatment.',
        },
        {
            id: '2',
            topic: 'Comfort and convenience',
            description:
                'Dental aligners are remarkably comfortable to wear. Their smooth, customized fit minimizes irritation to the soft tissues of your mouth, reducing the discomfort often associated with traditional braces. Additionally, aligners can be easily removed for eating, brushing, and flossing, making them a convenient choice for maintaining oral hygiene.',
        },
        {
            id: '3',
            topic: 'Precise and predictable results',
            description:
                'Dental aligners are designed using advanced digital technology to ensure precise and predictable outcomes. Your treatment plan is carefully mapped out, allowing you to visualize the progression of your smile transformation from start to finish.',
        },
        {
            id: '4',
            topic: 'Versatile applications',
            description:
                'Dental aligners are effective for addressing a wide range of orthodontic issues, including crowded teeth, gaps, overbites, underbites, and crossbites. They offer a versatile solution for both adults and teenagers seeking orthodontic treatment.',
        },
        {
            id: '5',
            topic: 'Shorter treatment duration',
            description:
                'In many cases, dental aligners can achieve the desired results in a shorter time frame compared to traditional braces. While treatment duration varies depending on individual needs, the efficiency of aligners is often appreciated by those seeking a quicker solution.',
        },
    ]
    let img = benefitOfDentalAlignerImg
    return (
        <>
            <div className="my-12">
                <NumericBullets
                    title={title}
                    description={description}
                    hideSubtitle
                    hideTitleDesc
                    img={img}
                />
            </div>
        </>
    )
}

export default BenefitOfDentalAligner
