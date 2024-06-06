import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import arrow from '../../assets/navImg/arrow.png'
import cx from 'classnames'

const Opendrawer = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(-1)

    const toggleOpen = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index))
    }

    return (
        <>
            {data.map((item, index) => {
                const zIndex = openIndex === index ? 1 : 0
                return (
                    <div
                        key={index}
                        className="relative"
                        style={{ zIndex: zIndex }}
                    >
                        <div
                            onClick={() => toggleOpen(index)}
                            className="flex justify-between items-center w-full border-b-[1px] border-[#000]/20 py-3 pl-3"
                        >
                            <p className="font-medium opacity-100 cursor-pointer text-[16px] border-black-500 pl-1">
                                {item.title}
                            </p>
                            <div className="mr-3">
                                {openIndex === index ? (
                                    <img
                                        src={arrow}
                                        alt="menu"
                                        className="rotate-180 cursor-pointer"
                                    />
                                ) : (
                                    <img
                                        src={arrow}
                                        alt="menu"
                                        className="  cursor-pointer"
                                    />
                                )}
                            </div>

                            <div
                                className={cx(
                                    'absolute top-10 left-0 w-full bg-[#4C163F] z-10 mt-2 py-2 px-1 opacity-0 scale-y-0 origin-top transition-all duration-300 translate-y-0',
                                    {
                                        'opacity-100 scale-y-100':
                                            openIndex === index,
                                    }
                                )}
                            >
                                <ul className="flex flex-col gap-y-4">
                                    {item.details.map((detail, idx) => (
                                        <li
                                            key={idx}
                                            className="text-[#fff] bg-[#4C163F] border-b-[1px] pl-2 border-[#fff] text-[14px] py-1"
                                        >
                                            <NavLink
                                                to={detail.Link}
                                                className="text-white cursor-pointer"
                                            >
                                                {detail.detail}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Opendrawer
