import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import linkdin from '../../assets/linkedin.svg'
import leftArrow from '../../assets/leftArrow.svg'
import insta from '../../assets/insta.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import share from '../../assets/share.svg'
import cx from 'classnames'
import { HairDropDown, SkinDropDown, WeightDropDown } from './NestedLinks'

const Navbar = () => {
    let activeClass =
        'font-medium  text-[#ffffff] text-[17px] xl:text-[21px]  leading-[29px] cursor-pointer p-0 '
    let inactiveClass =
        'font-light text-[17px] xl:text-[20px] text-[#D1D1D1] leading-[29px] cursor-pointer p-0'

    let dotclass =
        'absolute bottom-0 left-1/2 w-[5px] h-[5px] top-7  rounded-full bg-white'
    const [showLinks, setShowLinks] = useState(false)
    return (
        <div className="relative z-50 overflow-x-clip">
            {/* <div className="bg-[#542136] w-full flex flex-warp justify-center items-center px-3 xl:px-10 gap-x-[35px]  xl:gap-x-[60px]  py-4"> */}
            <div className="bg-[#542136] sticky top-0 w-full flex flex-wrap justify-evenly px-4 py-4 z-50">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? activeClass + ' relative' : inactiveClass
                    }
                >
                    {({ isActive }) => (
                        <>
                            Home
                            {isActive && <span className={dotclass}></span>}
                        </>
                    )}
                </NavLink>
                <NavLink
                    to="/aboutus"
                    className={({ isActive }) =>
                        isActive ? activeClass + ' relative' : inactiveClass
                    }
                >
                    {({ isActive }) => (
                        <>
                            About Us
                            {isActive && <span className={dotclass}></span>}
                        </>
                    )}
                </NavLink>

                <WeightDropDown />
                <SkinDropDown />
                <HairDropDown />
                {/* <NavLink
                    to="*"
                    className={({ isActive }) =>
                        isActive ? activeClass : inactiveClass
                    }
                >
                    {({ isActive }) => (
                        <>
                            Cosmetic Gynaecology
                            {isActive && (
                                <span className="absolute bottom-0 left-1/2 w-[5px] h-[5px] top-7 rounded-full bg-white"></span>
                            )}
                        </>
                    )}
                </NavLink> */}
                {/* <NavLink
                    to="/cosmetic-procedures"
                    className={({ isActive }) =>
                        isActive ? activeClass + ' relative' : inactiveClass
                    }
                >
                    {({ isActive }) => (
                        <>
                            Cosmetic Procedures
                            {isActive && <span className={dotclass}></span>}
                        </>
                    )}
                </NavLink> */}
                {/* <NavLink
                    to="/cosmetic-dentistry"
                    className={({ isActive }) =>
                        isActive ? activeClass + ' relative' : inactiveClass
                    }
                >
                    {({ isActive }) => (
                        <>
                            Cosmetic Dentistry
                            {isActive && <span className={dotclass}></span>}
                        </>
                    )}
                </NavLink> */}
                <NavLink
                    to="/ContactUs"
                    className={({ isActive }) =>
                        isActive ? activeClass + ' relative' : inactiveClass
                    }
                >
                    {({ isActive }) => (
                        <>
                            Contact Us
                            {isActive && <span className={dotclass}></span>}
                        </>
                    )}
                </NavLink> 
            </div>

            <div
                className={cx(
                    'social flex gap-2 translate-x-[75%] absolute top-[5%] right-0 bg-[#FFFFFF] rounded-tl-lg rounded-bl-lg lg:w-[18%] xl:w-[16%] z-50 h-[90%] !transition-all !duration-500 ease-in-out',
                    {
                        '!translate-x-0 !animate-none ': showLinks,
                    }
                )}
            >
                <div
                    className={cx(
                        'flex justify-center items-center cursor-pointer transition-all duration-500',
                        {
                            'rotate-180': showLinks,
                        }
                    )}
                    onClick={() => setShowLinks((prev) => !prev)}
                >
                    <img src={leftArrow} alt="leftArrow" />
                </div>
                <div className="flex flex-wrap justify-center items-center gap-6">
                    <Link>
                        <img src={share} alt="share" />
                    </Link>
                    <span>
                        <a
                            href="https://www.instagram.com/koza.aesthetic.care/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={insta} alt="insta" />
                        </a>
                    </span>
                    <span>
                        <a
                            href="https://www.facebook.com/kozaestheticcare"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={facebook} alt="fb" />
                        </a>
                    </span>
                    <span>
                        <a
                            href="https://www.linkedin.com/company/koza-aesthetic-care"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={linkdin} alt="linkedin" />
                        </a>
                    </span>
                    {/* <Link
                        href=''
                    >
                        <img src={twitter} alt="twitter" />
                    </Link> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar
