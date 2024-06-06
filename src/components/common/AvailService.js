import React from 'react'
import ButtonGradient from './buttonGradient'

const AvailService = ({ title, text1, text2 }) => {
    return (
        <div className="bg-gradient-to-r from-[#632A3E] to-[#370541] text-[#FFFFFF]  py-2 md:py-4 lg:py-8 px-2 md:px-12 lg:px-28 text-center">
            <p className="text-[28px] md:text-[33px] lg:text-[40px] leading-[34px] md:leading-[60px] font-semibold my-2 pt-5">
                {title}
            </p>
            <p className="text-[16px]  lg:text-[24px] font-normal leading-[30px] md:leading-[36px] my-4">
                {text1}
            </p>
            <p className="text-[16px]  lg:text-[24px] font-normal leading-[30px] md:leading-[36px] my-4">
                {text2}
            </p>
            <div className=" flex items-center justify-center pt-3">
                <ButtonGradient
                    WhiteButton={true}
                    actionRequired="Book Appointment"
                />
            </div>
        </div>
    )
}

export default AvailService
