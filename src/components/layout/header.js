import React, { useState } from 'react'
import Navbar from './navbar'
import kozaLogo from '../../assets/navImg/KOZAUpdated.png'
import help from '../../assets/help.png'
import search from '../../assets/search.png'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../../assets/navImg/menu.png'
import cx from 'classnames'
import frontlogo from '../../assets/navImg/logo.png'
import Logo from '../../assets/navImg/secondLogo.png'
import cross from '../../assets/navImg/cross.png'
import phone from '../../assets/navImg/phone.png'
import calender from '../../assets/navImg/calender.png'
import Opendrawer from '../layout/optionrule.js'
import { Link } from 'react-scroll'

const Header = () => {
    const activeClass = 'font-medium opacity-100'
    const inactiveClass =
        'opacity-[80%] text-[#353535] cursor-pointer text-[16px] border-black-500'
    const dotClass = 'border-2 border-[#fff]'

    const [nav, setNav] = useState(false)

    const handleClick = () => {
        setNav(!nav)
    }

    const handelColse = () => {
        setNav(!nav)
    }

    const data = [
        {
            title: 'Weight Management',
            details: [
                { detail: 'Weight loss and gain', Link: '/weight-management' },
                { detail: 'Inch loss', Link: '/inchLoss' },
                {
                    detail: 'Cryo cool sculpting',
                    Link: '/cryocool',
                },
            ],
        },
        {
            title: 'Skin',
            details: [
                {
                    detail: 'Skin tone and pigmentation',
                    Link: '/skin',
                },
                { detail: 'Acne and acne scars', Link: '/acne-acne-scars' },
                { detail: 'Anti ageing', Link: '/anti-ageing' },
                { detail: 'Dark circles', Link: '/dark-circles' },
            ],
        },
        {
            title: 'Hair',
            details: [
                {
                    detail: 'Anti dandruff and hair fall',
                    Link: '/antiDandruff',
                },
                {
                    detail: 'Hair transplantation',
                    Link: '/hairTransplant',
                },
            ],
        },
    ]
    const MobileMenus = ({ label = '', onClick, to = '' }) => {
        return (
            <div className="border-b-[1px] w-full border-[#000]/20 py-3 pl-3">
                <NavLink
                    to={to}
                    onClick={onClick}
                    className={({ isActive }) =>
                        isActive ? `${activeClass} ${dotClass}` : inactiveClass
                    }
                >
                    {label}
                </NavLink>
            </div>
        )
    }
    return (
        <>
            <div className="bg-[#FFFFFF]">
                {/* header on lg screen */}

                <div className="hidden lg:flex  px-3 xl:px-10 ">
                    {/* <div className="flex justify-center items-center mr-[20%] p-2">
                        <img
                            src={kozaLogo}
                            alt="logo"
                            className="w-full md:w-1/2  md:mr-[15%] object-contain"
                        />
                    </div>
                    <div className="flex flex-wrap gap-5 gap-x-1 justify-center items-center pb-3">
                        <div className="flex">
                            <img src={help} alt="help" className="" />
                            <span className="text-[#000000] font-semibold">
                                (+91) 960 600 9079
                            </span>
                        </div>
                        <ButtonGradient actionRequired="BOOK APPOINTMENT NOW" />

                        <div>
                            <img src={search} alt="search" />
                        </div>
                    </div> */}
                    <div className=" w-[40%] p-4  ">
                        <a href="/" target="_self" rel="noopener noreferrer">
                            <img
                                src={Logo}
                                alt="logo"
                                className="object-contain"
                            />
                        </a>
                    </div>
                    <div className=" w-[60%] flex justify-end items-center gap-x-8 px-3 ">
                        <NavLink
                            to="tel:+9606009079"
                            className="flex justify-end cursor-pointer"
                        >
                            <img src={help} alt="help" className="" />
                            <span className="text-[#000000] font-semibold">
                                (+91) 960 600 9079
                            </span>
                        </NavLink>
                        <Link
                            smooth
                            to="book-appointment"
                            className=" flex justify-end"
                        >
                            <button className="  bg-gradient-to-r from-[#39063F] from-2.3% via-[#7C3057] via-72.44% to-[#602639] to-97.51% text-[#fff] text-base font-semibold text-[12.33px] px-4 py-3 rounded-2xl">
                                BOOK APPOINTMENT NOW
                            </button>
                        </Link>
                        {/* <div className=" justify-end">
                            <img src={search} alt="search" />
                        </div> */}
                    </div>
                </div>
                {/*  header on sm screen */}
                <div
                    onBlur={() => setNav(false)}
                    tabIndex={1}
                    className=" grid grid-cols-2 lg:hidden"
                >
                    <div className="flex p-2 ml-5  ">
                        <img
                            src={kozaLogo}
                            alt="logo"
                            className="  object-cover"
                        />
                    </div>
                    <div className=" flex justify-center sm:justify-around items-center gap-2    ">
                        <div className="w-[24px] h-[24px]">
                            <NavLink to="tel:+9606009079">
                                <img
                                    src={phone}
                                    alt="phone"
                                    className="cursor-pointer"
                                />
                            </NavLink>
                        </div>
                        <div className="w-[24px] h-[24px]">
                            <NavLink smooth to="book-appointment">
                                <img
                                    src={calender}
                                    alt="calendar"
                                    className="cursor-pointer"
                                />
                            </NavLink>
                        </div>
                        {/* <div className=" w-[24px] h-[24px] ">
                            <img
                                src={search}
                                alt="search"
                                className="cursor-pointer"
                            />
                        </div> */}
                        <div>
                            <div className=" ">
                                <div className=" mr-5" onClick={handleClick}>
                                    <img
                                        src={MenuIcon}
                                        alt="memu"
                                        className="cursor-pointer"
                                    />
                                </div>

                                <div
                                    className={cx(
                                        'absolute left-0 top-2  bg-[#fff] z-50 w-[90%] px-1 transition-all duration-300 -translate-x-full',
                                        {
                                            'translate-x-0 ': nav,
                                        }
                                    )}
                                >
                                    <div className=" flex  justify-between items-center px-6 ">
                                        <img
                                            src={frontlogo}
                                            alt="logo"
                                            className="  h-[80%] object-contain "
                                        />
                                        <div>
                                            <img
                                                src={cross}
                                                alt="memu"
                                                onClick={handelColse}
                                                className="cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                    <div className=" gap-y-5  z-50  ">
                                        <MobileMenus
                                            to="/"
                                            onClick={handelColse}
                                            label="Home"
                                        />
                                        <MobileMenus
                                            to="/aboutus"
                                            onClick={handelColse}
                                            label="About Us"
                                        />
                                        {/* <div className="relative">
                                            <div className="border-b-[1px] flex justify-between items-center w-full border-[#000]/20 py-3 pl-3">
                                                <p>Weight Management</p>
                                                <div
                                                    onClick={toggleOpen}
                                                    className="mr-3"
                                                >
                                                    {!open ? (
                                                        <img
                                                            src={arrow}
                                                            alt="memu"
                                                        />
                                                    ) : (
                                                        <img
                                                            src={arrow}
                                                            alt="cross"
                                                            className="rotate-180"
                                                        />
                                                    )}
                                                </div>
                                                {open && (
                                                    <div className="absolute top-10 left-0 w-full bg-[#fff] z-10 mt-2 py-2 px-1">
                                                        <ul className="flex flex-col gap-y-4 ml-4">
                                                            <li>Management</li>
                                                            <li>Management</li>
                                                            <li>Management</li>
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div> */}
                                        <Opendrawer data={data} />

                                        <MobileMenus
                                            to="/*"
                                            onClick={handelColse}
                                            label="Cosmetic Alternatives"
                                        />
                                        {/* <MobileMenus
                                            to="/cosmetic-procedures"
                                            onClick={handelColse}
                                            label="Cosmetic Procedures"
                                        />
                                        <MobileMenus
                                            to="/cosmetic-dentistry"
                                            onClick={handelColse}
                                            label="Cosmetic Dentistry"
                                        /> */}
                                        <MobileMenus
                                            to="/ContactUs"
                                            onClick={handelColse}
                                            label="ContactUs"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block sticky -top-[1px] z-50">
                <Navbar />
            </div>
        </>
    )
}

export default Header
