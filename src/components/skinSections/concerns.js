import React from 'react'
import WhoShould from '../../assets/skinImg/benefitsFac.png'
import Treatment from '../../assets/skinImg/Treatment.png'
import Solutions from '../../assets/skinImg/Solutions.png'
import NumericBullets from '../common/NumericBullets'
import PicCatalog from '../common/PicCatalog'

const Concerns = () => {
    const count = {
        countingArr1: [
            {
                id: 1,
                description:
                    'For skin brightening & pigmentation, rejuvenating therapy is combined with main line of treatments.',
            },
            {
                id: 2,
                description:
                    'For acne scar reduction, rejuvenating therapy can be combined with micro needling and laser to enhance results.',
            },
            {
                id: 3,
                description:
                    'rejuvenating therapy can be used as anti-ageing treatments or, as a maintenance therapy.',
            },
            {
                id: 4,
                description: 'rejuvenating therapy helps in maintaining skin health.',
            },
            {
                id: 5,
                description:
                    'rejuvenating therapy gives goof results when combined with eye peels for dark circles.',
            },
            {
                id: 6,
                description:
                    'For hair fall & hair regrowth rejuvenating therapy is combined with hair meso therapies and hair booster therapies.',
            },
            {
                id: 7,
                description:
                    'Post hair transplant, rejuvenating therapy helps in boosting Hair Regrowth.',
            },
        ],
        countingArr2: [
            {
                id: 1,
                topic: 'Lip peeling',
                description:
                    'For skin brightening & pigmentation, rejuvenating therapy is combined with main line of treatments.',
            },
            {
                id: 2,
                topic: 'Micro pigmentation',
                description:
                    'Organic pigments of different shades of natural pink are used to match ur lip skin tone. These vegetable derived pigments are then induced in the skin of lips to create a permanent hue of natural and lighter lip color.',
            },
            {
                id: 3,
                topic: 'Lip skin resurfacing',
                description:
                    'Treatment to improve the texture and color of the lips. It works best for dry and rough lips with uneven skin tone and color tone.It gives a smoother texture and lighter color to the lips.',
            },
        ],
    }

    return (
        <>
            <div className="mt-6 grid gap-y-[40px] sm:gap-y-16">
                {/* 1st section */}
                <NumericBullets
                    title="Benefits of vampire facial"
                    hideTitleDesc
                    hideSubtitle
                    topicNotNeeded
                    img={WhoShould}
                    description={count.countingArr1}
                />
                {/* 2nd section */}
                <PicCatalog
                    img={Treatment}
                    title="Lip lightening treatments"
                    secondTitleNotNeeded
                    description="Dark lips are the most common issue faced by the majority of men
          in India. It occurs due to various reasons such as smoking,
          heredity, genetics, or simply due to extra melanin deposition in
          the lip area. It is the most prevalent problem faced by the
          majority of men of all ages, but can be effectively cured, not
          withstanding the period or extent for which dark lips has its
          effect."
                    isReversed="true"
                />
                {/* 3rd section */}
                <NumericBullets
                    title="We offer solutions basis the severity and causes of concerns"
                    hideSubtitle
                    hideTitleDesc
                    img={Solutions}
                    description={count.countingArr2}
                />
            </div>
        </>
    )
}

export default Concerns
