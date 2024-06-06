import React from 'react'
import cx from 'classnames'
import bgimg01 from '../../assets/skinImg/background1.png'
import bgimg02 from '../../assets/skinImg/background2.png'
import img01 from '../../assets/skinImg/front1.png'
import img02 from '../../assets/skinImg/front2.png'
import ImageScale from '../common/reverseBolierPlate'

const Range = () => {
    const contentMatter = [
        {
            title: 'Advance medi facial with lactic',
            text: 'This power facial-peel combines the benefit of both peeling and facial. This luxurious sixty-minute service is ideal for de-tanning, deep hydration and skin brightening. It contains natural brightening extracts which are packed with AHAs, vitamin A and vitamin C. These organic extracts not only increase cell turnover to brighten and smooth the skin but also boost collagen production to prevent signs of aging. ',
            front: img01,
            bgimg: bgimg01,
        },
        {
            title: 'Insta glow skin therapy ',
            text: 'Insta glow skin therapy with fruit peels like mango & pumpkin which are high in antioxidants and enriched with vitamin C, vitamin E, vitamin A, potassium & zinc, which are all fabulous anti-ageing ingredients that can give your skin a rejuvenated, healthy glow. It soothes and protect your skin, nourish tired or dry skin, refresh and soften the skin, unclog the pores, remove impurities and help to control acne. It is an ultra-luxurious treatment that results in an incredibly glowing skin.',
            front: img02,
            bgimg: bgimg02,
            isReversed: true,
        },
    ]
    return (
        <div className="">
            <div className="mx-auto w-[95%] lg:w-[75%] mb-3 sm:mb-10">
                <p className="w-[95%] text-center text-[2.5rem] leading-[3.125rem] font-semibold py-4">
                    Range of treatments for skin brightening & pigmentation
                </p>
            </div>
            <ImageScale contentMatter={contentMatter} />
            <div className="bg-gradient-to-r from-[#632A3E] to-[#370541]">
                <div className=" w-[97%] md:w-[80%] mx-auto text-white text-center py-10 ">
                    <p className="font-semibold text-[28px] md:text-[33px] lg:text-[40px] leading-[40px] md:leading-[50px]">
                        What is a chemical peel?
                    </p>
                    <p className="py-3 font-normal text-[16px] sm:text-[18px] leading-[29px]">
                        A chemical peel is a cosmetic dermatological procedure
                        that uses specially formulated chemical solutions to
                        improve the texture and appearance of your skin. During
                        a chemical peel, the top layer of your skin is
                        exfoliated, encouraging the growth of new, healthier
                        skin cells. This treatment is highly effective in
                        addressing a variety of skin concerns, such as fine
                        lines, acne scars, age spots, and uneven skin tone.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Range
