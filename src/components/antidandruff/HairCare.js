import React from 'react'
import NumericBullets from '../common/NumericBullets'
import image from '../../assets/hair/hairCare.png'

const HairCare = () => {
    let description = [
        {
            id: '1',
            topic: 'Hair mesotherapy',
            description: `Non injectable method in which vitamins, minerals, antioxidants, growth factors and hair peptide are penetrated deep into the hair roots to give them strength and nourishment. Use of radiofrequency in mesotherapy aids in proper penetration of meso solution deep into the roots, and it is a needle-less and painless method of stopping hair fall immediately.
           `,
        },
        {
            id: '2',
            topic: 'Platlet rich plasma therapy',
            description: `In this method, we superficially inject the patient's own serum, extracted from their blood containing various growth factors and vital nutrients deep into the hair roots. `,
        },
        {
            id: '3',
            topic: `GFC (Growth factor concentrated rejuvenating therapy meso)`,
            description: `A pure, highly concentrated growth factor preparation from patient's own blood, done in a specialised kit.`,
        },
        {
            id: '4',
            topic: 'Micro needling growth serum therapy ',
            description: `Helps in increased hair growth by increasing the blood circulation of the scalp and also by increasing the absorption of various products in the scalp with the use of derma pens and derma roller.`,
        },
    ]

    return (
        <>
            <div className="my-8">
                <NumericBullets
                    title="Treatments at koza aesthetic care"
                    hideSubtitle
                    hideTitleDesc
                    description={description}
                    img={image}
                />
            </div>
        </>
    )
}
export default HairCare
