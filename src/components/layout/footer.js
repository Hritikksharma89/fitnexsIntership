import React from 'react'
import footerKozaLogo from '../../assets/footerKozaLogo.png'
import { Link as RouterLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

const Footer = () => {
    // const handleScrollUp = () => {
    //     window.scrollBy({ top: -880, behavior: 'smooth' });
    // };

    const footerData = [
        {
            title: 'Koza Aesthetic Care',
            details: [
                'We are dedicated to unlocking your true radiance.Explore our range of personalized treatments and let your inner beauty shine through. Your journey to self-confidence begins here',
            ],
            logo: footerKozaLogo,
        },
        {
            title: 'Our Services',
            details: [
                'Skin',
                'Hair',
                // 'Our Services',
                'Weight Management',
                // 'Cosmetic Gynaecology',
                'Cosmetic Procedures',
                'Cosmetic Dentistry',
            ],
            itemLink: [
                '/skin',
                '/antiDandruff',
                // '/',
                '/weight-management',
                // '/',
                '/cosmetic-procedures',
                '/cosmetic-dentistry',
            ],
        },
        {
            title: 'Important links',
            details: [
                // 'Policies',
                'General Terms & Conditions',
                // 'Returns & Cancellations',
                'Privacy Policies',
                'Request Appointment',
            ],
            itemLink: [
                // '#',
                '/term-condition',
                // '#',
                '/privacy-policy',
                'Request Appointment',
            ],
        },
        {
            title: 'Contact Us',
            details: [
                'Our Main Bengaluru Center:',
                'S. No. 4, 30th Main Rd, opp. Kempegowda Institute Of Medical Science, Kaveri Nagar, Banagirinagara, Banashankari 3rd Stage, Banashankari, Bengaluru, Karnataka 560085',
                '',
                '',
                'Bommasandra Center:',
                'S. No. 54, Site No. 14/2, 3rd Floor, RS Emporia, Hosur Rd, RS Gardens, Bommasandra, Karnataka 560099',
                '',
                '',
                'Arekere Center:',
                '3rd floor, Sharada Arcade, Bannerghatta Rd, above Yamaha showroom, Omkar Nagar, Arekere, Bengaluru, Karnataka 560076',

                'Mobile no : (+91) 960 600 9079',
            ],
            itemLink: ['/aboutus'],
        },
    ]

    const persentYear = new Date().getFullYear()
    return (
        <>
            <div className="bg-[#67213A] py-10 px-6 mt-4 md:mt-10">
                <div className="w-[90%] m-auto">
                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-12 gap-x-[3rem]">
                        {Array.isArray(footerData) &&
                            footerData.map(
                                ({ title, details, logo, itemLink }, index) => (
                                    <div key={index}>
                                        <div className="text-[#FFFFFF] text-[30px] font-normal lg:text-[23px] lg:font-semibold md:pb-14 pb-3 text-center md:text-start lg:whitespace-nowrap">
                                            {title}
                                        </div>
                                        {Array.isArray(details) &&
                                            details.map((data, innerIndex) => (
                                                <div
                                                    key={innerIndex}
                                                    className="text-[#FFFFFF] text-[14px] py-1 font-normal text-center md:text-start"
                                                >
                                                    {data ===
                                                    'Request Appointment' ? (
                                                        <ScrollLink
                                                            to="book-appointment"
                                                            smooth
                                                            className=""
                                                        >
                                                            <span className="cursor-pointer">
                                                                {data}
                                                            </span>
                                                        </ScrollLink>
                                                    ) : (
                                                        <RouterLink
                                                            to={
                                                                itemLink
                                                                    ? itemLink[
                                                                          innerIndex
                                                                      ]
                                                                    : ''
                                                            }
                                                        >
                                                            <span className="cursor-pointer">
                                                                {data}
                                                            </span>
                                                        </RouterLink>
                                                    )}
                                                </div>
                                            ))}
                                        {logo && (
                                            <div className="flex md:justify-start justify-center items-center">
                                                <img
                                                    src={logo}
                                                    alt="footer-logo"
                                                    className="w-[200px]"
                                                />
                                            </div>
                                        )}
                                    </div>
                                )
                            )}
                    </div>
                </div>
            </div>

            <div className="bg-[#5B1A31] p-4 text-[#FFFFFF] text-center">
                Copyright © <span> {persentYear}</span> Koza All rights reserved
            </div>
        </>
    )
}

export default Footer
