import React from 'react'
import ImageScale from '../common/reverseBolierPlate'
import backImg from '../../assets/cosmeticDentist/gingivoplastyBg.svg'
import frontImg from '../../assets/cosmeticDentist/gingivoplastyFront.svg'
const Gingivoplasty = () => {
    let data = [
        {
            title: 'What is it?',
            text: '<div>Gingivoplasty is a specialized dental surgical procedure that focuses on the meticulous reshaping of gum tissue around the teeth. Also referred to as gum contouring, this technique aims to enhance the aesthetics and overall health of the gumline.</div> <div>By precisely altering the shape and structure of the gums, gingivoplasty can create a harmonious and balanced gumline, resulting in a more attractive smile.</div> <div>This procedure is not only about cosmetic improvements but also plays a pivotal role in improving oral health and overall well-being. </div>',
            front: frontImg,
            bgimg: backImg,
        },
    ]

    return (
        <div className="my-8">
            <ImageScale heading="Gingivoplasty" contentMatter={data} />
        </div>
    )
}
export default Gingivoplasty
