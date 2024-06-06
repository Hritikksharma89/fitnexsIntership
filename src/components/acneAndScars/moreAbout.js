import React from 'react'
import Slider from 'react-slick'
import MediFacial from '../../assets/Acne-scar/services/MediFacial.png'
import Microdermabrasion from '../../assets/Acne-scar/services/Microderma.png'
import ChemicalPeels from '../../assets/Acne-scar/services/ChemicalPeels.png'
import PenMicroneedling from '../../assets/Acne-scar/services/PenMicroneedling.png'
import Dermaroller_Microneedling from '../../assets/Acne-scar/services/Dermaroller-Microneedling.png'
import resurfacing from '../../assets/Acne-scar/services/resurfacing.png'
import Microneedling_PRP from '../../assets/Acne-scar/services/Microneedling_PRP.png'
import AboutServices from '../common/AboutServices'

const MoreAbout = () => {
    const contents = [
        {
            id: 1,
            Img: MediFacial,
            topic: 'Medi Facial - Anti Acne',
        },
        {
            id: 2,
            Img: Microdermabrasion,
            topic: 'Microdermabrasion',
        },
        {
            id: 3,
            Img: ChemicalPeels,
            topic: 'Chemical Peels',
        },
        {
            id: 4,
            Img: PenMicroneedling,
            topic: 'Derma Pen -Microneedling',
        },
        {
            id: 5,
            Img: Dermaroller_Microneedling,
            topic: 'Dermaroller-Microneedling',
        },
        {
            id: 6,
            Img: resurfacing,
            topic: 'Co2 laser resurfacing',
        },
        {
            id: 7,
            Img: Microneedling_PRP,
            topic: 'Microneedling - rejuvenating therapy',
        },
    ]
return (
    <>
        <div id='nextSection' className="py-2 md:py-5 lg:pt-10 lg:pb-5">
            <AboutServices
                content={contents}
                subtitle="We offer the best skin and hair care treatment and provides proper solutions"
                title="Our skin and hair care services"
                largerGap
            />
        </div>
    </>
)
}
export default MoreAbout
