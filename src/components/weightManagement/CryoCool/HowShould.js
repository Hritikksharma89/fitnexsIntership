import React from 'react'
import who from '../../../assets/weightMangement/who.png'
import bgimg02 from '../../../assets/weightMangement/threadBgImg.png'
import bgimg03 from '../../../assets/weightMangement/emBgimg.png'
import img02 from '../../../assets/weightMangement/threadFrntImg.png'
import img03 from '../../../assets/weightMangement/emFrntImg.png'
import corgo from '../../../assets/weightMangement/cogoImg.png'
import em from '../../../assets/weightMangement/emSculptImg.png'
import lifts from '../../../assets/weightMangement/lifts.png'
import cons from '../../../assets/weightMangement/consultingImg.png'
import whos from '../../../assets/weightMangement/whoShouldImg.png'
import id from '../../../assets/weightMangement/idealConsImg.png'
import NumericBullets from '../../common/NumericBullets'
import ImageScale from '../../common/reverseBolierPlate'
import Do from '../../common/Do'
import PicCatalog from '../../common/PicCatalog'
import BulletsOnTextCard from '../../common/BulletOnTextCard'

const HowShould = () => {
    const content = [
        {
            id: 1,
            description:
                'For skin brightening & pigmentation, rejuvenating therapy is combined with main line of treatments',
        },
        {
            id: 2,
            description:
                'For acne scar reduction, rejuvenating therapy can be combined with micro needling and laser to enhance results',
        },
        {
            id: 3,
            description:
                'rejuvenating therapy can be used as anti-ageing treatments or as a maintenance therapy.',
        },
        {
            id: 4,
            description: 'rejuvenating therapy helps in maintaining skin health',
        },
        {
            id: 5,
            description:
                'rejuvenating therapy gives good results when combined with eye peels for dark circles',
        },
        {
            id: 6,
            description:
                'For hair fall & hair regrowth rejuvenating therapy is combined with hair meso therapies and hair booster therapies',
        },
        {
            id: 7,
            description:
                'Post hair transplant, rejuvenating therapy helps in boosting hair regrowth',
        },
    ]
    const contentone = [
        {
            title: 'Thread lift',
            text: '<div>Experience the transformation with non-surgical body tightening and lifting with our advanced thread lift treatments. A thread lift is a nonsurgical procedure that lifts sagging, aging skin and stimulates collagen production to give your face or neck a more youthful appearance. These threads activate the body’s natural healing response, triggering the increase of collagen. Threads come in several different materials and lengths.</div><div>At KOZA , we offer two powerful thread options: Cog Threads and Mono Threads, designed to help you achieve a firmer and more youthful appearance without surgery. The procedure can be done to create lift for – Face, Double Chin, B-Line, Upper Arms, Abdomen.</div> ',
            front: img02,
            bgimg: bgimg02,
        },
    ]
    const data = [
        {
            title: 'Cog threads',
            description:
                'Cog threads are equipped with tiny barbs or "cogs" that provide a superior lifting effect. They are ideal for addressing moderate to severe sagging in areas such as the face, neck, and body.',
        },
        {
            title: 'Mono threads',
            description:
                'Mono threads are smooth threads that stimulate collagen production and are perfect for mild to moderate skin laxity. They help improve skin texture and tone while providing a subtle lift.',
        },
    ]
    const backgroundImage = corgo
    const contentThree = [
        {
            id: 1,
            topic: 'Non-surgical',
            description:
                ' Thread lifts offer a non-invasive alternative to traditional surgical procedures, reducing downtime and recovery.',
        },
        {
            id: 2,
            topic: 'Natural-looking results',
            description:
                'Thread lifts provide gradual and natural-looking improvements, enhancing your beauty without an overdone appearance. ',
        },
        {
            id: 3,
            topic: 'Lifting and tightening',
            description:
                ' These treatments effectively lift sagging skin on various areas of the body, including the face, neck, arms, and abdomen.',
        },
        {
            id: 4,
            topic: 'Minimal discomfort',
            description:
                ' Most patients experience minimal discomfort during the procedure, which is well-tolerated with local anaesthesia.',
        },
    ]
    const contentFour = [
        {
            id: 1,
            description:
                'Have mild to moderate skin laxity on the face, neck, or body.',
        },
        {
            id: 2,
            description:
                'Seek a non-surgical option to lift and tighten sagging skin.',
        },
        {
            id: 3,
            description:
                'Are in good overall health and have realistic expectations about the procedure.',
        },
        {
            id: 4,
            description:
                'Desire a more youthful and rejuvenated appearance without the downtime of surgery.',
        },
    ]
    const contentFive = [
        {
            title: 'EM SCULPT',
            subtitle: '“Build muscle & sculpt your body” ',
            text: 'EM SCULPT is the worlds first treatment which helps patients build muscle and sculpt their bodies, non-invasively. It can also be used for an entirely non-invasive buttock-toning treatment. Muscles shape the body, and EMSCULPT may thus speed up the fitness journeys of patients and help them reach their body goals.',
            front: img03,
            bgimg: bgimg03,
            isReversed: true,
        },
    ]
    const contentSix = [
        {
            id: 1,
            topic: 'THE GOLD STANDARD',
            description:
                ' EMSCULPT was the first device to introduce the revolutionary HIFEM treatment for muscle sculpting',
        },
        {
            id: 2,
            topic: 'SUPPORTED BY SCIENCE',
            description: 'Results are backed up by dozens of clinical studies',
        },
        {
            id: 3,
            topic: 'OPERATOR INDEPENDENT',
            description:
                ' The procedure runs independently once applicators are affixed',
        },
    ]
    const contentSeven = [
        {
            id: 1,
            description: 'Are 18 years of age or older.',
        },
        {
            id: 2,
            description: 'Are in good overall health.',
        },
        {
            id: 3,
            description:
                ' Are committed to maintaining a healthy diet and engaging in a regular exercise routine.',
        },
        {
            id: 4,
            description: 'Maintain a stable and healthy weight.',
        },
        {
            id: 5,
            description:
                'Seek to enhance muscle definition in their abdominal or buttock areas.',
        },
    ]

    return (
        <div>
            <div className="my-4 md:my-16 ">
                <NumericBullets
                    title="Who should take this?"
                    hideSubtitle
                    topicNotNeeded
                    img={who}
                    description={content}
                />
            </div>
            <div className="py-2 md:py-5">
                <ImageScale contentMatter={contentone} />
            </div>
            <div className="py-2 md:py-5">
                <Do
                    data={data}
                    backgroundImage={backgroundImage}
                    buttonNotNeeded
                    isReversed
                    mainTitle="Options of threads - cog & mono"
                    hideMainDescription
                    pointsCentered
                />
            </div>
            <div className="py-2 md:py-5">
                <BulletsOnTextCard
                    isReversed
                    title="How thread lifts work?"
                    titleDescription="Thread lifts utilize biocompatible threads that are strategically inserted beneath the skin's surface. These threads gently lift and reposition sagging tissues, resulting in a firmer and more rejuvenated appearance. The threads also stimulate collagen production, enhancing skin elasticity over time."
                    subtitle="Benefits of thread lifts"
                    description={contentThree}
                    img={lifts}
                />
            </div>

            <div className="py-2 md:py-5">
                <NumericBullets
                    title="Who are the ideal candidates for thread lifts?"
                    hideTitleDesc
                    subtitle="Thread lifts are suitable for individuals who"
                    description={contentFour}
                    topicNotNeeded
                    img={id}
                />
            </div>

            <div className="py-2 md:py-5">
                <PicCatalog
                    isReversed
                    img={cons}
                    titleNotNeeded
                    secondTitleNotNeeded
                    description="During this consultation, we will discuss your goals, assess your candidacy for thread lifts, and answer any questions you may have. Contact us today to schedule your free consultation and take the first step toward a firmer and more lifted you. We are here to guide you through your transformation and enhance your overall well-being. Reach out to us now and embark on the path to a more youthful and rejuvenated appearance."
                />
            </div>
            <div>
                <ImageScale contentMatter={contentFive} />
            </div>
            <div className="py-2 md:py-5">
                <BulletsOnTextCard
                    isReversed
                    title="How does EMSCULPT work?"
                    titleDescription={
                        <div className="grid gap-y-6">
                            <p className="text-[18px] font-normal">
                                EMSCULPT is based on high-intensity focused
                                electromagnetic energy. A single EMSCULPT
                                session feels like thousands of powerful muscle
                                contractions which are extremely important in
                                improving the tone and strength of your muscles.
                            </p>
                            <p>
                                These powerful induced muscle contractions not
                                achievable through voluntary contractions. The
                                muscle tissue is forced to adapt to such extreme
                                condition. It responds with a deep remodelling
                                of its inner structure that results in muscle
                                building and sculpting your body.
                            </p>
                        </div>
                    }
                    subtitle="Key benefits"
                    description={contentSix}
                    img={em}
                />
            </div>
            <div className="py-2">
                <NumericBullets
                    title="Who should take it ?"
                    hideSubtitle
                    titleDescription="The ideal candidates for EMSCULPT muscle toning include individuals who"
                    description={contentSeven}
                    topicNotNeeded
                    img={whos}
                />
            </div>
        </div>
    )
}

export default HowShould
