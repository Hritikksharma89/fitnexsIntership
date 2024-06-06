import React from 'react'
import image from '../../assets/cosmeticSurgery/BenefitsofBreastImplantation.png'
import NumericBullets from '../common/NumericBullets'

const BenefitsofBreastImplantation = () => {
    let description = [
        {
            id: '1',
            topic: 'Enhanced self-confidence',
            description:
                'Breast implantation can boost your self-esteem and help you feel more comfortable and confident in your own skin.',
        },
        {
            id: '2',
            topic: 'Improved body proportions',
            description:
                'Achieve a more balanced and harmonious figure with breasts that complement your overall physique.',
        },
        {
            id: '3',
            topic: 'Customized results',
            description:
                'Our skilled surgeons work closely with you to choose the right size, shape, and type of implants to achieve your desired outcome.',
        },
        {
            id: '4',
            topic: 'Reconstruction after mastectomy',
            description:
                'Breast implantation can be an essential part of breast reconstruction for women who have undergone mastectomy surgery.',
        },
    ]

    return (
        <>
            <div>
                <div className="mt-4">
                    <div className="text-[40px] font-semibold leading-[50px] text-center">
                        Benefits of Breast Implantation
                    </div>
                    <div className="mt-8">
                        <NumericBullets
                            hideSubtitle
                            hideTitleDesc
                            description={description}
                            img={image}
                            isReversed
                        />
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default BenefitsofBreastImplantation
