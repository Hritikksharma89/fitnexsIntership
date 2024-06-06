import React from 'react'
import ImageScale from '../common/reverseBolierPlate'
import girlImage from '../../assets/cosmeticSurgery/Rhinoplastygirl.png'
import girlImageBg from '../../assets/cosmeticSurgery/RhinoplastyGirlBg.png'
import boyImageBg from '../../assets/cosmeticSurgery/RhinoplastyBoy.png'
import boyImage from '../../assets/cosmeticSurgery/RhinoplastyBoyBg.png'

const Rhinoplasty = () => {
    let data = [
        {
            text: `Discover the power of transformation with KOZA Aesthetic Care expert rhinoplasty services. Our team of skilled surgeons is dedicated to helping you achieve the nose you've always desired, enhancing not only your appearance but also your self-confidence.`,
            front: girlImage,
            bgimg: girlImageBg,
        },
        {
            title: 'What it is?',
            text: '<div>Rhinoplasty is a medical procedure, often called a "nose job", that helps change the way your nose looks or improves how it functions. Its like a makeover for your nose. </div> <div>During rhinoplasty, a surgeon can make your nose smaller, bigger, straighter, or fix any breathing problems you might have due to issues inside your nose. Its done to enhance your appearance or make it easier for you to breathe through your nose. </div>',
            front: boyImage,
            bgimg: boyImageBg,
            isReversed: true,
        },
    ]

    return (
        <div className='my-8 md:my-20'>
            <ImageScale heading='Rhinoplasty' contentMatter={data} />
        </div>
    )
}

export default Rhinoplasty
