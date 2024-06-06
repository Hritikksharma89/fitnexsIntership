import React from 'react'
import ImageScale from '../../common/reverseBolierPlate'
import bgimg from '../../../assets/skinImg/antiageingimg/Treatments.png'
import frontimg from '../../../assets/skinImg/antiageingimg/Treatmentsfront.png'
import NumericBullets from '../../common/NumericBullets'
import concern from '../../../assets/skinImg/antiageingimg/concern.png'
import Blotchiness from '../../../assets/skinImg/antiageingimg/Blotchiness.png'

const AgeingSkin = () => {
    const Content = [
        {
            title: 'Skin ageing & treatments',
            text: '<div>Everybody dreams of young-looking skin. With passing age, one cannot get rid of wrinkles, dark spots, fine lines, etc without proper treatment. Consult our skin experts which offers anti-aging treatments that suit your skin.</div> <div> Beautiful skin is a greater signifier of youth than being free of lines and wrinkles. However, the skin is quick to show the visible signs of ageing, commonly known as the Seven Signs of Ageing.</div>',
            front: frontimg,
            bgimg: bgimg,
            isReversed: true,
        },
    ]

    const contenttwo = [
        {
            id: 1,
            topic: 'Fine lines and wrinkles',
            description: 'Fine lines, crow’s feet and wrinkles are the most evident and often most concern-causing signs of ageing for men and women. Wrinkles are a result of the elastin and collagen fibres, which keep our skin firm and taut, weakening. This leads to skin looseness and laxity and the subsequent wrinkles.',
        },
        {
            id: 2,
            topic: 'Dullness of skin',
            description:
                'The glowing, dewy skin of youth slowly fades with age. The result is a dulled complexion due to the depleted moisture levels in the top layer of the skin, which naturally occurs with age. While young skin renews itself at every three to four weeks, older skin is slower to renew itself at every four to six weeks.',
        },
        {
            id: 3,
            topic: 'Uneven skin tone',
            description:
                'Ageing causes the complexion to become uneven in certain places. This may be due to parts of the skin harbouring more melanin than others, or the function in the hormonal levels in females. This unevenness can lead to skin looker older than its years.',
        },
        {
            id: 4,
            topic: 'Dry skin',
            description: 'Young, healthy skin has a high moisture content, leading to a fresh, dewy and radiant appearance, Over the ageing process this depletes as the skin loses its ability to retain the moisture. Older skin is often characterised by dryness and dehydration.',
        },
    ]

    const contentthree = [
        {
            id: 5,
            topic: 'Blotchiness and age spots',
            description: 'Thinning skin associated with ageing leads to the increased visibility of tony bloods vessels that appear. Age spots or liver spots, which are reddish or brown in colour, are caused mostly by over-exposure to UV rays and become more evident in ageing skin. They produce a blotchy look that contributes to an aged appearance.',
        },
        {
            id: 6,
            topic: 'Rough skin texture',
            description: 'As the skin matures, changes in texture become noticeable. Skin that was once baby-soft and smooth becomes uneven and bumpy on the surface due to the layers of dead cells and the cell turnover slowing. ',
        },
        {
            id: 7,
            topic: 'Visible pores',
            description: 'Pores become enlarged or more visible with age due to loss of skin elasticity and skin being drawn down by gravity.',
        },
    ]
    return (
        <>
            <div className="py-2">
                <ImageScale contentMatter={Content} />
            </div>
            <div className="w-[85%] mx-auto text-center py-2 px-4">
                <p className="text-[18px] md:text-[24px] lg:leading-[36px]">
                    While some of the skin-related factors can be reined in with
                    healthy lifestyle choices and a good skincare regime, many
                    of the characteristics of ageing are a matter of genetics.
                </p>
            </div>

            <div className="py-2 md:py-5">
                <NumericBullets
                    isReversed
                    description={contenttwo}
                    img={concern}
                />
            </div>
            <div className="py-2 md:py-5">
                <NumericBullets description={contentthree} img={Blotchiness} />
            </div>
            <div className="bg-gradient-to-r from-[#632A3D] to-[#350340] text-[#fff] my-6 md:mt-14 py-2">
                <div className="w-[85%] mx-auto py-2 md:py-6">
                    <p className="text-center text-[28px] sm:text-[33px] lg:text-[40px] leading-[40px] lg:leading-[60px] font-semibold">
                        What causes our skin to age?
                    </p>
                    <p className="text-[15px] sm:text-[18px] py-2 sm:py-5 text-center text-normal lg:leading-[36px]">
                        There are a range of different factors that cause our
                        skin to age both as a result of the natural ageing
                        process, environmental and lifestyle factors. Ultra
                        violet rays are a major contributor to skin ageing in
                        australia, although smoking, stress, medication,
                        climate, alcohol and several others way in.
                    </p>
                </div>
            </div>
        </>
    )
}

export default AgeingSkin
