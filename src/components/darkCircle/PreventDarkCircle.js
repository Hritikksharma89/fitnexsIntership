import React from 'react'
import bgimage from '../../assets/darkCircle/preventDarkCircleBg.png'
import bgimage2 from '../../assets/darkCircle/preventDarkCircleBg2.png'
import bgimage3 from '../../assets/darkCircle/preventDarkCircleBg3.png'
import image from '../../assets/darkCircle/preventDarkCircleFront.png'
import image2 from '../../assets/darkCircle/preventDarkCircleFront2.png'
import image3 from '../../assets/darkCircle/preventDarkCirclefront3.png'
import ImageScale from '../common/reverseBolierPlate'

const PreventDarkCircle = () => {
    let data = [
        {
            title: '8 hours of sleep',
            text: 'Studies suggest that high stress levels increase the occurrence of dark circles, whereas proper sleep cycles, along with a healthy lifestyle, can decrease discoloration. Keep a consistent sleep schedule, and aim for at least 8 hours of sleep every day.',
            front: image,
            bgimg: bgimage,
        },
        {
            title: 'Protection from sun exposure',
            text: 'Protecting the eyes with UV proof sunglasses, and the use of sunscreen around the eyes helps prevent dark circles that are caused due to sun exposure. Look for sunscreen with an SPF (Sun Protection Factor) of 30+, and UV protected glasses.',
            front: image2,
            bgimg: bgimage2,
            isReversed: true,
        },
        {
            title: 'Cutting down on smoking and alcohol',
            text: 'Drinking alcohol and smoking can lead to premature aging signs like wrinkles and grey hair and increases the appearance of dark circles, faster. Cutting down on alcohol will also reduce the puffy and bloated appearance of your face, helping reduce the visual impact of dark circles.',
            front: image3,
            bgimg: bgimage3,
        },
    ]
    return (
        <>
            <div>
                {/* <div className="flex flex-col items-center gap-6">
                    <p className=" lg:leading-[50px] text-[28px] md:text-[34px] lg:text-[40px] font-semibold text-[#000000]">
                        How can I Prevent Dark Circles?
                    </p>
                    <p className="text-[18px] text-[#3E3E3E]">
                        By following a healthy lifestyle, you can prevent the
                        occurrence of dark circles. Here are a few healthy
                        habits to adopt.
                    </p>
                </div> */}
                <ImageScale 
                    heading='How can I prevent dark circles?' 
                    matter='By following a healthy lifestyle, you can prevent the
                    occurrence of dark circles. Here are a few healthy
                    habits to adopt.' 
                    contentMatter={data} 
                />
            </div>
        </>
    )
}
export default PreventDarkCircle
