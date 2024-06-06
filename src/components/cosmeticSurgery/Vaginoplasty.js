import React from 'react'
import bgImage from '../../assets/cosmeticSurgery/vaginoplastyBg.png'
import frontimage from '../../assets/cosmeticSurgery/vaginoplastyfront.png'
import ImageScale from '../common/reverseBolierPlate'

const Vaginoplasty = () => {
    let data = [
        {
            text: `<div>At KOZA , we offer expert vaginoplasty services to help you regain comfort and confidence in your intimate health. Our experienced team is committed to providing safe and personalized solutions for enhancing your well-being.
            </div><div> Vaginoplasty is a surgical procedure designed to tighten and reconstruct the vaginal canal and surrounding tissues. It is often performed to address issues such as vaginal laxity or looseness, which can result from childbirth, aging, or genetics. During vaginoplasty, excess vaginal tissue is removed, and the vaginal muscles are tightened to restore tone and function. This procedure can enhance sexual satisfaction, improve comfort, and alleviate functional concerns such as urinary incontinence. Vaginoplasty is a way to enhance vaginal health and intimate well-being.
            </div>`,
            front: frontimage,
            bgimg: bgImage,
            isReversed: true,
        },
    ]

    return (
        <>

            <ImageScale heading='Vaginoplasty' contentMatter={data} />
        </>
    )
}

export default Vaginoplasty
