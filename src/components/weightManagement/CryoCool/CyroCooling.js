import React from 'react'
import cyro from '../../../assets/weightMangement/cryoImg.png'
import meso from '../../../assets/weightMangement/mesoImg.png'
import ultherapy from '../../../assets/weightMangement/ultherapyImg.png'
import thread from '../../../assets/weightMangement/threadImg.png'
import sclupt from '../../../assets/weightMangement/SculptImg.png'
import CommonHeading from '../../common/commonHeading'
import bgimg from '../../../assets/weightMangement/bgImgs/bgcyro.png'
import AboutServices from '../../common/AboutServices'

const CyroCooling = () => {
    const content = [
        {
            id: 1,
            Img: cyro,
            topic: 'Cryo cool sculpting ',
        },
        {
            id: 2,
            Img: meso,
            topic: 'Meso sculpt injections',
        },
        {
            id: 3,
            Img: ultherapy,
            topic: '7 D ultherapy lift ',
        },
        {
            id: 4,
            Img: thread,
            topic: 'Thread lift',
        },
        {
            id: 5,
            Img: sclupt,
            topic: 'EM sculpt',
        },
    ]
    return (
        <>
            <div className="relative w-full min-h-full">
                <div className="h-[85vh] sm:h-[80vh] md:h-[75vh] lg:h-[82vh] xl:h-full min-h-full">
                    <img
                        src={bgimg}
                        alt="background"
                        className="min-w-full object-cover h-full "
                    />
                </div>
                <CommonHeading
                    title="Cryo Cool Sculpting"
                    description="At KOZA , we offer cutting-edge Cryo Cool Sculpting treatments to help you achieve your desired body contours. Cryo CoolSculpting is a non-invasive fat reduction technology that helps target and eliminate stubborn fat deposits in specific areas of the body"
                />
            </div>

            <div>
                <AboutServices
                    title='Know more about us'
                    subtitle='We offer the best skin and hair care treatment and provides proper solutions'
                    content={content}
                    largeGap
                />
            </div>
        </>
    )
}

export default CyroCooling
