import React from 'react'
import cx from 'classnames'

const PicCatalog = ({
    className,
    title = '',
    second_title = '',
    description = '',
    img,
    isReversed = false,
    isTextWhite,
    titleNotNeeded = false,
    secondTitleNotNeeded = false,
    largeGapY = false
}) => {
    return (
        <div className="overflow-x-clip grid sm:grid-cols-2 my-3 gap-y-5 gap-x-8">
            <div className="flex gap-x-2 p-2 h-[100%] justify-center items-center">
                <div className="px-6 flex flex-col gap-y-6">
                    <p
                        className={cx(
                            'text-[2rem] text-[#060606] sm:text-[2.5rem] font-semibold leading-[3.125rem]',
                            { '!text-[#fff]': isTextWhite, 'hidden':titleNotNeeded }
                        )}
                    >
                        {title}
                    </p>
                    <p
                        className={cx(
                            'text-[1.5rem] text-[#060606] leading-[1.8125rem] font-medium pt-4',
                            { '!text-[#fff]': isTextWhite, 'hidden': secondTitleNotNeeded }
                        )}
                    >
                        {second_title}
                    </p>
                    <p
                        className={cx(
                            'text-[1.125rem] text-[#3e3e3e] font-normal leading-[1.8125rem] pt-4 flex flex-col gap-y-6',
                            { '!text-[#ffffff]': isTextWhite,
                                'text-[20px] lg:text-[24px] lg:leading-[40px] lg:pr-[40px] !pt-0 !gap-y-10':largeGapY
                            }
                        )}
                        dangerouslySetInnerHTML={{ __html: description }}
                    ></p>
                </div>
            </div>

            <div
                className={cx('flex justify-stretch', {
                    'row-start-1': isReversed,
                })}
            >
                <img
                    src={img}
                    alt={title}
                    className={`object-contain sm:px-0 px-3 ${className}`}
                />
            </div>
        </div>
    )
}
export default PicCatalog
