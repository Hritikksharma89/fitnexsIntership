import React from 'react'
import image from '../../assets/hair/causeOfHairFall.png'
import Do from '../common/Do'

const CausesofHairLoss = () => {
    const data = [
        {
            description: 'Androgenetic alopecia (AGA) especially in men, hair loss because of genetic history of baldness',
        },
        {
            description: 'Alopecia- autoimmune disorder affecting individual of any age or gender',
        },
        {
            description: 'Malnutrition',
        },
        {
            description: 'Stress',
        },
        {
            description: 'Any chronic illness like thyroid or anaemia',
        },
        {
            description: 'Excessive use of tight caps, bandanas or wig and hair patches',
        },
        {
            description: 'Chemotherapy session',
        },
        {
            description: 'PCOD / PCOS',
        },
        {
            description: 'Excessive use of chemicals on hair',
        },
        {
            description: 'Bacterial /fungal infection like dandruff',
        },
    ]

    // let mainTitle = ``
    return (
        <div>
            <div>
                {/* <p className="text-[28px] md:text-[34px] lg:text-[40px] leading-[34px] md:leading-[50px] text-center font-semibold">
                    {' '}
                    Causes of hair loss
                </p> */}
                <Do
                    mainTitle='Causes of hair loss'
                    pointsCentered
                    titleNotNeeded
                    hideMainDescription
                    data={data}
                    backgroundImage={image}
                    buttonNotNeeded
                   
                />
            </div>
        </div>
    )
}

export default CausesofHairLoss
