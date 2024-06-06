import React from 'react'
import image from '../../assets/hair/scalePeel.png'
import PicCatalog from '../common/PicCatalog'

const ScalePeel = () => {
    // let data = [
    //     {
    //         title: 'Koza Aesthetic Care Advanced Scalp Peel',
    //         text: `It's a Salicylic acid-based treatment that removes flakes, bacteria and fungus from the scalp surface. It gives a healthy scalp skin to cure dandruff and itchy scalp.`,
    //         bgimg: image,
    //     },
    // ]
    return (
        <>
            <div className='md:pr-10'>
                <PicCatalog
                    img={image}
                    isReversed
                    secondTitleNotNeeded
                    title="Koza aesthetic care advanced scalp peel"
                    description="It's a Salicylic acid-based treatment that removes flakes, bacteria and fungus from the scalp surface. It gives a healthy scalp skin to cure dandruff and itchy scalp."
                />
            </div>
        </>
    )
}

export default ScalePeel
