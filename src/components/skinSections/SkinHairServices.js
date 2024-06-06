import React from 'react'
import AdvMedFac from '../../assets/skinImg/servicesImg/AdvMedFac.png'
import InstGlo from '../../assets/skinImg/servicesImg/InstGlo.png'
import ChemPeel from '../../assets/skinImg/servicesImg/Peels.png'
import GloBoo from '../../assets/skinImg/servicesImg/BoostersMeso.png'
import QSwitch from '../../assets/skinImg/servicesImg/Laser.png'
import PRP from '../../assets/skinImg/servicesImg/PRP.png'
import AboutServices from '../common/AboutServices'

const SkinHairServices = () => {
    const contents = [
        {
            topic: 'Advance medi facials',
            Img: AdvMedFac,
        },
        {
            topic: 'Insta glow skin therapy',
            Img: InstGlo,
        },
        {
            topic: 'Chemical peels',
            Img: ChemPeel,
        },
        {
            topic: 'Glow boosters with meso',
            Img: GloBoo,
        },
        {
            topic: 'Q switch laser',
            Img: QSwitch,
        },
        {
            topic: 'rejuvenating therapy',
            Img: PRP,
        },
    ]
    return (
        <>
            <div id='nextSection' className="py-2 md:py-5 lg:pt-7 lg:pb-5">
                <AboutServices
                    content={contents}
                    subtitle="We offer the best skin and hair care treatment and provides proper solutions"
                    title="Our skin and hair care services"
                />
            </div>
        </>
    )
}
export default SkinHairServices
