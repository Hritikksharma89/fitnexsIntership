import React from 'react'
import TextCard from '../common/textCard'
import image from '../../assets/cosmeticSurgery/breastLift.png'

const MastopexyBreastLift = () => {
    let paragraphs = [
        'At KOZA , we specialize in helping you restore youthful and rejuvenated breasts through our expert mastopexy, or breast lift, services. Our dedicated team is committed to providing safe and customized solutions to enhance your confidence and beauty.',
        "Mastopexy, commonly known as a breast lift, is a surgical procedure that involves reshaping and lifting sagging breasts. During the procedure, excess skin is removed, and breast tissue is repositioned to create a firmer, more youthful breast contour. It's an effective way to address issues like breast sagging due to aging, pregnancy, or weight loss, resulting in perkier and more aesthetically pleasing breasts. While a breast lift doesn't significantly change breast size, it can enhance their appearance and boost self-confidence.",
    ]
    return (
        <>
            <div className="mt-10 flex justify-center">
                <TextCard
                    cardTitle="Mastopexy / Breast lift"
                    paragraphs={paragraphs}
                    img={image}
                    buttonNotNeeded={true}
                />
            </div>
        </>
    )
}

export default MastopexyBreastLift
