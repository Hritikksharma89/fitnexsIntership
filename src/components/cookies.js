import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

const Cookies = () => {
    const cookieName = 'cookieConsent'
    const [cookies, setCookie, removeCookie] = useCookies([cookieName])
    const [isVisible, setIsVisible] = useState(true)

    const handleAcceptCookies = () => {
        // Store the data in cookies
        setCookie(cookieName, 'accepted')
        setIsVisible(false)
    }

    const handleDeclineCookies = () => {
        // Remove the cookie
        removeCookie(cookieName)
        setIsVisible(false)
    }

    useEffect(() => {
        if (cookies[cookieName] === 'accepted') {
            setIsVisible(false) // Hide the component if the cookie is already set to 'accepted'
        }
    }, [cookies, cookieName])

    return (
        <>
            {isVisible && (
            <div className="fixed bottom-0 z-50 bg-[#F9E8F4]">
                <div className="sm:flex   items-center w-[97%] xl:w-[85%] mx-auto  py-2">
                    <div className="sm:w-[80%]  mx-2 py-2  ">
                        <div className=" text-[#35023F] py-2 text-[20px] sm:text-[28px] md:text-[33px] lg:text-[40px] font-semibold leading-[33px] lg:leading-[50px] ">
                            {' '}
                            About cookies on this site
                        </div>
                        <div className="  text-[#353535] text-[12px] sm:text-[18px] lg:text-[24px] leading-[30px] lg:leading-[40px] py-2 font-normal">
                            <p>
                                Our websites utilize necessary cookies for
                                proper functionality. Additionally,
                            </p>
                            we may employ other cookies with your permission for
                            analyzing site usage, enhancing user experience, and
                            facilitating advertising efforts.
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col gap-4 pt-4">
                        <button
                            onClick={handleAcceptCookies}
                            className=" bg-gradient-to-r from-[#39063F] from-2.3% via-[#7C3057] via-72.44% to-[#602639] to-97.51% text-[#fff] text-[13px] font-medium px-[57px] leading-[28px] rounded-[17.5px] py-2.5 "
                        >
                            Accept cookies
                        </button>

                        <button
                            onClick={handleDeclineCookies}
                            className="  text-[#722C4C] text-[13px] font-medium  leading-[28px] rounded-[17.5px] px-[82px] py-2 border-[1px] border-[#722C4C] "
                        >
                            Decline
                        </button>
                    </div>
                </div>
            </div>
             )}  
        </>
    )
}

export default Cookies
