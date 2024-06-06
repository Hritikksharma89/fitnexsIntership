import React from 'react'
import PicCatalog from '../common/PicCatalog'
import image from '../../assets/Acne-scar/images/dermapenTreatment.png'

const WhyToUndergoDermapenTreatment = () => {
    const description =
        '<div>Micro needling / Derma Pen procedures can be combined with a variety of other treatments and serums to provide maximum effectiveness of the benefits of the collagen inducing micro injuries caused during the procedures</div><br><div>A combination of rejuvenating therapy & Derma Pen because they want to create a more flawless skin appearance</div>'
    return (
        <>
            <div>
                <PicCatalog
                    img={image}
                    description={description}
                    title="Why To Undergo Dermapen Treatment?"
                />
            </div>
        </>
    )
}

export default WhyToUndergoDermapenTreatment
