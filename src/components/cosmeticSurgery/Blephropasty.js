import React from 'react'
import bgImage from '../../assets/cosmeticSurgery/BLEPHROPASTYBg.png'
import frontImage from '../../assets/cosmeticSurgery/BLEPHROPASTYFront.png'
import ImageScale from '../common/reverseBolierPlate'

const Blephropasty = () => {
    let data = [
        {
            text: '<div>At KOZA , we offer expert blepharoplasty, also known as eyelid surgery, to help you rejuvenate and enhance the appearance of your eyes. Our skilled team is dedicated to providing safe and tailored solutions that bring out the natural beauty of your eyes.</div><div>Blepharoplasty is a surgical procedure that rejuvenates the appearance of the eyes. It involves the removal of excess skin, fat, or muscle from the upper and/or lower eyelids. This helps reduce puffiness, sagging, and wrinkles around the eyes, resulting in a more youthful and refreshed look. It can also address vision issues caused by drooping eyelid skin.</div>',
            bgimg: bgImage,
            front: frontImage,
            isReversed: true,
        },
    ]
    return (
        <>
            <div>
                <div className="mt-10">
                    <ImageScale heading='Blepharopasty' contentMatter={data} />
                </div>
            </div>
        </>
    )
}

export default Blephropasty
