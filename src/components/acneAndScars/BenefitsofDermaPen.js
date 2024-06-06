import React from 'react'
import NumericBullets from '../common/NumericBullets'
import image from '../../assets/Acne-scar/images/BenefitsOfDermaPen.png'
import PicCatalog from '../common/PicCatalog'
import undergo from '../../assets/Acne-scar/images/undergo.png'

const BenefitsofDermaPen = () => {
    let description = [
        {
            id: '1',
            topic: 'Safe for all skin types, textures, and pigments',
            description:
                'If you want to refresh your complexion and reduce signs of aging, chemical peels can help you achieve a more youthful look.',
        },
        {
            id: '2',
            topic: 'Minimal discomfort',
            description:
                'Derma Pen’s vertical stamping needles penetrate the skin without creating damaging trenches that rolling micro-needling devices leave behind. This reduces pain, bleeding, and recovery time.',
        },
        {
            id: '3',
            topic: 'Virtually no downtime',
            description:
                'While you may experience minimal tenderness and redness for one to three days, you can return to work within an hour, wearing makeup as a camouflage until your skin fully heals. This differs from other more invasive skin therapies that require longer recovery times.',
        },
        {
            id: '4',
            topic: 'Only minor aftercare required',
            description:
                'Avoid direct sun exposure, vigorous exercise, and exfoliating products for a few days. Other than these tips, simply follow your usual skincare routine as the treatment area rebuilds itself with increased collagen production.',
        },
    ]

    return (
        <>
            <div>
                <div className="py-2 md:py-5">
                    <PicCatalog
                        img={undergo}
                        title="Why to undergo dermapen treatment?"
                        secondTitleNotNeeded
                        description="<div>Micro needling / Derma Pen procedures can be combined with a variety of other treatments and serums to provide maximum effectiveness of the benefits of the collagen inducing micro injuries caused during the procedures</div><div>A combination of rejuvenating therapy & Derma Pen because they want to create a more flawless skin appearance.</div>"
                    />
                </div>
                <div className="py-2 md:py-5 bg-white">
                    <div className="mt-8">
                        <NumericBullets
                            description={description}
                            img={image}
                            title="Benefits of derma pen"
                            isReversed
                            hideSubtitle 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BenefitsofDermaPen
