import React from 'react'
import bg_chemical from '../../assets/Acne-scar/images/bg_chemical.png'
import Chemicalpeels from '../../assets/Acne-scar/images/Chemicalpeels.png'
import Microderma from '../../assets/Acne-scar/Microderma.png'
import NumericBullets from '../common/NumericBullets'
import PicCatalog from '../common/PicCatalog'

const MicroDerma = () => {
    const content = [
        {
            id: 1,
            description:
                'Skin looks healthier by removing dead cells from the skin.',
        },
        {
            id: 2,
            description: 'Helps in removal of tanning by sun exposure.',
        },
        {
            id: 3,
            description:
                'Aids in skin rejuvenation by removing fine lines, blemishes, age spots.',
        },
        {
            id: 4,
            description: ' Removal of blackheads, and impurities from pores.',
        },
        {
            id: 5,
            description: 'Unclog skin pores and reduce acne eruptions on face.',
        },
        {
            id: 6,
            description: 'Better penetration of product applied on face.',
        },
        {
            id: 7,
            description:
                'Microdermabrasion can also be a maintenance procedure used to treat hyperpigmentation that affects the epidermis only (superficial scarring).',
        },
        {
            id: 8,
            description:
                'Microdermabrasion is also used to address texture concerns. These include: acne scars, age spots, Chicken pox scars, injury scars, sun damage.',
        },
    ]

    return (
        <>
            <div className="py-4 md:py-8">
                <NumericBullets
                    title="Benefits of microdermabrasion (MDA)"
                    topicNotNeeded
                    hideSubtitle
                    img={Microderma}
                    description={content}
                />
            </div>
            <div
                className="bg-no-repeat my-5 bg-cover py-14"
                style={{ backgroundImage: `url(${bg_chemical})` }}
            >
                <p className=" text-[28px] md:text-[33px] text-white text-center py-2 lg:text-[2.5rem] font-semibold md:leading-[3.125rem]">
                    Chemical Peels
                </p>
                <div className="w-[90%] mx-auto">
                    <PicCatalog
                        titleNotNeeded
                        second_title="What is it?"
                        className=""
                        img={Chemicalpeels}
                        description="<div>In India, from ancient times, as a part of home remedy, many natural products are applied to keep the skin healthy. Lemon juice is applied on face which is rich in citric acid. Similarly, turmeric is applied for a brighter and glowing skin, which contains traces of curcumin</div><div>Also, milk, which is a rich source of lactic acid is considered beneficial for a radiant skin. These all are gifts of mother nature, which contain marvellous natural substances that are beneficial for the skin.</div> <div>Chemical Peels are nothing but a stronger concentrated form of these natural extracts and active ingredients. Such concentrates are emanated from the choicest organic sources in its purest form and applied on skin by a dermatologist to treat certain acne, pigmentation and to achieve best health for the skin.</div>"
                        isTextWhite
                        isReversed
                    />
                </div>
            </div>
        </>
    )
}
export default MicroDerma
