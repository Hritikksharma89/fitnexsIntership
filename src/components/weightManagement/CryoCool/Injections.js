import React from 'react'
import img01 from '../../../assets/weightMangement/mesoFront.png'
import bgimg01 from '../../../assets/weightMangement/MesoBg.png'
import de from '../../../assets/weightMangement/deImg.png'
import fat from '../../../assets/weightMangement/fatxImg.png'
import lipo from '../../../assets/weightMangement/lipoImg.png'
import principle from '../../../assets/weightMangement/principleImg.png'
import zero from '../../../assets/weightMangement/zeroSizeImg.png'
import fati from '../../../assets/weightMangement/fatImg.png'
import ideal from '../../../assets/weightMangement/idealCandidateImg.png'
import bgimg02 from '../../../assets/weightMangement/UltherapyBgImg.png'
import img02 from '../../../assets/weightMangement/UltherapyFrntImg.png'
import ul from '../../../assets/weightMangement/ulBeniftsImg.png'
import candidates from '../../../assets/weightMangement/ulCandiImg.png'
import Rediscover from '../../../assets/weightMangement/rediscoverImg.png'
import ImageScale from '../../common/reverseBolierPlate'
import PicCatalog from '../../common/PicCatalog'
import NumericBullets from '../../common/NumericBullets'
import Do from '../../common/Do'
import TextCard from '../../common/textCard'
import Mesoimage from '../../../assets/weightMangement/bgImgs/mesoimg.png'
import Ultherapy from '../../../assets/weightMangement/bgImgs/Ultherapy.png'
import AboutServices from '../../common/AboutServices'

