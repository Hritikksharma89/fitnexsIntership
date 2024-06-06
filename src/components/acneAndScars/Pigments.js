import React from 'react'
import pigment from '../../assets/Acne-scar/images/pigmentimg.png'
import undergo from '../../assets/Acne-scar/images/undergo.png'
import NumericBullets from '../common/NumericBullets'
import PicCatalog from '../common/PicCatalog'

const PigmentSkin = () => {
    const content = [
        {
            id: 1,
            topic: 'Safe for all skin types, textures, and pigments',
            description:
                ' If you want to refresh your complexion and reduce signs of aging, chemical peels can help you achieve a more youthful look.',
        },
        {
            id: 2,
            topic: 'Minimal discomfort',
            description:
                'Derma Pen’s vertical stamping needles penetrate the skin without creating damaging trenches that rolling micro-needling devices leave behind. This reduces pain, bleeding, and recovery time. ',
        },
        {
            id: 3,
            topic: 'Virtually no downtime',
            description:
                'While you may experience minimal tenderness and redness for one to three days, you can return to work within an hour, wearing makeup as a camouflage until your skin fully heals. This differs from other more invasive skin therapies that require longer recovery times. ',
        },
        {
            id: 4,
            topic: 'Only minor aftercare required',
            description:
                'Avoid direct sun exposure, vigorous exercise, and exfoliating products for a few days. Other than these tips, simply follow your usual skincare routine as the treatment area rebuilds itself with increased collagen production. ',
        },
    ]

    return (
        <>
            {/* <PicCatalog
                img={undergo}
                title="Why to undergo Dermapen treatment?"
                description="<div>Micro needling / Derma Pen procedures can be combined with a variety of other treatments and serums to provide maximum effectiveness of the benefits of the collagen inducing micro injuries caused during the procedures</div>    A combination of rejuvenating therapy & Derma Pen because they want to create a more flawless skin appearance "
            /> */}
            {/* <NumericBullets
                title="Body Toning "
                subtitle="Transform Your Body into a Toned and Shapely Marvel in Minutes"
                img={pigment}
                description={content}
                isReversed
            /> */}
        </>
    )
}
export default PigmentSkin
