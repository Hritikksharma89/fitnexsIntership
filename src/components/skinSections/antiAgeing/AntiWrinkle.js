import React from 'react'
import PicCatalog from '../../common/PicCatalog'
import dd from '../../../assets/skinImg/antiageingimg/dd.png'
import bothersome from '../../../assets/skinImg/antiageingimg/bothersome.png'
import bgimg from '../../../assets/skinImg/antiageingimg/outcome.png'
import frontimg from '../../../assets/skinImg/antiageingimg/frontoutcome.png'

import Glabellar from '../../../assets/skinImg/antiageingimg/Glabellar.png'
import Frownlines from '../../../assets/skinImg/antiageingimg/Frownlines.png'
import ImageScale from '../../common/reverseBolierPlate'
import NumericBullets from '../../common/NumericBullets'

const AntiWrinkle = () => {
    const contenttwo = [
        {
            id: 1,
            topic: 'Wrinkles around eyes',
            description:
                'These are known as crow’s feet or laugh lines. The area around and beneath the eyes is the first to lose skin elasticity, thus causing fine lines that later develops into wrinkles. These are the biggest culprit in letting out your age and even making an individual look older than they actually are!',
        },
        {
            id: 2,
            topic: 'Glabellar lines',

            description:
                ' Who wants to look angry all the time? These lines also known as forehead furrows is the area extending between both the eyebrows and the wrinkle on this area gives face a very hard look. If not cared for timely, these lines become static and give a constant angry look to the face. ',
        },
        {
            id: 3,
            topic: 'Bunny lines',

            description:
                'These are the wrinkles that appear on the nose, more visible when we laugh or smile deeply. It is a sign of ageing and genetics and is seen multiple members of the family.',
        },
        {
            id: 4,
            topic: 'Chin crease',

            description:
                'Also known as mental crease it is formed between chin and lower lip area, having a chin crease makes the chin appear forward. Most of the time it is genetic but becomes more prominent as with age.',
        },
        {
            id: 5,
            topic: 'Marionette lines',

            description:
                'This line extends from the corner of the mouth to the chin area. It gives the face sad and old look. It is an ideal target for anti-wrinkle injection treatment. It is mainly seen in between 35-40 years of age but may appear early in case of stress or multiple pregnancies or hormonal changes.',
        },
    ]

    const contentthree = [
        {
            id: 6,
            topic: 'Frown lines',
            description:
                'These are the lines seen on the forehead. It is mostly seen as age progresses and is caused by repeated action of muscles. If not relaxed on time with treatments, these lines become static and give a constant worried appearance to the face',
        },
        {
            id: 7,
            topic: 'Eyebrow lift',

            description:
                ' With age the skin around eyebrows sags down. Lifting the eyebrows and creating an arch reduces the sagged look of the skin on upper eyebrows. ',
        },
        {
            id: 8,
            topic: 'Top lip lines',

            description:
                'Wrinkles on the lip and the area above lip, also known as smokers lines can be treated by a few shots. ',
        },
        {
            id: 9,
            topic: 'Neck Lines',

            description:
                'The skin of the neck area loses its fat and appearance of wrinkles on the neck spoils the charm of the face. These can be treated with anti-wrinkle injection.',
        },
        {
            id: 10,
            topic: 'Hyperhidrosis',

            description:
                'There is a lot of sweating in underarms that causes excess body odour and embarrassment. The same injection can be used to reduce this problem.',
        },
    ]
    const Content = [
        {
            title: 'How do wrinkles form?',
            text: '<div> Wrinkles are a natural outcome of the ageing process. The facial muscles repeatedly contract and expand with changing facial expressions over the lifetime</div> <div>As we grow older, however, the dermis (middle layer of the skin) slowly loses elasticity-providing ingredients – collagen and elastin. The fatty subcutaneous (bottommost) layer of the skin also loses fat over time. </div> <div> When these things happen, the skin gets thinner and less moisture gets to the epidermis (the outer layer of the skin). The epidermis begins to sag, creating wrinkles. The extent of wrinkles also depends upon the lifestyle and heredity.,/div>',
            front: frontimg,
            bgimg: bgimg,
            isReversed: true,
        },
    ]
    return (
        <>
            <div className="py-3">
                <p className=" text-center text-[28px] sm:text-[33px] lg:text-[40px] leading-[30px] md:leading-[50px] py-2 font-semibold">
                    Anti Wrinkle Program
                </p>
                <div className="py-2 md:py-5">
                    <PicCatalog
                        isReversed
                        titleNotNeeded
                        second_title="What it is?"
                        description="<div>As we grow older the skin starts losing its elasticity leading to appearance of fine lines and wrinkles. While it is impossible to stop wrinkles, there are successful ways to delay and eliminate them.</div><div>Anti-Wrinkle Program is generally a customised program with a combination of treatments basis the severity of signs of ageing to deliver the desired outcome.</div>"
                        img={dd}
                    />
                </div>

                <div className="py-2 md:py-5">
                    <ImageScale contentMatter={Content} />
                </div>

                <div className="py-2 md:py-5 lg:px-10">
                    <PicCatalog
                        isReversed
                        description="<div>For the bothersome lines near eyes or the constant horizontal and vertical ridges on the forehead, anti-wrinkle injection can be used to make the unwanted lines and ridges disappear.</div><div>We use Botulinum toxin which is a neurotoxic protein to relaxes muscles, prevents skin from creasing and causing wrinkles. It is effective for smoothing out expression-lines, such as frown and surprise-lines on the forehead and crow’s-feet around the eyes, and turkey-neck – lines on the throat. </div> <div> The treatment is becoming increasingly popular, with some people even taking it as a preventive treatment.,/div>"
                        img={bothersome}
                    />
                </div>
                <div className="py-2 md:py-5 mt-10">
                    <NumericBullets
                        img={Glabellar}
                        title="Who should take this?"
                        hideSubtitle
                        description={contenttwo}
                    />
                </div>
                <div className="py-2 md:py-5">
                    <NumericBullets
                        isReversed
                        description={contentthree}
                        img={Frownlines}
                    />
                </div>
            </div>
        </>
    )
}

export default AntiWrinkle
