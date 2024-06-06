import React from 'react'
import img from '../../assets/skinImg/SkinImg.png'
import Do from '../common/Do'

const ChemicalPeel = () => {
    const data = [
        {
            index: 1,
            title: 'Rejuvenate skin',
            description:
                'If you want to refresh your complexion and reduce signs of aging, chemical peels can help you achieve a more youthful look.',
        },
        {
            index: 2,
            title: 'Address skin concerns',
            description:
                'They are ideal for those dealing with acne scars, pigmentation issues, or uneven skin texture.',
        },
        {
            index: 3,
            title: 'Boost confidence',
            description:
                'If you are looking for a confidence boost with minimal downtime, chemical peels offer a convenient solution.',
        },
        {
            index: 4,
            title: 'Maintain skin health',
            description:
                'Regular chemical peels can be incorporated into your skincare routine to maintain healthy, glowing skin.',
        },
    ]
    const mainTitle = 'Who should consider a chemical peel?'
    const mainDescription =
        'Chemical peels are suitable for individuals looking to'

    const backgroundImage = img
    return (
        <div className="bg-gradient-to-r from-[#632A3E] to-[#370541] py-2 md:py-5  mb-[2rem] md:mb-[6rem]">
            <Do
                data={data}
                mainTitle={mainTitle}
                index={data.index}
                mainDescription={mainDescription}
                largerGapOnPoints
                backgroundImage={backgroundImage}
                buttonNotNeeded
                bulletImagesNotNeeded
                colorReversal
            />
        </div>
    )
}

export default ChemicalPeel
