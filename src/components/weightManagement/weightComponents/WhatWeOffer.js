import React from 'react'
import OfferImgOne from '../../../assets/weightMangement/WhatWeOffer1.png'
import OfferImgTwo from '../../../assets/weightMangement/WhatWeOffer2.png'
import TextCard from '../../common/textCard'

const WhatWeOffer = () => {
    const paraOne = [
        `At koza aesthetic care, we understand that achieving your ideal body weight is not only a goal but a crucial factor 
        for enhancing your overall health and quality of life.`,
        `Our Weight loss programs are meticulously designed to deliver a guaranteed 4 kgs of weight loss in just 30 days, 
        providing you with tangible results that inspire confidence.`,
        `Our approach combines a latest technology, healthy and balanced diet, lifestyle modifications, regular physical activity, 
        and therapeutic support to ensure successful weight loss.`,
    ];
    const paraTwo = [
        `We recognize that shedding excess weight is not only about improving physical appearance but also about enhancing fitness and overall well-being.`,
        `It can reduce health risks, delay the onset of conditions like diabetes, alleviate pain associated with osteoarthritis of the knee, 
        and lower hypertension (high blood pressure).`,
        `Weight loss is the result of the body expending more energy through work and metabolism than it absorbs from food and nutrients.`,
        `This process taps into stored reserves of fat or muscle, gradually leading to a significant reduction in weight. 
      With KOZA Aesthetic Care, you can embark on a transformative journey toward a healthier, more vibrant you in just 30 days.`,
    ];
    return (
        <div className="px-2 mb-10 flex flex-col gap-y-8">
            <TextCard
                cardTitle='What We Offer?'
                title="Weight loss" 
                subtitle="Experience guaranteed weight loss of 4 kgs in just 30 days"
                paragraphs={paraOne}
                img={OfferImgOne}
                buttonNotNeeded
                imageCentered
            />
            <TextCard
                img={OfferImgTwo}
                isReversed
                action="BOOK APPOINTMENT NOW"
                paragraphs={paraTwo}
                imageCentered
            />
        </div>
    )
}

export default WhatWeOffer
