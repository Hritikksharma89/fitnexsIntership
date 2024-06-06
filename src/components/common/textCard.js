import React from 'react'
import cx from 'classnames'
import ButtonGradient from './buttonGradient'
import classNames from 'classnames'

const TextCard = ({
    cardTitle = '',
    title = '',
    subtitle = '',
    paragraphs = [],
    img,
    isReversed = false,
    buttonNotNeeded = false,
    action,
    className,
    containerClass,
    whiteText = false,
    imageCentered = false
}) => {
    return (
        <div className={cx("my-3",{'!text-[#fff]':whiteText})}>
            <p className="font-semibold text-center text-[2rem] md:text-[2.5rem] lg:leading-[3.125rem] my-6 2xl:my-1">
                {cardTitle}
            </p>
            <div className="grid sm:grid-cols-2 my-3 lg:my-0 gap-y-5 ">
                <div className={cx("textSection flex gap-x-2 h-full justify-center justify-items-center content-center items-center xl:items-start xl:pt-24 2xl:items-center",{'xl:!items-center xl:!pt-0':imageCentered})}>
                    <div className={`px-6 grid grid-flow-row gap-y-2 text-center md:text-start ${containerClass}`}>
                        <p className={`text-[28px] lg:text-[36px] xl:text-[40px] font-semibold lg:leading-[50px] ${className}`}>
                          {title}
                        </p>
                        <p className={`text-[1.25rem] font-medium leading-[1.8125rem] ${className}`}>
                          {subtitle}
                        </p>
                        {paragraphs.map((para, index) => (
                            <p
                              key={index}
                              className="text-[0.875rem] lg:text-[1.125rem] lg:leading-[1.8125rem] font-normal"
                            >
                            {para}
                            </p>
                        ))}
                        <div
                            className={cx('mt-2 !z-50', {
                                hidden: buttonNotNeeded,
                            })}
                        >
                            <ButtonGradient actionRequired={action} />
                        </div>
                    </div>
                </div>

                <div
                    className={cx(
                        'flex justify-items-center object-contain h-full lg:p-[1rem] xl:p-[4rem]',
                        {
                            'row-start-1': isReversed,
                            'xl:!p-[0px]':imageCentered
                        }
                    )}
                >
                    <img
                        src={img}
                        alt={title}
                        className="object-contain lg:px-3 "
                    />
                </div>
            </div>
        </div>
    )
}

export default TextCard
