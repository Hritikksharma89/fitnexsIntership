import React from 'react'
import PicCatalog from '../common/PicCatalog'
import image from '../../assets/Acne-scar/images/MicroneedlingPrpFront.png'
const Microneedlingrejuvenatingtherapy = () => {
    const description =
        '<div>Micro needling is a non-invasive procedure whereby micro needles are used to reduce fine lines and wrinkles and tighten skin.</div><div>The micro needle stimulates collagen production in the skin without damaging the skin.</div><div>Effects of skin needling on acne scars are even better when the treatments are combined with vitamin C or rejuvenating therapy.</div><div>When micro needling is combined with rejuvenating therapy, the therapy may be referred as “collagen induction therapy".</div>'
    return (
        <>
            <div className="bg-MicroneedlingPrpBg bg-no-repeat  bg-cover pt-8 pb-4">
                <div className="font-semibold text-center text-[20px] lg:text-[40px] text-[#FFFFFF]">
                    Microneedling rejuvenating therapy
                </div>
                <div className='py-2 md:py-5'>
                    <PicCatalog
                        img={image}
                        secondTitleNotNeeded
                        description={description}
                        title="What is Microneedling rejuvenating therapy?"
                        colorReverse
                        isTextWhite
                    />
                </div>
            </div>
        </>
    )
}

export default Microneedlingrejuvenatingtherapy
