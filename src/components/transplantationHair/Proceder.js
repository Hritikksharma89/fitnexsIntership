import React from 'react'
import image2 from '../../assets/hair/proceder.png'
import image1 from '../../assets/hair/proceder2.png'

import NumericBullets from '../common/NumericBullets'

const Proceder = () => {
    let description = [
        {
            id: '6',
            description: `Then micro-grafts (bunch of 2-5 hair follicle) are extracted and then with the help of a specialised forceps the hair is implanted to the recipient area. The procedures are performed by expert Plastic Surgeons. Optimum result-oriented procedure with no risk and one gets natural results.`,
        },
        {
            id: '7',
            description: `Procedure takes around 6-7 hours including 2-3 breaks in between, patient will be in full consciousness during the procedure. After the procedure patient goes back home on the very same day and is called after 3 days to remove the bandage and 1st head-wash is done at the clinic.`,
        },
        {
            id: '8',
            description: `Follow up is done at an interval of one month. Hair will start growing from the 3rd month and full growth will take around 6-9 months.`,
        },
        {
            id: '9',
            description: `Cost of hair transplant will depend on the number of grafts required to cover the bald area. In some cases, hair can be transplanted without trimming the whole hair also.`,
        },
    ]

    let description2 = [
        {
            id: '1',
            description: `Trichoscopic analysis and folliscopy tests are conducted before hair transplant along with some blood investigation.`,
        },
        {
            id: '2',
            description: `We perform hair transplant by using the most advanced techniques of hair transplant that is Bio FUE (follicular unit extraction method). `,
        },
        {
            id: '3',
            description: `Under local anaesthesia surgeon will numb the scalp, then slits are made by the surgeon giving the hair a proper depth, angle and direction and the patient is conscious during the whole procedure. `,
        },
        {
            id: '4',
            description: `Hairline is marked according to patient’s desire. Harvesting of graft from donor area is done with the help of an FUE machine which has a very small punch of up to 0.7mm to extract out the hair. `,
        },
        {
            id: '5',
            description: `Then micro-grafts (bunch of 2-5 hair follicle) are extracted and then with the help of a specialised forceps the hair is implanted to the recipient area. The procedures are performed by expert Plastic Surgeons. Optimum result-oriented procedure with no risk and one gets natural results.  `,
        },
    ]

    return (
        <>
            <div className="my-4">
                <div className="my-4">
                    <NumericBullets
                        hideSubtitle
                        topicNotNeeded
                        description={description2}
                        img={image2}
                        title="Procedure"
                    />
                </div>
                <div className="my-4">
                    <NumericBullets
                        hideSubtitle
                        hideTitleDesc
                        topicNotNeeded
                        description={description}
                        img={image1}
                        isReversed
                    />
                </div>
            </div>
        </>
    )
}
export default Proceder
