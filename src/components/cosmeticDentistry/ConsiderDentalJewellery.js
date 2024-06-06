import React from 'react'
import image from '../../assets/cosmeticDentist/considerDentalJewellery.svg'
import BulletsOnTextCard from '../common/BulletOnTextCard'

const ConsiderDentalJewellery = () => {
    let description = [
        {
            id: '1',
            topic: 'Seek a unique smile enhancement',
            description:
                'If you want to stand out and make a statement with your smile, dental jewellery offers a distinctive and eye-catching option.',
        },
        {
            id: '2',
            topic: 'Value individuality',
            description: `Dental jewellery allows you to express your individuality and personal style, making it an appealing choice for those who love to accessorize.`,
        },
        {
            id: '3',
            topic: 'Desire a temporary change',
            description: `For individuals who want to enhance their smile temporarily or experiment with different looks, tooth gems provide a versatile solution.`,
        },
        {
            id: '4',
            topic: 'Wish to avoid invasive procedures',
            description: `If you prefer non-invasive cosmetic dental enhancements and want to avoid procedures that involve drilling or significant alterations to your teeth, dental jewellery is a suitable choice.`,
        },
    ]
    let img = image
    return (
        <div className="mt-[2rem] md:mt-[7rem]">
            <div className="px-4 md:pl-20">
                <BulletsOnTextCard
                    title="Who should consider dental jewellery (Tooth Gems)?"
                    titleDescription="Dental jewellery, or tooth gems, are an excellent option for individuals who"
                    description={description}
                    img={img}
                    isReversed={true}
                    imgCenterYaxis
                />
            </div>
            <div className="bg-gradient-to-r from-[#632A3E] to-[#370541] text-center text-[#fff] mt-10 py-8 px-16">
                <p className="text-[18px] md:text-[1.5rem] md:leading-[36px] font-normal">
                    In summary, dental jewellery, or tooth gems, offer a fun and
                    fashionable way to enhance your smile without any invasive
                    procedures or damage to your enamel. With a variety of
                    designs to choose from, it's a customizable and temporary
                    enhancement that allows you to express your unique style and
                    individuality through your smile. Whether you're looking for
                    a special accent for an event or simply want to add a touch
                    of sparkle to your everyday life, dental jewellery can be a
                    delightful and non-permanent addition to your smile. Consult
                    with Koza’s dental professional to explore your options and
                    discover how dental jewellery can elevate your smile.
                </p>
            </div>
        </div>
    )
}

export default ConsiderDentalJewellery
