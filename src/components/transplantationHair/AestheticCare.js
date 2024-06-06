import React from 'react'
import Do from '../common/Do'
import image from '../../assets/hair/aestheticCare2.png'

const AestheticCare = () => {
    const data = [
        {
            description: `FUE (Follicular Unit Excision) - Follicle Unit Extraction in which grafts are harvested individually from the donor area and then trimmed under the microscope.`,
        },
        {
            description: `FUT (Follicular Unit Transplantation/Linear Excision Method) - FUT strip transplant in which a strip of tissue is removed from your donor zone and then dissected into follicular units of 1-4 hair.`,
        },
        {
            description: 'Combination of FUT and FUE',
        },
        {
            description: 'Bio-FUE',
        },
        
        {
            description: `Body hair transplant`,
        },
        {
            description: `Eyebrow hair transplant`,
        },
        {
            description: `Unshaven and long hair transplant`,
        },
        {
            description: `Repair hair transplant`,
        },
    ]
    return (
        <div>
            <div>
                <Do
                    mainTitle='What’s at Koza Aesthetic Care?'
                    mainDescription='The best hair transplant in India is performed in a various
                    range of techniques, customized based on what the patient
                    requires for the surgery, such as'
                    titleNotNeeded pointsCentered
                    data={data}
                    backgroundImage={image}
                    buttonNotNeeded
                    isReversed={true}
                    bulletImagesNotNeeded={true}
                />
            </div>
        </div>
    )
}

export default AestheticCare