const Injections = () => {
    const content = [
        {
            text: '<div>Many of our patients follow a healthy diet and get regular exercise but still carry fat around their midsection and other spots. This is where a stubborn fat removal treatment like injections can make a difference.</div><div>Our innovative anti-fat injections can promptly deliver the results you desire, giving you a naturally sculpted appearance that harmonises beautifully with your unique bone structure and overall body objectives.</div>',
            front: img01,
            bgimg: bgimg01,
            isReversed: true,
        },
    ]
    const contentSlider = [
        {
            Img: de,
            topic: 'DE-Fat Solution ',
        },
        {
            Img: fat,
            topic: 'Fat X',
        },
        {
            Img: lipo,
            topic: 'Lipo Meso Therapy ',
        },
    ]
    const contentThree = [
        {
            id: 1,
            topic: 'Non-Invasive',
            description:
                ' Fat dissolving injections offer a non-surgical alternative to liposuction, eliminating the need for incisions and anaesthesia. This results in minimal downtime and a lower risk of complications.',
        },
        {
            id: 2,
            topic: 'Localized Fat Reduction',
            description:
                'These injections are ideal for targeting stubborn pockets of fat that are resistant to diet and exercise. Common treatment areas include the chin (double chin), abdomen, thighs, and love handle.',
        },
        {
            id: 3,
            topic: 'Gradual Results',
            description:
                'Fat reduction occurs gradually over several weeks, providing natural-looking results. This gradual process allows for subtle and even fat reduction, avoiding abrupt changes in appearance.',
        },
        {
            id: 4,
            topic: 'Improved Contour',
            description:
                'By reducing fat in specific areas, fat dissolving injections can enhance body contours and provide a more sculpted appearance.',
        },
        {
            id: 5,
            topic: 'Boosted Self-Confidence',
            description:
                'Achieving a slimmer, more contoured physique can boost self-esteem and improve overall body image. ',
        },
    ]
    const data = [
        {
            description:
                'Have localized fat deposits in areas resistant to diet and exercise efforts. ',
        },
        {
            description:
                'Are at or near their target weight but desire further body contouring.',
        },
        {
            description: 'Seek a non-surgical option for fat reduction.',
        },
        {
            description:
                "Have good skin elasticity, as the treatment relies on the skin's ability to adjust to the reduced fat volume.",
        },
        {
            description:
                'Are in good overall health and have realistic expectations about the results.',
        },
    ]
    const datatwo = [
        {
            description:
                'Ultherapy works on the principle of focused ultrasound energy. During the treatment, our skilled practitioners use an ultrasound device to deliver precise energy deep beneath the skin',
        },
        {
            description:
                'This energy stimulates collagen production and tightens the skins foundational layer, resulting in a natural lifting and firming effect over time.',
        },
        {
            description:
                'The procedure is safe, comfortable, and provides gradual, long-lasting results.',
        },
    ]
    const contentfour = [
        {
            title: '7D Ultherapy Lift',
            subtitle: '“Elevate Your Beauty with 7 D Ultherapy”',
            text: `Experience the future of non-invasive skin rejuvenation with Ultherapy, 
            a revolutionary treatment that harnesses the power of ultrasound to lift, tighten, and rejuvenate your skin.
             At KOZA , we are proud to offer this cutting-edge technology to help you achieve a more youthful appearance without surgery or downtime`,
            front: img02,
            bgimg: bgimg02,
        },
    ]
    const contentfive = [
        {
            id: 1,
            topic: 'Non-Invasive',
            description:
                'Ultherapy is a non-surgical treatment, meaning it requires no incisions, anaesthesia, or downtime, allowing you to return to your daily activities immediately.',
        },
        {
            id: 2,
            topic: 'Natural Results',
            description:
                'The gradual stimulation of collagen results in natural-looking rejuvenation, avoiding the "overdone" appearance often associated with surgical procedures.',
        },
        {
            id: 3,
            topic: 'Lift and Tightening',
            description:
                'Ultherapy can effectively lift and tighten sagging skin on the face, neck, and décolletage, addressing common signs of aging.',
        },
        {
            id: 4,
            topic: 'Minimal Discomfort',
            description:
                'Most patients experience only mild discomfort during the procedure, which is well-tolerated without the need for anesthesia.',
        },
    ]
    const contentsix = [
        {
            description:
                'Have mild to moderate skin laxity on the face, neck, or chest.',
        },
        {
            description:
                'Desire a non-invasive alternative to facelift surgery.',
        },
        {
            description:
                'Are in good overall health and have realistic expectations about the procedure.',
        },
        {
            description:
                'Seek a gradual and natural improvement in their skin"s firmness and tone.',
        },
    ]
    let paragraphs = [
        'Say goodbye to your double chin or those stubborn love handles, thanks to the transformative power of Meso Sculpt – Fat Dissolving Injections available at KOZA Aesthetic Care.These are non-surgical cosmetic treatments that aim to reduce unwanted fat around the body',
        'Patients often carry excess fat around the stomach, thighs, hips, and buttocks. These problem areas tend to be stubborn when it comes to losing unwanted fat and creating a more toned appearance. ',
    ]
    return (
        <>
            <div className="pt-4">
                <div className="px-8">
                    <TextCard
                        cardTitle="Meso sculpt injections"
                        paragraphs={paragraphs}
                        img={Mesoimage}
                        action="Book Appointment Now"
                        isReversed
                    />
                </div>
                <AboutServices
                    title="We have a range of services under fat dissolving injections"
                    largeGap
                    content={contentSlider}
                />
            </div>
            <div>
                <ImageScale contentMatter={content} />
                <PicCatalog
                    secondTitleNotNeeded
                    isReversed
                    img={principle}
                    title="Working principle"
                    description="<div>Fat dissolving injections work through a process known as lipolysis, which is the breakdown of fat cells.</div><div>The injected substance works to break down the fat cells in the treated area.</div><div>It essentially disrupts the cell membranes of the fat cells, causing them to release their stored fat content.</div>"
                />
                <div className="mt-14">
                    <NumericBullets
                        title="Benefits - fat dissolving injections"
                        hideSubtitle
                        titleDescription="Fat dissolving injections, also known as injectable lipolysis or mesotherapy, are a non-surgical cosmetic procedure designed to reduce localized fat deposits in specific areas of the body. Here are the benefits of fat dissolving injections and who may benefit from them"
                        img={fati}
                        description={contentThree}
                    />
                </div>
                <Do
                    mainTitle="Who are the ideal candidates?"
                    hideMainDescription
                    subDescription="Fat dissolving injections may be suitable for individuals who"
                    data={data}
                    pointsCentered
                    titleNotNeeded
                    backgroundImage={ideal}
                    buttonNotNeeded
                    colorForWhiteBG
                />
                <PicCatalog
                    img={zero}
                    titleNotNeeded
                    secondTitleNotNeeded
                    description="It's crucial to consult with our experts to determine if fat dissolving injections are suitable for your unique needs and goals. They can assess your eligibility, discuss potential concerns and create a personalized treatment plan to help you achieve your desired results."
                />
                <ImageScale contentMatter={contentfour} />
                <Do
                    titleNotNeeded
                    pointsCentered
                    hideMainDescription
                    subTitle="How ultherapy works?"
                    data={datatwo}
                    backgroundImage={Ultherapy}
                    isReversed
                    colorForWhiteBG
                    buttonNotNeeded
                />
                <div className="py-2 md:py-5">
                    <p className="text-center text-[2.5rem] leading-[3.125rem] font-semibold py-4 md:py-10">
                        Benefits of ultherapy
                    </p>
                    <NumericBullets
                        img={ul}
                        hideSubtitle
                        hideTitleDesc
                        description={contentfive}
                        bulletContentsOnly
                        isReversed
                    />
                </div>
                <Do
                    data={contentsix}
                    mainTitle="Who is the ideal candidate for ultherapy?"
                    titleNotNeeded
                    pointsCentered
                    hideMainDescription
                    backgroundImage={candidates}
                    buttonNotNeeded
                    colorForWhiteBG
                    subDescription="Ultherapy is suitable for individuals who"
                    isReversed
                />
                <PicCatalog
                    img={Rediscover}
                    isReversed
                    secondTitleNotNeeded
                    titleNotNeeded
                    description="Rediscover your natural beauty and elevate your confidence with Ultherapy at KOZA. We are here to guide you through your transformation and enhance your overall well-being. To help you make an informed decision, we offer a complimentary consultation with our experienced team. During this consultation, we will discuss your goals, assess your candidacy for Ultherapy, and answer any questions you may have. Contact us today to schedule your free consultation and take the first step toward a more lifted and youthful appearance"
                />
            </div>
        </>
    )
}

export default Injections
