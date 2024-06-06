import WeightNav from '../../assets/NavWeight.png'
import dropdownIcon from '../../assets/dropdownIcon.svg'
import { NavLink, useLocation } from 'react-router-dom'
import cx from 'classnames'
import SkinNav from '../../assets/NavSkin.png'
import HairNav from '../../assets/NavHair.png'
import Weight1 from '../../assets/lovepik-weight-loss-success-png-image_400667172_wh1200-removebg-preview.png'

export const WeightDropDown = () => {
    const { pathname } = useLocation()

    let activeDropClass =
        'font-medium text-[#fff] text-[1.25rem] leading-[1.825rem]'
    let activeDropdownClass =
        'font-medium text-[#3e3e3e] text-[1.25rem] leading-[1.825rem]'
    let inactiveDropClass =
        'font-light text-[#060606] text-[1.25rem] leading-[1.825rem] cursor-pointer'

    const navLinksWeightConfig = [
        { to: '/weight-management', text: 'Weight Management' },
        { to: '/inchLoss', text: 'Inch loss' },
        { to: '/cryocool', text: 'Cryo cool sculpting' },
        // { to: '/*', text: 'B Line therapies' },
    ]

    const isActive = [
        '/weight-management',
        '/inchLoss',
        '/cryocool',
        '/*',
    ].includes(pathname)

    return (
        <div className="relative group">
            <div className="cursor-pointer text-[#d1d1d1] font-light text-[17px] xl:text-[20px] leading-7 flex flex-col gap-y-2">
                <span
                    className={cx(
                        'active:text-[#fff] flex items-center gap-x-2 relative',
                        {
                            [activeDropClass]: isActive,
                        }
                    )}
                >
                    Weight Management
                    {isActive && (
                        <span className="absolute bottom-0 left-[50%] w-[5px] h-[5px] top-7 rounded-full bg-white"></span>
                    )}
                    <span>
                        <img
                            src={dropdownIcon}
                            alt=""
                            className="group-hover:rotate-180 transition-all duration-300 ease-in-out"
                        />
                    </span>
                </span>
                <span className="hidden">
                    <p className="text-5xl">.</p>
                </span>
            </div>
            <div className="absolute w-[40rem] bg-white rounded-2xl -translate-x-[11rem] left-0 top-[5.2rem] xl:top-12 scale-y-0 opacity-0 group-hover:h-auto group-hover:scale-y-100 origin-top group-hover:opacity-100 group-hover:z-50 transition-all duration-300">
                <div className="grid grid-flow-col w-[40rem]">
                    <div className="grid w-[26rem] items-center pl-4">
                        <p className="font-medium text-[1.25rem] leading-[1.825rem]">
                            Our Weight Management Treatments
                        </p>
                        {navLinksWeightConfig.map((config, index) => (
                            <ul className="" key={index}>
                                <li>
                                    <NavLink
                                        to={config.to}
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeDropdownClass
                                                : inactiveDropClass
                                        }
                                    >
                                        {config.text}
                                    </NavLink>
                                </li>
                            </ul>
                        ))}
                    </div>
                    <div className="grid w-[14rem] items-center justify-center">
                        <img src={Weight1} className="" alt="dropdown" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const SkinDropDown = () => {
    const { pathname } = useLocation()

    let activeDropClass =
        'font-medium text-[#fff] text-[1.25rem] leading-[1.825rem]'
    let activeDropdownClass =
        'font-medium text-[#3e3e3e] text-[1.25rem] leading-[1.825rem]'
    let inactiveDropClass =
        'font-light text-[#060606] text-[1.25rem] leading-[1.825rem] cursor-pointer'
    const navLinksSkinConfig = [
        { to: '/skin', text: 'Skin tone and pigmentation' },
        { to: '/acne', text: 'Acne and acne scars' },
        { to: '/anti-ageing', text: 'Anti ageing' },
        { to: '/darkCircle', text: 'Dark Circles' },
    ]
    const isActive = ['/skin', '/acne', '/anti-ageing', '/darkCircle'].includes(
        pathname
    )
    return (
        <div className="relative group">
            <div className="cursor-pointer text-[#d1d1d1] font-light text-[17px] xl:text-[20px] leading-7 flex items-center gap-x-2">
                <span
                    className={cx(
                        'active:text-[#fff] flex items-center gap-x-2 relative',
                        {
                            [activeDropClass]: isActive,
                        }
                    )}
                >
                    Skin
                    {isActive && (
                        <span className="absolute bottom-0 left-[30%]  w-[5px] h-[5px] top-7 rounded-full bg-white"></span>
                    )}
                    <span>
                        <img
                            src={dropdownIcon}
                            className="group-hover:rotate-180 transition-all
                        duration-300 ease-in-out"
                            alt=""
                        />
                    </span>
                </span>
            </div>
            <div className="absolute w-[40rem] origin-top bg-white rounded-2xl -translate-x-[11rem] left-0 top-[5.2rem] xl:top-12 scale-y-0 opacity-0 group-hover:h-auto group-hover:scale-y-100 group-hover:opacity-100 group-hover:z-50 transition-all duration-300">
                <div className="grid grid-flow-col w-[40rem]">
                    <div className="grid w-[26rem] items-center pl-3">
                        <p className="font-medium text-[1.25rem] leading-[1.8125rem]">
                            Our Skin Care treatments
                        </p>
                        {navLinksSkinConfig.map((config, index) => (
                            <ul className="" key={index}>
                                <li>
                                    <NavLink
                                        to={config.to}
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeDropdownClass
                                                : inactiveDropClass
                                        }
                                    >
                                        {config.text}
                                    </NavLink>
                                </li>
                            </ul>
                        ))}
                    </div>
                    <div className="grid w-[14rem] items-center justify-center">
                        <img src={SkinNav} className="" alt="dropdown" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const HairDropDown = () => {
    const { pathname } = useLocation()

    let activeDropClass =
        'font-medium text-[#fff] text-[1.25rem] leading-[1.825rem]'
    let activeDropdownClass =
        'font-medium text-[#3e3e3e] text-[1.25rem] leading-[1.825rem]'
    let inactiveDropClass =
        'font-light text-[#060606] text-[1.25rem] leading-[1.825rem] cursor-pointer'
    const navLinksHairConfig = [
        { to: '/antiDandruff', text: 'Anti Dandruff and Hairfall' },
        { to: '/hairTransplant', text: 'Hair Transplantation' },
    ]
    const isActive = ['/antiDandruff', '/hairTransplant'].includes(pathname)
    return (
        <div className="relative group">
            <div className="cursor-pointer text-[#d1d1d1] font-light text-[17px] xl:text-[20px] leading-7 flex items-center gap-x-2">
                <span
                    className={cx(
                        'active:text-[#fff] flex items-center gap-x-2 relative',
                        {
                            [activeDropClass]: isActive,
                        }
                    )}
                >
                    Hair
                    {isActive && (
                        <span className="absolute bottom-0 left-[30%]  w-[5px] h-[5px] top-7 rounded-full bg-white"></span>
                    )}
                    <span>
                        <img
                            src={dropdownIcon}
                            alt=""
                            className="group-hover:rotate-180 transition-all
                        duration-300 ease-in-out"
                        />
                    </span>
                </span>
            </div>
            <div className="absolute w-[40rem] bg-white origin-top rounded-2xl -translate-x-[11rem] left-0 top-[5.2rem] xl:top-12 scale-y-0 opacity-0 group-hover:h-auto group-hover:scale-y-100 group-hover:opacity-100 group-hover:z-50 sah transition-all duration-300">
                <div className="grid grid-flow-col w-[40rem]">
                    <div className="grid w-[26rem] items-center self-start gap-y-2 pt-2 pl-3">
                        <p className="font-medium text-[1.25rem] leading-[1.8125rem]">
                            Our Hair Care treatments
                        </p>

                        {navLinksHairConfig.map((config, index) => (
                            <ul className="" key={index}>
                                <li>
                                    <NavLink
                                        to={config.to}
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeDropdownClass
                                                : inactiveDropClass
                                        }
                                    >
                                        {config.text}
                                    </NavLink>
                                </li>
                            </ul>
                        ))}
                    </div>
                    <div className="grid w-[14rem] items-center justify-center">
                        <img src={HairNav} className="" alt="dropdown" />
                    </div>
                </div>
            </div>
        </div>
    )
}
