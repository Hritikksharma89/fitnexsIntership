import React from 'react'
import cx from 'classnames'

const BulletsOnTextCard = ({
    title = '',
    titleDescription = '',
    subtitle = '',
    description = [],
    img,
    isReversed = false,
    bulletsNotNeeded = false,
    colorReversal = false,
    topicNotNeeded = false,
    bulletContentsOnly = false,
    imgCenterYaxis = false
}) => {
    return (
        <div className="grid sm:grid-cols-2 mb-10 px-4 md:px-0">
            <div className="flex flex-col gap-x-2 gap-y-3 md:pl-10 mb-6 justify-center">
                <span className={cx("text-center md:text-start flex flex-col gap-y-6 my-2",{'hidden':bulletContentsOnly})}>
                    <p className="text-[28px] lg:text-[36px] xl:text-[40px] font-semibold lg:leading-[50px]">
                        {title}
                    </p>
                    <p className="text-[1.125rem] leading-[1.825rem] font-normal">
                        {titleDescription}
                    </p>
                    <p className="text-[1.25rem] leading-[1.8125rem] font-medium">
                        {subtitle}
                    </p>
                </span>

                <ul className="text-start text-[14px] sm:text-[18px] flex flex-col gap-4 sm:gap-8 justify-center">
                    {Array.isArray(description) &&
                        description.map(({ id, topic, description }) => (
                            <li key={id}>
                                <span className="flex gap-x-4">
                                    <div
                                        className={cx('', {
                                            'hidden': bulletsNotNeeded,
                                        })}
                                    >
                                        <span
                                            className={cx(
                                                'bg-[#000] text-[#FFF] h-9 w-9 md:h-14 md:w-14 rounded-full flex shrink-0 items-center justify-center',
                                                {
                                                    'bg-[#fff] !text-[#000] h-9 w-9 md:h-14 md:w-14 rounded-full flex shrink-0 items-center justify-center':
                                                        colorReversal,
                                                }
                                            )}
                                        >
                                            {id}
                                        </span>
                                    </div>
                                    <span
                                        className={cx(
                                            'text-[#000] leading-[1.8125rem] flex flex-col justify-center text-center sm:text-start gap-y-2',
                                            {
                                                '!text-[#fff] leading-[1.8125rem] flex flex-col justify-center text-center sm:text-start gap-y-2':
                                                    colorReversal,
                                            }
                                        )}
                                    >
                                        <div className={cx('',{'hidden':topicNotNeeded})}>
                                            <span className="text-2xl font-semibold">
                                                {topic}
                                            </span>
                                        </div>
                                        <p className="text-[0.825rem] md:text-lg">{description}</p>
                                    </span>
                                </span>
                            </li>
                    ))}
                </ul>
            </div>
            <div
                className={cx('flex', {
                    'row-start-1 justify-center': isReversed, 
                    'justify-center':!isReversed,
                    'items-center md:py-6':imgCenterYaxis
                })}
            >
                <img
                    src={img}
                    alt={title}
                    className="object-contain sm:px-0 px-3 h-[90%]"
                />
            </div>
        </div>
    )
}
export default BulletsOnTextCard;
