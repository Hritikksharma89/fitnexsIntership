import React from 'react'
import bgimg01 from '../../assets/Acne-scar/MDA/bgglands.png'
import bgimg02 from '../../assets/Acne-scar/MDA/bgMDA.png'
import img01 from '../../assets/Acne-scar/MDA/frontgland.png'
import img02 from '../../assets/Acne-scar/MDA/frontMDA.png'
import ImageScale from '../common/reverseBolierPlate'

const MediFacial = () => {
    const contentMatter = [
        {
            sectionHeading: 'Medi facial - anti acne',
            title: 'What is it?',
            text: '<div>A no massage facial with therapeutic ingredients like Salicylic acid and tea tree extract designed to effectively target breakouts specifically for acne prone skin. </div> <div> It purifies and controls existing breakouts while helping to prevent new ones from forming. Reduces oil from overly active sebaceous glands while maintaining skin moisture balance. This pure and refining treatment allows cleansing deep down while soothing and healing lesions, leaving skin with renewed freshness and purity.</div>',
            front: img01,
            bgimg: bgimg01,
        },
        {
            sectionHeading: 'Microdermabrasion (MDA)',
            title: 'What is it?',
            text: '<div>It is a scientific and hi-tech method to remove dead skin from face, which is safe and effective with no side effects.</div> <div> Dead skin is a common phenomenon and we generally tend to scrub or cleanse our face to eliminate it. This practise is harmful, as the facial skin is very delicate and wrong product and wrong amount of pressure can damage the skin which may lead to redness, acne and rashes. The best alternative for the above is MDA. It can be done every 15-20 days for oily skin and monthly for sensitive skin to keep it clean and glowing in its natural form.</div>',
            front: img02,
            bgimg: bgimg02,
            isReversed: true,
        },
    ]

    return (
        <>
            <div className="py-2 md:py-5">
                <ImageScale contentMatter={contentMatter} />
            </div>
        </>
    )
}
export default MediFacial
