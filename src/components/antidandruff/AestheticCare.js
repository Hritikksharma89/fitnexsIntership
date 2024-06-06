import React from 'react'
import Do from '../common/Do'
import image from '../../assets/hair/asthetic.png'

const AestheticCare = () => {
    const data = [
        {
            description: `To treat dandruff, firstly, we try to figure out the reasons for the same, as there are numerous reasons for the occurrence of dandruff. It can either be because of seasonal changes or a part of seborrheic dermatitis or psoriasis.`,
        },
        {
            description: `Furthermore, dandruff with severe itching might be due to fungal infection of scalp. Our Dermatologist examines your scalp by a Derma scope to figure out the exact reason, so that it can be cured accordingly.`,
        },
        {
            description: `For severe scaling on the scalp, scalp peels and Scalp Purifying Therapy is provided to eradicate it from its root.`,
        },
    ]
    return (
        <div>
            {/* <p className="text-center text-[28px] md:text-[33px] lg:text-[40px] leading-[34px] md:leading-[50px] font-semibold">
                Who is the Ideal Candidate for Blepharoplasty?
            </p> */}
            <div className="py-2 sm:py-5 ">
                <Do
                    mainTitle='What’s at Koza Aesthetic Care?'
                    titleNotNeeded pointsCentered
                    data={data}
                    backgroundImage={image}
                    action="BOOK APPOINTMENT NOW"
                    buttonNotNeeded
                    isReversed={true}
                    bulletImagesNotNeeded={true}
                />
            </div>
        </div>
    )
}

export default AestheticCare
