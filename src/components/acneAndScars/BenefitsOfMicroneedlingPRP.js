import React from 'react'
import PicCatalog from '../common/PicCatalog'
import image from '../../assets/Acne-scar/images/BenefitsOfMicroneedlingPRP.png'

const BenefitsOfMicroneedlingPRP = () => {
    const description =
        '<div>People may consider having micro needling with rejuvenating therapy if they want to treat certain marks or blemishes on the body or face for cosmetic reasons.</div><div>Practitioners may use micro needling with rejuvenating therapy to treat wrinkles and tighten skin.</div>'
    return (
        <>
            <div className='py-2 md:py-5 pr-6'>
                <PicCatalog
                    img={image}
                    description={description}
                    isReversed
                    title="Benefits Of Microneedling rejuvenating therapy"
                    secondTitleNotNeeded
                />
            </div>
        </>
    )
}
export default BenefitsOfMicroneedlingPRP
