import React from 'react'
import TextCard from '../common/textCard'
import image from '../../assets/cosmeticSurgery/breastImplantation.png'

const BreastImplantation = () => {
    let paragraphs = [
        'At KOZA , we specialize in helping you achieve the fuller, more symmetrical breasts you desire through our expert breast implantation services. Our experienced team is dedicated to providing safe and personalized solutions to enhance your confidence and self-esteem.',
        "Breast implantation is a surgical procedure that involves placing special silicone or saline-filled bags, called implants, inside a person's breasts. These implants are used to make the breasts larger, fuller, or more shapely. It's like adding padding or filling to change the size and shape of the breasts. People choose breast implantation for various reasons, such as to enhance their appearance or to restore breast volume lost due to factors like pregnancy, weight loss or aging.",
    ]
    return (
        <>
            <div>
                <div className="mt-10 flex justify-center">
                    <TextCard
                        cardTitle='Breast implantation services'
                        paragraphs={paragraphs}
                        img={image}
                        buttonNotNeeded={true}
                    />
                </div>
            </div>
        </>
    )
}

export default BreastImplantation
