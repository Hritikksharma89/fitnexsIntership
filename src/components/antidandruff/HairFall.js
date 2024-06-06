import React from 'react'
import image1 from '../../assets/hair/hairFall.png'
import bgimage1 from '../../assets/hair/hairFallBg.png'
import ImageScale from '../common/reverseBolierPlate'
import image2 from '../../assets/hair/hairfall2.png'
import image3 from '../../assets/hair/hairfall3.png'
import bgimage2 from '../../assets/hair/hairfallBg2.png'
import bgimage3 from '../../assets/hair/hairFallBg3.png'

const HairFall = () => {
    let data = [
        {
            title: 'What is it?',
            text: `<div>Hair fall issue is one of a very common problems affecting men and women both. In today's generation, it is very common because of our changing lifestyle, stress and pollution, and hair fall should be stopped as soon as possible because delay in treatment will cause further hair loss and weak roots.</div> <div> Hair falls because of weak roots and damaged hair shafts. Early diagnosis of causes of hair fall is very crucial in the treatment of hair fall.</div>`,
            front: image1,
            bgimg: bgimage1,
        },
        {
            text: `<div>In females, the majority hair fall occurs because of nutritional deficiency, mainly deficiency of iron and folic acid in child bearing age along with calcium and vitamin D deficiency after menopause.</div> 
            <div>In males, hair fall mostly occurs due to genetic history, if hair fall is not controlled it can lead to baldness.</div>`,
            front: image2,
            bgimg: bgimage2,
            isReversed: true,
        },
        {
            text: `<div>Unchecked hair fall may also be due to Alopecia (autoimmune disorder) that leads to complete loss of hair in patches or involves complete scalp and that it is very difficult to treat.</div> <div>Unchecked hair fall may also be due to Alopecia (autoimmune disorder) that leads to complete loss of hair in patches or involves complete scalp and that it is very difficult to treat.<div>`,
            front: image3,
            bgimg: bgimage3,
        },
    ]
    return (
        <>
            <div className="py-3 md:py-10 md:px-6">
                <ImageScale heading='Hair Fall' contentMatter={data} />
            </div>
        </>
    )
}

export default HairFall
