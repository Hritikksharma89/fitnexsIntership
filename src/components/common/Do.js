import React from 'react'
import cx from 'classnames'
import ButtonGradient from './buttonGradient'

const Do = ({
    data,
    backgroundImage,
    mainTitle,
    mainDescription,
    subTitle,
    subDescription,
    bulletImg = false,
    bulletImagesNotNeeded = false,
    bulletsNotNeeded = false,
    titleNotNeeded = false,
    descriptionNotNeeded = false,
    buttonNotNeeded = false,
    action,
    colorReversal = false,
    isReversed = false,
    colorForWhiteBG = false,
    imagelist = false,
    itemGap = false,
    largerGapOnPoints = false,
    pointsCentered = false,
    hideMainDescription= false
}) => {
    return (
        <>
            <div className="mb-10 pt-12">
                <div>
                    <p
                        className={cx(
                            'text-center text-[2.5rem] leading-[3.125rem] font-semibold text-[#060606]',
                            { '!text-[#fff]': colorReversal }
                        )}
                    >
                        {mainTitle}
                    </p>
                </div>
                <div className="md:w-[71%] m-auto mt-8">
                    <p
                        className={cx(
                            'text-center text-[1.25rem] leading-[1.8125rem] font-normal text-[#3e3e3e]',
                            { '!text-[#fff]': colorReversal, 'hidden':hideMainDescription }
                        )}
                    >
                        {mainDescription}
                    </p>
                </div>
                <div
                    className={cx(
                        'mx-2 text-center md:text-start md:flex justify-center align-middle justify-items-center items-center gap-x-[1.2rem] pt-10',
                        { 'flex-row-reverse': isReversed }
                    )}
                >
                    <div className="md:w-1/2 flex justify-center justify-items-center items-center">
                        <div className="min-w-fit bg-[#000] border-[60px] border-solid border-black rounded-full">
                            <img
                                src={backgroundImage}
                                className="image-scale"
                                alt="backgroundBlackCircle"
                            />
                        </div>
                    </div>

                    <div className="md:w-[45%] pt-4">
                        <div className="text-center flex flex-col gap-2 justify-center px-2 h-auto min-w-full m-auto">
                            <p
                                className={cx(
                                    'text-[#060606] font-semibold text-[2.5rem] leading-[3.75rem] flex self-center sm:self-start text-center sm:text-start',
                                    {
                                        '!text-[#fff] font-semibold text-[2.5rem] leading-[3.75rem]':
                                            colorReversal,
                                        '!text-[#060606] font-medium':
                                            colorForWhiteBG,
                                    }
                                )}
                            >
                                {subTitle}
                            </p>
                            <p
                                className={cx(
                                    'text-[#3e3e3e] font-normal text-[1.5rem] leading-[2.25rem] flex self-center sm:self-start text-center sm:text-start flex-wrap',
                                    {
                                        'text-[#fff] font-normal text-[1.5rem] leading-[2.25rem] flex self-center sm:self-start text-center sm:text-start flex-wrap':
                                            colorReversal,
                                        '!text-[#3e3e3e] font-normal text-[1.2rem] leading-[2.25rem] flex self-center sm:self-start text-center sm:text-start flex-wrap':
                                            colorForWhiteBG,
                                    }
                                )}
                            >
                                {subDescription}
                            </p>
                        </div>
                        <div
                            className={cx('flex flex-col', {
                                [itemGap]: itemGap,
                            })}
                        >
                            {data.map((item, index) => (
                                <div
                                key={index}
                                className={cx("flex flex-row justify-start gap-8",{
                                    'my-5':largerGapOnPoints,
                                    'items-center align-middle my-3': pointsCentered
                                })}
                                >
                                    {item.bulletImg ? (
                                        <div
                                            className={cx(
                                                'w-16 h-16 xl:h-20 xl:w-20 rounded-full flex self-start shrink-0'
                                            )}
                                        >
                                            <img
                                                src={item.bulletImg}
                                                className="min-w-full min-h-full "
                                                alt="images"
                                            />
                                        </div>
                                    ) : (
                                        <span
                                            className={cx(
                                                'mt-0 grid self-start ',
                                                { 'hidden': bulletsNotNeeded }
                                            )}
                                        >
                                            <span
                                                className={cx(
                                                    'bg-[#000] text-[#FFF] text-[2rem] leading-[1.825rem] font-semibold h-16 w-16 rounded-full flex shrink-0 items-center justify-center mt-2',
                                                    {
                                                        '!bg-[#fff] border-[#000] border-[2px] !text-[#000] h-14 w-14 rounded-full flex shrink-0 items-center justify-center': colorReversal,
                                                        '!bg-[#fff] border-[#000] border-[1px] !text-[#000] h-14 w-14 rounded-full flex shrink-0 items-center justify-center': colorForWhiteBG,
                                                        '!mt-0':pointsCentered
                                                    }
                                                )}
                                            >
                                                {index + 1}
                                            </span>
                                        </span>
                                    )}

                                    <div className={cx("flex flex-col gap-y-2 justify-center text-center sm:text-start pb-2",{'!pb-0':pointsCentered})}>
                                        <div
                                            className={cx(
                                                'text-[1.5rem] text-[#060606] font-semibold mb-[14px]',
                                                {
                                                    'text-[1.5rem] !text-[#fff]': colorReversal,
                                                    'hidden': titleNotNeeded,
                                                }
                                            )}
                                        >
                                            {item.title}
                                        </div>

                                        <div
                                            className={cx(
                                                'text-[0.875rem] md:text-[1.125rem] text-[#3E3E3E]',
                                                {
                                                    'text-[0.875rem] md:text-[1.125rem] !text-[#fff]': colorReversal,
                                                    'hidden': descriptionNotNeeded,
                                                }
                                            )}
                                        >
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div
                            className={cx('mt-2', { 'hidden': buttonNotNeeded })}
                        >
                            <ButtonGradient actionRequired={action} />
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </>
    )
}

export default Do
