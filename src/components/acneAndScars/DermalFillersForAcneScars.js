import React from 'react'
import PicCatalog from '../common/PicCatalog'
import image from '../../assets/Acne-scar/images/DermalFillersforacnescars.png'

const DermalFillersForAcneScars = () => {
    const description =
        '<div>Acne can sometimes leave behind scars. For people who are self-conscious about the appearance of these scars, the good news is they can be corrected with fillers.</div>'
    return (
        <>
            <div className="py-2 md:py-5">
                <PicCatalog
                    img={image}
                    description={description}
                    title="Dermal Fillers for acne scars"
                    secondTitleNotNeeded
                />
            </div>
        </>
    )
}

export default DermalFillersForAcneScars
