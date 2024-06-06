import React from 'react'
import Do from '../common/Do'
import image from '../../assets/Acne-scar/images/howDarmaRollerDone.png'
import roller from '../../assets/Acne-scar/images/roller.png'
import PicCatalog from '../common/PicCatalog'

const HowDarmaRollerDone = () => {
    const data = [
        {
            description: `Cleansing to remove oil and dirt`,
        },
        {
            description: `We apply a numbing cream on the face which remains on the skin for 45 minutes for its effect to set in.`,
        },
        {
            description: `We then remove the numbing cream and clean the face with spirit and betadine.`,
        },
        {
            description: `Micro needling is done with the derma roller all over the face and more so in the areas of scarring.`,
        },
        {
            description: `Ice is them applied to soothe the skin and decrease the redness.`,
        },
        {
            description: `An anti-inflammatory cream and sunscreen is applied in the end and the patient is good to go.`,
        },
    ]

    let mainTitle = 'How it is done?'
    return (
        <div>
            <div className="px-5 py-2 md:py-5">
                <p className="text-[28px] md:text-[34px] lg:text-[40px] leading-[30px] md:leading-[50px] text-center font-semibold mb-10">
                    Micro needling - derma roller
                </p>
                <PicCatalog
                    second_title="What is derma roller?"
                    isReversed
                    description="<div>Micro needling with derma roller is a new treatment modality for the treatment of scars, especially acne scars, stretch marks, wrinkles, and for facial rejuvenation.</div><div>Patient will mild scarring can benefit from the procedure of derma roller treatment for acne scar.</div><div>A derma roller for acne scar is a hand-held device with micro needles.</div><div>Before starting the procedure, a topical numbing gel is applied to the treatment area for optimal comfort.</div><div>During the procedure, the needles of derma roller for acne scar, create pores in the dermis, which encourage the release of growth factors and cytokines.</div><div>The growth factors and cytokines in turn generate a wound healing cascade by stimulating collagen, elastin, and neovascularization.</div><div>Needling sessions are typically done at an interval as suggested by our skin experts at Koza Aesthetic Care.</div><div>During the procedure, we apply serums to the treated area, specific to your skin concerns: (hyaluronic acid, growth factors and skin boosters for ant aging); (for facial rejuvenation and glow, vitamin C serums and skin enhancers are used); (vitamin E and rosehip oils for stretch marks); (collagen and elastin containing serums for acne scars).</div>"
                    img={roller}
                />
            </div>

            <div className="">
                <Do
                    data={data}
                    pointsCentered
                    titleNotNeeded
                    backgroundImage={image}
                    buttonNotNeeded
                    mainTitle={mainTitle}
                    colorForWhiteBG
                    // itemGap="gap-y-8"
                />
            </div>
        </div>
    )
}

export default HowDarmaRollerDone
