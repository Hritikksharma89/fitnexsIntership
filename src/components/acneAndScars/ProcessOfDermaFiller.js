import React from 'react'
import PicCatalog from '../common/PicCatalog'
import image from '../../assets/Acne-scar/images/processOfDermaFiller.png'

const ProcessOfDermaFiller = () => {
    const description =
        '<div>Dermal fillers are injected into the skin to raise depressed areas of acne scars or stimulate the skin’s natural production of collagen.</div><div>Options for fillers include hyaluronic acid (including Restylane and Juvéderm), and autologous fat transfer, which is when fat is taken from the person and injected into the acne scars.</div>'
    return (
        <>
            <div className="py-2 md:py-5">
                <PicCatalog
                    img={image}
                    description={description}
                    isReversed
                    title="Process of Derma fillers" secondTitleNotNeeded
                />
            </div>
        </>
    )
}
export default ProcessOfDermaFiller
