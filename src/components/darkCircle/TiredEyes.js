import React from 'react'
import CommonHeading from '../common/commonHeading'
import image from '../../assets/darkCircle/darkCircle.png'

const TiredEyes = () => {
    return (
        <>
            <div className="relative w-full min-h-full ">
                <div className=" h-[85vh] sm:h-[80vh] md:h-[75vh] lg:h-[82vh] xl:h-full  min-h-full">
                    <img
                        src={image}
                        alt="background"
                        className="min-w-full object-cover  h-full "
                    />
                </div>
                <CommonHeading
                    title="Dark Circles or Tired Eyes"
                    description="Get rid of those dark circles and tired sunken eyes with best skin clinic in Bangalore"
                />
            </div>
        </>
    )
}
export default TiredEyes
