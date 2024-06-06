import React from 'react'
import ImageScale from '../common/reverseBolierPlate'
import bgImage from '../../assets/cosmeticSurgery/gynecomastiaBg.png'
import frontImage from '../../assets/cosmeticSurgery/gynecomastiaFront.png'

const Gynecomastia = () => {
    let data = [
        {
            text: `<div>At KOZA , we offer specialized gynecomastia treatment designed to help you regain your confidence and achieve a more masculine chest appearance. Our experienced team is committed to delivering safe and tailored solutions that enhance your overall well-being.</div>
            <div>Gynecomastia surgery, or male breast reduction, is a cosmetic procedure designed to treat enlarged or swollen breast tissue in men. During the surgery, excess breast tissue and fat are removed, and the chest is reshaped to create a more masculine and flatter appearance. This procedure helps individuals with gynecomastia regain their self-confidence and alleviate any emotional distress caused by feminine chest characteristics. It is typically performed on healthy individuals who have stabilized their weight and addressed any underlying hormonal issues. Gynecomastia surgery can provide long-lasting results, enhancing both physical appearance and emotional well-being.</div>`,
            bgimg: bgImage,
            front: frontImage,
            isReversed: true,
        },
    ]
    return (
        <>
            <div>
                <div className="mt-8">
                    <ImageScale heading='Gynecomastia' contentMatter={data} />
                </div>
            </div>
        </>
    )
}

export default Gynecomastia
