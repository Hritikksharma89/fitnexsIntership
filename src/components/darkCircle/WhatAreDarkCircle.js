import React from 'react'
import image from '../../assets/darkCircle/whatAreDarkCircle.png'
import PicCatalog from '../common/PicCatalog'

const WhatAreDarkCircle = () => {
    const description = `
        <div>Periorbital dark circles, commonly known as dark circles, can be caused by various exogenous and endogenous factors; they can make your face appear dull and exhausted. Dark circles may not be permanent, but they can be reduced with proactive dark circle treatments.</div>
        <div>Dark circles tend to make you look extremely tired even at times you are not, which is why treating them is essential. They can also take a toll on one’s professional and personal outlook, by making you look older and fatigued; hence, getting rid of dark circles is important for your confidence, as well.</div>
        <div>Adult men and women are affected by dark circles, but it’s quite rare to see it in children. This is because the appearance of dark circles occurs with age, along with thinning of skin and loss of collagen. Fatigue and stress may not be the only cause of dark circles, but these factors do have a negative impact on your skin and they increase the possibility of developing dark circles.</div>
        <div>How can I prevent dark circles?</div>
        <div>Based on your complexion, dark circles can vary from purple to dark brownish in color. Lifestyle changes can also be a reason for developing dark circles. Localized swelling, or people suffering from fluid imbalance issues, can experience puffy eyelids which can shadow the under eye portion and it results in dark circles. Genetics can be another reason for dark circles, as well.</div> `
    return (
        <>
            <div className="bg-no-repeat my-5 bg-cover py-14 bg-whatAreDarkCircle">
                <div className="text-center text-[28px] md:text-[32px] lg:text-[40px] lg:leading-[50px] font-semibold text-[white] py-2">
                    What are dark circles?
                </div>
                <div className="w-[90%] mx-auto">
                    <PicCatalog
                        titleNotNeeded
                        secondTitleNotNeeded
                        className=" p-5 "
                        img={image}
                        description={description}
                        isTextWhite
                        isReversed
                    />
                </div>
            </div>
        </>
    )
}

export default WhatAreDarkCircle
