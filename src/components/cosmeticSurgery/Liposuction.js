import React from 'react'
import ImageScale from '../common/reverseBolierPlate'
import bgImage from '../../assets/cosmeticSurgery/LiposuctionBack.png'
import frontImage from '../../assets/cosmeticSurgery/LiposuctionFront.png'

const Liposuction = () => {
    let data = [
        {
            title: 'What it is??',
            text: "<div>Liposuction is a medical procedure that helps remove unwanted fat from your body. It's like a vacuum cleaner for fat. During liposuction, a doctor makes small cuts in your skin and then suctions out the fat using a special tool.</div><div>This can help you get rid of fat in areas that are hard to lose through diet and exercise, like your belly, thighs, or love handles. It's not a way to lose a lot of weight but can help you shape your body and remove stubborn fat pockets to look and feel better.</div>",
            bgimg: bgImage,
            front: frontImage,
            isReversed: true,
        },
    ]
    return (
        <div className="mt-10">
            <div className="text-[40px] font-semibold leading-[50px] text-center">
                
            </div>
            <div className="mt-8">
                <ImageScale heading='Liposuction' contentMatter={data} />
            </div>
        </div>
    )
}
export default Liposuction
