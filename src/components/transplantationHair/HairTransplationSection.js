import React from 'react'
import ImageScale from '../common/reverseBolierPlate'
import image from '../../assets/hair/hairTransplantFront.png'
import bgimage from '../../assets/hair/hairTransplantBg.png'

const HairTransplationSection = () => {
    let data = [
        {
            title: 'What it is?',
            text: `<div>It is a cosmetic procedure. It is a permanent method of implanting a patient's own natural hair from the back of the head (donor area) to the bald area of the head (recipient area) Transplant of eyebrow, beard, moustache can also be done using FUE method. </div>
            <div>In the simplest terms, Hair Transplant is the surgery in which hair is removed from the donor area in the back of your head, where the hair is genetically programmed to grow for life and is transplanted into the balding and thinning areas of your scalp. 
            Advanced Hair Transplant is a surgical procedure performed under local anaesthesia. Our doctors plan the surgery in advance, by carefully considering the stage of your hair loss, your goals and expectations.
            At Koza Aesthetic Care, we offer both a FUT Strip Transplant and FUE Follicular Unit Extraction hair transplant procedures. 
            Our doctors suggest and perform the technique that is best suited to you, based on factors such as your age and the hair density in the donor area.</div>`,
            front: image,
            bgimg: bgimage,
        },
    ]
    return (
        <>
            <div className='py-2 md:py-10'>
                <ImageScale heading='Hair transplantation' contentMatter={data} />
            </div>
        </>
    )
}

export default HairTransplationSection
