import React from 'react'
import CommonHeading from '../common/commonHeading'

const CosmeticSurgery = () => {
    return (
        <div className="relative">
            <div className="bg-cosmeticSurgeryBG bg-center md:bg-cover h-[70vh] brightness-50"></div>
            <div className="absolute top-2 min-w-full ">
                <CommonHeading
                    title="Cosmetic Procedures"
                    description="At KOZA , we offer cutting-edge Cryo Cool Sculpting treatments to help you achieve your desired body contours. Cryo CoolSculpting is a non-invasive fat reduction technology that helps target and eliminate stubborn fat deposits in specific areas of the body"
                />
            </div>
        </div>
    )
}
export default CosmeticSurgery
