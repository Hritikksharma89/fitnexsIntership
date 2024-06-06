import React from 'react'
import cx from 'classnames'

const NumericBullets = ({
    title = '',
    titleDescription = '',
    largeDescription,
    boldLargeDescription,
    hideTitleDesc = false,
    subtitle = '',
    hideSubtitle = false,
    description = [],
    img,
    isReversed = false,
    bulletsNotNeeded = false,
    colorReversal = false,
    topicNotNeeded = false,
    bulletContentsOnly = false,
    colorForWhiteBG = false,
    bulletsCenteredY = false,
}) => {
    return (
        <div className="grid sm:grid-cols-2 mb-10 px-4 md:px-0 gap-x-10">
            <div className="flex flex-col gap-x-2 gap-y-3 md:pl-10 mb-6 justify-center">
                <span
                    className={cx(
                        'text-[#060606] text-center md:text-start flex flex-col gap-y-6 my-2',
                        { 'hidden': bulletContentsOnly }
                    )}
                >
                    <p className="text-[2.5rem] leading-[3.125rem] font-semibold">
                        {title}
                    </p>
                    <p
                        className={cx(
                            'text-[#3e3e3e] text-[1.125rem] leading-[1.825rem] font-normal',
                            {
                                'md:text-[1.5rem] md:leading-[2.25rem]': largeDescription,
                                'text-[#060606] text-[1.5rem] md:leading-[3.125rem] font-semibold': boldLargeDescription,
                                'hidden': hideTitleDesc,
                            }
                        )}
                    >
                        {titleDescription}
                    </p>
                    <p
                        className={cx(
                            'text-[#060606] text-[1.25rem] leading-[1.8125rem] font-medium',
                            { 'hidden': hideSubtitle }
                        )}
                    >
                        {subtitle}
                    </p>
                </span>

                <ul className="text-start text-[14px] sm:text-[18px] flex flex-col gap-4 sm:gap-8 justify-center">
                    {Array.isArray(description) &&
                        description.map(({ id, topic, description }) => (
                            <li key={id}>
                                <span className="flex gap-x-4">
                                    <div
                                        className={cx('', {'hidden': bulletsNotNeeded,})}>
                                        <span
                                            className={cx(
                                                'bg-[#000] text-[#FFF] text-[1.6rem] leading-[1.825rem] font-semibold h-9 w-9 md:h-14 md:w-14 rounded-full flex shrink-0 items-center justify-center',
                                                {
                                                    'bg-[#fff] !text-[#000] h-9 w-9 md:h-14 md:w-14 rounded-full flex shrink-0 items-center justify-center': colorReversal,
                                                    '!bg-[#fff] !text-[#000] border-2 border-[#000] h-9 w-9 md:h-14 md:w-14 rounded-full flex shrink-0 items-center justify-center': colorForWhiteBG,
                                                }
                                            )}
                                        >
                                            {id}
                                        </span>
                                    </div>
                                    <span
                                        className={cx(
                                            'text-[#060606] leading-[1.8125rem] flex flex-col justify-center text-center sm:text-start gap-y-4',
                                            {
                                                '!text-[#fff] leading-[1.8125rem] flex flex-col justify-center text-center sm:text-start': colorReversal,
                                                '!text-[#060606] leading-[1.8125rem] flex flex-col justify-center text-center sm:text-start': colorForWhiteBG,
                                            }
                                        )}
                                    >
                                        <div className={cx('', {'hidden': topicNotNeeded,})}>
                                            <span className="text-[#060606] text-2xl font-semibold">
                                                {topic}
                                            </span>
                                        </div>
                                        <p className="text-[#3e3e3e] text-[0.825rem] md:text-lg">
                                            {description}
                                        </p>
                                    </span>
                                </span>
                            </li>
                        ))}
                </ul>
            </div>
            <div
                className={cx('flex ', {
                    'row-start-1 justify-start': isReversed,
                    'justify-end ': !isReversed,
                })}
            >
                <img
                    src={img}
                    alt={title}
                    className="object-contain sm:px-0 px-3"
                />
            </div>
        </div>
    )
}
export default NumericBullets
