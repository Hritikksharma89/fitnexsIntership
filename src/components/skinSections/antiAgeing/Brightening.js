import React from 'react'
import NumericBullets from '../../common/NumericBullets'
import Do from '../../common/Do'
import skinPRP from '../../../assets/skinImg/antiageingimg/brightness.png'
import cosmetologist from '../../../assets/skinImg/antiageingimg/cosmetologist.png'
import Ultherapy from '../../../assets/skinImg/antiageingimg/Ultherapy.png'
import ULTRASOUND from '../../../assets/skinImg/antiageingimg/ULTRASOUND.png'
import photodamaged from '../../../assets/skinImg/antiageingimg/photodamaged.png'

import PicCatalog from '../../common/PicCatalog'

const Brightening = () => {
    const content = [
        {
            id: 1,
            description:
                ' For Skin Brightening & Pigmentation, rejuvenating therapy is combined with main line of treatments',
        },
        {
            id: 2,
            description:
                ' For Acne Scar Reduction, rejuvenating therapy can be combined with Micro needling and Laser to enhance results ',
        },
        {
            id: 3,
            description:
                'For Acne Scar Reduction, rejuvenating therapy can be combined with Micro needling and Laser to enhance results ',
        },
        {
            id: 4,
            description: 'rejuvenating therapy helps in maintaining Skin Health ',
        },
        {
            id: 5,
            description:
                'rejuvenating therapy gives good results when combined with Eye Peels for Dark Circles',
        },
    ]
    const data = [
        {
            index: 1,
            description:
                'An expert certified cosmetologist performs the treatment.',
        },
        {
            index: 2,
            description: 'Every problematic area of the face is treated.',
        },
        {
            index: 3,
            description:
                'There is no major downtime and with all treatment noticeable changes are observed on the skin.',
        },
        {
            index: 4,
            description:
                'US FDA approved methods and centrifuge instruments are used for procedure.',
        },
        {
            index: 5,
            description:
                'Sterilization and maintenance of equipment according to medical guidelines and standards.',
        },
    ]
    const contenttwo = [
        {
            id: 1,
            description:
                'Ultherapy relies on ultrasound therapy to go deeper than other non-invasive treatments for collagen stimulation.',
        },
        {
            id: 2,
            description:
                'It leverages traditional ultrasound imaging so we can see the layers of tissue it is treating.',
        },
        {
            id: 3,
            description:
                'This ensures the treatment energy is delivered to where it benefits you most.',
        },
        {
            id: 4,
            description:
                'The increase in collagen results in tighter, firmer skin. Since the high-frequency ultrasound beams are focused on a specific tissue site below the skin’s surface, there’s no damage to the upper layers of the skin and adjacent issue.',
        },
    ]
    return (
        <>
            <div className="my-2 md:mt-16 md:mb-5">
                <NumericBullets
                    description={content}
                    img={skinPRP}
                    title="Who should take this?"
                    hideSubtitle
                    topicNotNeeded
                />
            </div>
            <div className="my-2 md:my-5">
                <div className="bg-gradient-to-r from-[#632A3E] to-[#370541] pb-10">
                    <Do
                        data={data}
                        mainTitle="What's at koza?"
                        index={data.index}
                        pointsCentered
                        titleNotNeeded
                        mainDescription="The lines, wrinkles and sagging of skin is largely diminished by following the best grade protocols and use of FDA approved growth factor tubes for face that are enriched with hyaluronic acid and beta carotene to hydrate the skin and provide required antioxidants."
                        backgroundImage={cosmetologist}
                        buttonNotNeeded
                        bulletImagesNotNeeded
                        colorReversal
                    />
                </div>

                <div className="my-2 md:my-[80px]">
                    <p className="mb-6 text-center text-[#060606] text-[2rem] sm:text-[2.5rem] font-semibold leading-[3.125rem]">
                        7 D Ultherapy
                    </p>
                    <PicCatalog
                        isReversed
                        img={Ultherapy}
                        titleNotNeeded
                        second_title="What it is?"
                        description="Ultherapy is the only FDA-cleared, non-invasive procedure that lifts the neck, chin and brow and improves lines and wrinkles on the upper chest and other parts of the body. Through the ultrasound imaging with Ultherapy, energy is delivered precisely to the place where it will benefit you most—for natural-looking results that improve over time."
                    />
                </div>
                <div className="py-2 md:py-5">
                    <NumericBullets
                        description={contenttwo}
                        img={ULTRASOUND}
                        titleDescription="How it works?"
                        boldLargeDescription
                        subtitle="Ultrasound, not surgery"
                        topicNotNeeded
                    />
                </div>
                <div className="py-2 px-2 md:px-10">
                    <PicCatalog
                        isReversed
                        img={photodamaged}
                        titleNotNeeded
                        second_title="Who should take it?"
                        description="Ultherapy is the only FDA-cleared, non-invasive procedure that lifts the neck, chin and brow, and improves lines and wrinkles on the upper chest and other parts of the body. Through the ultrasound imaging with Ultherapy, energy is delivered precisely to the place where it will benefit you most—for natural-looking results that improve over time."
                    />
                </div>
            </div>
        </>
    )
}

export default Brightening
