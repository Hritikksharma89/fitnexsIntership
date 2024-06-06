import React from 'react'
import ButtonGradient from '../../common/buttonGradient'
import PicCatalog from '../../common/PicCatalog'
import filterimg from '../../../assets/skinImg/antiageingimg/filterimg.png'
import performedimg from '../../../assets/skinImg/antiageingimg/performed.png'
const WhyBotox = () => {
    return (
        <>
            <div className=" mx-auto w-[90%] md:w-[80%] flex gap-y-5 flex-col my-2 py-2 ">
                <div className="text-center text-[2rem] md:text-[2.5rem] font-semibold leading-[35px] md:leading-[60px] ">
                    Why choose this treatment?
                </div>
                <div className="text-center text-[18px] md:text-[24px] leading-[36px] py-2 text-[#3E3E3E] ">
                    To improve the appearance of moderate to severe frown lines
                    and crow’s feet lines, it is the only approved treatment.
                    Being one of the most extensively researched medical
                    aesthetic treatments, it is now a trusted and reliable
                    treatment. Due to its significant results in improving the
                    facial aesthetics, it is widely used by people all around
                    the world.
                </div>
                <div className="text-center py-2">
                    <ButtonGradient actionRequired="Book Appointment Now" />
                </div>
            </div>

            <div className="mt-6 md:mt-14">
                <div className="text-center font-semibold text-[28px] sm:text-[33px] lg:text-[40px] leading-[30px] md:leading-[50px] my-2">
                    Fillers
                </div>
                <div className="py-2 md:py-4">
                    <PicCatalog
                        img={filterimg}
                        isReversed
                        titleNotNeeded
                        second_title="What it is?"
                        description="<div>Fillers are the gift of science that enhance the beauty and grace of your face by making it more attractive and aesthetic by balancing the symmetry and harmony in the external features of the face.</div><div> Fillers are gel like substance made up of Hyaluronic acid that hydrate, volumize and re-contour the face to provide a naturally attractive appearance. Hyaluronic acid is a hygroscopic product that holds the moisture within the skin and keeps it hydrated.</div>"
                    />
                </div>
                <div className="py-2 md:py-4">
                    <PicCatalog
                        img={performedimg}
                        titleNotNeeded
                        second_title="How is it performed?"
                        description="First, the face is cleansed and local anaesthetic cream is applied for about 40 mins, then fillers are put on the concerned part. Post-procedure instructions are given and one goes back home with a youthful look without any pain or swelling!"
                    />
                </div>
            </div>
        </>
    )
}

export default WhyBotox
