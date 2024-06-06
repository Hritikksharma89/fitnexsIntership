import cx from 'classnames'
import React from 'react'
import tick from '../../assets/About us/download.png'
import { Link } from 'react-scroll'
const CommonHeading = ({ title, Subtitle, description, bgSkin, className }) => {
    return (
        <>
            <div
                className={`absolute top-4 sm:top-6 left-[7%] w-[80%] sm:w-[60%] md: xl:w-1/2 mx-auto ${className}`}
            >
                <div className="text-[#fff] text-[26px] sm:text-[30px] md:text-[32px] lg:text-[38px] leading-[35px] sm:leading-[45px] lg:leading-[57px] font-semibold py-1">
                    {title}
                </div>
                <div className="text-[#fff] text-[24px] sm:text-[16px] md:text-[20px] lg:text-[24px] leading-[35px] sm:leading-[45px] lg:leading-[57px] font-medium">
                    {Subtitle}
                </div>
                <p className="text-[#fff]  text-[12px] lg:text-[14px] leading-4 lg:leading-7 font-normal w-full md:w-[73%] py-1 pb-5">
                    {description}
                </p>

                <Link smooth to="book-appointment">
                    <button
                        className={cx(
                            'bg-[#000] text-[#fff] text-[12px] sm:text-[14px] py-2 lg:py-3 px-6 leading-6 font-medium drop-shadow-md rounded-[6px] pb-1',
                            {
                                '!bg-[#FFF] !text-[#000]': !bgSkin,
                            }
                        )}
                    >
                        Book Appointment
                    </button>
                </Link>

                <div className=" w-[93%] lg:w-[80%] flex flex-col gap-y-2 lg:gap-y-3 py-1 xl:py-3 mt-2 ">
                    <p className=" text-[#fff] text-[16px] lg:text-[18px] leading-6 font-normal capitalize">
                        Discover our entire services and know more about us
                    </p>
                    <hr className=" text-[#fff] py-1 w-[80%] lg:w-[60%] " />
                    <Link
                        to="nextSection"
                        smooth
                        className=" text-[#fff] flex  gap-4 my-2 py-2"
                    >
                        <h1 className=" text-[16px] lg:text-[18px] font-medium leading-6 ">
                            Explore now{' '}
                        </h1>
                        <img
                            src={tick}
                            alt="icons"
                            className="animate-[bounce_2s_ease-in-out_infinite] cursor-pointer"
                        />
                    </Link>
                </div>
            </div>
        </>
    )
}
export default CommonHeading
