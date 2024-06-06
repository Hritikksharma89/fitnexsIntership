import React from 'react'
import image1 from '../../assets/darkCircle/BotanicalPeels.png'
import image2 from '../../assets/darkCircle/prpUnderEyes.png'
import image3 from '../../assets/darkCircle/dermalFillers.png'
import image4 from '../../assets/darkCircle/qSwitchLaser.png'
import image5 from '../../assets/darkCircle/mesoTherapy.png'
import AboutServices from '../common/AboutServices'

const KnowMoreAboutUs = () => {
    const data = [
        {
            Img: image1, 
            topic: 'Botanical Peels & Chemical Peels' 
        },
        {
            Img: image2,
            topic: 'rejuvenating therapy – Under eye rejuvenation',
        },
        {
            Img: image3,
            topic: 'Dermal fillers',
        },
        {
            Img: image4,
            topic: 'Q Switch laser',
        },
        {
            Img: image5,
            topic: 'Meso therapy',
        },
    ]
    return (
        <div id='nextSection' className='py-2 md:py-4 lg:pt-10 lg:pb-2'>
            <AboutServices
                title='Know more about us'
                subtitle='We offer the best skin and hair care treatment and provides proper solutions'
                content={data}
                largeGap
            />
        </div>
    )
}

export default KnowMoreAboutUs
