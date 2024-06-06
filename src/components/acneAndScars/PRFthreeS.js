import React from 'react'
import PicCatalog from '../common/PicCatalog'
import prf from '../../assets/Acne-scar/images/prfimg.png'
import takethis from '../../assets/Acne-scar/images/Takethis.png'
import fliter from '../../assets/Acne-scar/images/fliters.png'
import NumericBullets from '../common/NumericBullets'

const PrfThreeSection = () => {
    const content = [
        {
            id: 1,
            description:
                'For Skin Brightening & Pigmentation, rejuvenating therapy is combined with main line of treatments ',
        },
        {
            id: 2,
            description:
                'For Acne Scar Reduction, rejuvenating therapy can be combined with Micro needling and Laser to enhance results  ',
        },
        {
            id: 3,
            description:
                'rejuvenating therapy can be used as Anti-Ageing treatments or as a maintenance therapy. ',
        },
        {
            id: 4,
            description: 'rejuvenating therapy helps in maintaining Skin Health  ',
        },
        {
            id: 5,
            description:
                ' rejuvenating therapy gives good results when combined with Eye Peels for Dark Circles',
        },
        {
            id: 6,
            description:
                'For Hair Fall & Hair regrowth rejuvenating therapy is combined with Hair Meso Therapies and Hair Booster Therapies ',
        },
        {
            id: 7,
            description:
                ' Post Hair Transplant, rejuvenating therapy helps in boosting Hair Regrowth',
        },
    ]

    return (
        <>
            {/* <PicCatalog
                isReversed
                img={prf}
                title="Benefits of Microneedling rejuvenating therapy"
                description="People may consider having micro needling with rejuvenating therapy if they want to treat certain marks or blemishes on the body or face for cosmetic reasons.   Practitioners may use micro needling with rejuvenating therapy to treat wrinkles and tighten skin."
            /> */}
            <div className=" py-7">
                {/* <NumericBullets
                    title="Who should take this?"
                    img={takethis}
                    description={content}
                /> */}
            </div>
            <div className="bg-gradient-to-r from-[#602639] from-2.3% via-[#7C3057] via-72.44% to-[#39063F] to-97.51% text-center ">
                {/* <p className=" w-[60%] mx-auto py-10 mb-4  text-[20px] md:text-[24px]">
                    {' '}
                    The addition of rejuvenating therapy to micro needling may speed up the
                    healing process and stimulate skin renewal, potentially
                    producing better results than micro needling alone.
                </p> */}
            </div>

            <PicCatalog
                img={fliter}
                title="Why to undergo Dermapen treatment?"
                description="Micro needling / Derma Pen procedures can be combined with a variety of other treatments and serums to provide maximum effectiveness of the benefits of the collagen inducing micro injuries caused during the procedures    A combination of rejuvenating therapy & Derma Pen because they want to create a more flawless skin appearance "
            />
        </>
    )
}
export default PrfThreeSection
