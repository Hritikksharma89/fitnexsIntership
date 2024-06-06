import React from 'react'
import image from '../../assets/cosmeticSurgery/secondSection.png'
import PicCatalog from '../common/PicCatalog'

const BodyContours = () => {
    return (
        <div className="mt-16">
            <PicCatalog
                titleNotNeeded
                secondTitleNotNeeded
                description="Are you looking to redefine your body contours and achieve the silhouette youve always desired? Look no further than KOZA Aesthetic Care cutting-edge liposuction services. Our team of skilled professionals is dedicated to helping you achieve your aesthetic goals safely and effectively."
                img={image}
                isReversed
            />
        </div>
    )
}

export default BodyContours
