import React from 'react'
import cx from 'classnames'

const ImageScale = ({ heading = '', matter = '', contentMatter = [] }) => {
    return (
        <>
            <div className="m-2 p-3">
                <div className="text-center">
                    <p className="text-[#060606] text-[28px] md:text-[33px] lg:text-[2.5rem] leading-[30px] md:leading-[3.125rem] font-semibold">
                        {heading}
                    </p>
                    <p className="text-[#3e3e3e] text-[1.5rem] my-4 px-40">{matter}</p>
                </div>
                <div className=''>
                    {contentMatter.map(
                        (
                            { title, text, bgimg, front, subtitle, isReversed, sectionHeading, sectionMatter, largerTitle=false },
                            index
                        ) => (
                            <div key={index}>
                                    <div className="text-[#060606] text-center">
                                        <div className="text-[27px] md:text-[33px] lg:text-[2.5rem] leading-[30px] md:leading-[3.125rem] font-semibold">
                                            {sectionHeading}
                                        </div>
                                        <p className="text-[1.5rem] mt-4 text-[#3e3e3e]">
                                            {sectionMatter}
                                        </p>
                                    </div>
                                <div
                                    className={cx(
                                        'sm:flex gap-2 gap-x-[3rem] p-2 md:p-5 rounded-[30px] my-6 mx-auto',
                                        { 'flex-row-reverse': isReversed }
                                    )}
                                >
                                    <div className="relative w-full sm:w-[40%] overflow-hidden lg:my-1 grid">
                                        <img
                                            src={bgimg}
                                            alt="side"
                                            className="w-full h-full object-contain"
                                        />
                                        <div
                                            className={cx(
                                                'absolute bottom-0 rounded-lg left-[1px]'
                                            )}
                                        >
                                            {front && (
                                                <img
                                                    src={front}
                                                    alt="frontimg"
                                                    className="w-2/3 xl:w-full h-auto object-cover rounded-xl hover-animation origin-bottom-left"
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center w-full flex-grow sm:w-[60%] my-4 sm:my-0">
                                        <div className="flex flex-col !gap-y-2 text-center sm:text-start">
                                            <p className={cx("text-[#060606] text-[20px] lg:text-[24px] font-semibold", {'!text-[2.25rem]': largerTitle})}>
                                                {title}
                                            </p>
                                            <p className="font-medium text-[#060606] text-[1.125rem] leading-[1.8125rem]">
                                                {subtitle}
                                            </p>
                                            <p
                                                className="font-normal text-[#3e3e3e] text-[0.825rem] lg:text-[1.125rem] leading-[1.8125rem] w-[95%] flex flex-col gap-y-8"
                                                dangerouslySetInnerHTML={{
                                                    __html: text,
                                                }}
                                            ></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    )
}
export default ImageScale
