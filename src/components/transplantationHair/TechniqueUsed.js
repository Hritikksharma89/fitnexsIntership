import React from 'react'
import Do from '../common/Do'
import image from '../../assets/hair/techniqueUsed.png'

const TechniqueUsed = () => {
    const data = [
        {
            description: 'The nature of the scalp (oily or dry)',
        },
        {
            description:'The presence or absence of dandruff, scaliness, lesions, or damaged hair',
        },
        {
            description:'The type of hair loss (patterned or un-patterned, patchiness or uniform)',
        },
        {
            description:'The presence of any infection, scald or wound, causing the hair loss',
        },
        {
            description:'The decreasing rate of body hair, especially from the eyebrow',
        }
    ]
    return (
        <div>
            <div>
                <p className="text-[18px] md:text-[24px] leading-[36px] w-[70%] mx-auto text-center font-medium">
                    The technique used to perform the hair transplant surgery is
                    determined after going through a detailed hair analysis that
                    includes checking the following factors.
                </p>
                <Do
                    titleNotNeeded
                    pointsCentered
                    hideMainDescription
                    data={data}
                    backgroundImage={image}
                    buttonNotNeeded
                />
            </div>
        </div>
    )
}

export default TechniqueUsed
