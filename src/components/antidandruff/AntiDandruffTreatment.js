import React from 'react'
import ImageScale from '../common/reverseBolierPlate'
import image from '../../assets/hair/antiDandruffBg.png'
import bgimage from '../../assets/hair/antiDandruff.png'

const AntiDandruffTreatment = () => {
    let data = [
        {
            title: 'What is it?',
            text: `<div>Dandruffis a skin condition that mainly affects the scalp. Symptoms include flaking and sometimes mild itchiness.</div> 
            <div> It can result in social anxiety or self-esteem problems. A more severe form of the condition, which includes inflammation of the skin, is known as seborrheic dermatitis.</div> 
            <div>The reasons can be a number of genetic and environmental factors. It is not specifically due to poor hygiene, which is a common misconception.</div>`,
            front: image,
            bgimg: bgimage,
        },
    ]
    return (
        <>
            <div className="py-2 md:py-10">
                <ImageScale heading='Anti-dandruff treatment' contentMatter={data} />
            </div>
        </>
    )
}
export default AntiDandruffTreatment
