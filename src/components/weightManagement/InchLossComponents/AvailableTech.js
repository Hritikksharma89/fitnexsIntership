import React from 'react'
import lipoLaser from '../../../assets/weightMangement/lipoLaser.png'
import transformation from '../../../assets/weightMangement/transformation.png'
import non_surgical from '../../../assets/weightMangement/nonSurgical.png'
import slim_curve from '../../../assets/weightMangement/slimCurve.png'
import Three_tuck from '../../../assets/weightMangement/3Dtuck.png'
import seven_tuck from '../../../assets/weightMangement/7Dtuck.png'
import lipo from '../../../assets/weightMangement/lipo.png'
import specific from '../../../assets/weightMangement/specificImg.png'
import Slider from 'react-slick'
import PicCatalog from '../../common/PicCatalog'
import Lipolaserour from '../../../assets/weightMangement/Lipolaserour.png'
import AboutServices from '../../common/AboutServices'
import NumericBullets from '../../common/NumericBullets'

const AvailableTech = () => {
    const contentOne = [
        {
            id: 1,
            Img: lipoLaser,
            topic: ' Lipo laser program',
        },
        {
            id: 2,
            Img: transformation,
            topic: 'Transformation therapy',
        },
        {
            id: 3,
            Img: non_surgical,
            topic: 'Non-surgical liposuction ',
        },
        {
            id: 4,
            Img: slim_curve,
            topic: 'Slim curve ',
        },
        {
            id: 5,
            Img: Three_tuck,
            topic: '3D tuck therapy',
        },
        {
            id: 6,
            Img: seven_tuck,
            topic: '7D tuck therapy ',
        },
    ]

    const contentTwo = [
        {
            id: 1,
            topic: 'Deep tissue massage',
            description: 'This helps break down fat cells and promote inch loss in the targeted area.',
        },
        {
            id: 2,
            topic: 'Firming gel',
            description: 'This gel works in synergy with the massage to tighten and tone the skin, enhancing the overall effects.',
        },
        {
            id: 3,
            topic: 'Lipolaser technology',
            description: 'This enhances the tightening and toning effects. This technology promotes fat cell breakdown and improves skin elasticity.',
        },
        {
            id: 4,
            topic: 'Lymphatic system detox',
            description: 'Our therapies also aid in improving circulation and eliminating toxins from the lymphatic system, helping your body naturally remove waste products.',
        },
        {
            id: 5,
            topic: 'Firming packs',
            description: 'To complete the treatment, we use a firming pack that enhances skin elasticity and improves muscle tone. This contributes to overall body firming and shaping',
        },
    ]
    return (
        <>
            <div>
                <AboutServices 
                    largeGap
                    title='Let us understand the available technologies in detail'
                    content={contentOne}
                />
                <div className="p-2 py-2 md:py-6">
                    <PicCatalog
                        isReversed
                        img={lipo}
                        title="LIPOLASER TECHNOLOGY"
                        second_title="Experience the slimmer you" 
                        description="If you want to experience the spot inch loss for the stubborn fat which is not responding to Gyms & Diets. You’re are invited to experience Lipo Laser Program at KOZA Aesthetic Care. "
                    />
                </div>
                <div className="py-4 mt-[10px] md:mt-[4rem]">
                    <p className="text-[40px] font-semibold text-center py-2">
                        Our lipolaser session includes
                    </p>
                    <NumericBullets
                        img={Lipolaserour}
                        description={contentTwo}
                        
                    />
                </div>
                <div className="py-5">
                    <PicCatalog
                        isReversed
                        img={specific}
                        title="Specific area targeted"
                        secondTitleNotNeeded
                        description="Our lipoLaser therapy targets specific areas of concern, ensuring that you achieve your desired results in the most effective way possible. Whether you're looking to reduce cellulite, contour your body, or revitalize your skin, our therapy is the key to see a slimmer you. "
                    />
                </div>
            </div>
        </>
    )
}

export default AvailableTech
