import React, { Component, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import userLogo1 from '../../assets/homeImg/ravi.png'
import userLogo2 from '../../assets/homeImg/ramesh.png'
import userLogo3 from '../../assets/homeImg/arpita.png'
import leftArr from '../../assets/homeImg/left.png'
import rightArr from '../../assets/homeImg/right.png'
import cx from 'classnames'

const SimpleSlider = () => {
    const SampleNextArrow = ({ onClick, currentSlide, slideCount }) => {
        const isLastSlide = currentSlide === slideCount - 1

        return (
            <div
                className={cx('next-arrow ', {
                    'opacity-40   ': isLastSlide,
                    'cursor-pointer ': !isLastSlide,
                })}
                onClick={isLastSlide ? null : onClick}
                style={{ background: { rightArr } }}
            >
                <img
                    className="absolute top-[40%] -right-[60px] z-10 w-9 sm:w-max"
                    src={rightArr}
                    alt="right"
                />
            </div>
        )
    }

    const SamplePrevArrow = ({ onClick, currentSlide }) => {
        const isFirstSlide = currentSlide === 0

        return (
            <div
                className={cx('prev-arrow ', {
                    'opacity-40  ': isFirstSlide,
                    'cursor-pointer ': !isFirstSlide,
                })}
                onClick={isFirstSlide ? null : onClick}
                style={{ background: { rightArr } }}
            >
                <img
                    className="absolute 
                     top-[40%] -left-[60px] z-10 w-9 sm:w-max rotate-180 disabled:opacity-50"
                    src={rightArr}
                    alt="left"
                />
            </div>
        )
    }

    const settings = {
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
            {
                breakpoint: 2570,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: true,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: true,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 1000,
                    arrows: false,
                },
            },
        ],
        appendDots: (dots) => (
            <div className=" bg-[#00000000] rounded-none">
                <ul className="sm:m-0 sm:p-0"> {dots} </ul>
            </div>
        ),
        customPaging: () => (
            <div className="slick-dot origin-center bg-[#511b3f] border-y-0 border-[#511b3f] h-1 min-w-[14px] w-auto rounded-sm">
                {''}
            </div>
        ),
    }
    const StarRating = ({ rating }) => {
        // Calculation of number of yellow stars based on rating.
        const yellowStars = Math.min(5, Math.max(0, rating))

        return (
            <div className="star-rating">
                {[...Array(5)].map((_, index) => (
                    <span
                        key={index}
                        className={`star ${
                            index < yellowStars
                                ? '!text-[#EB5829] !text-2xl '
                                : 'text-[#a1a0a0ce] text-2xl '
                        }`}
                    >
                        ★
                    </span>
                ))}
            </div>
        )
    }

    const testimonials = [
        {
            caption: 'Highly Professional',
            subCaption:
                '"I\'ve had an amazing experience at Koza Skin Care Center! Their expertise and personalized approach have transformed my skin, leaving it glowing and rejuvenated."',
            name: 'Ravi',
            userImage: userLogo1,
            rating: 5,
        },
        {
            caption: 'Amazing Experience',
            subCaption:
                '"KOZA Aesthetics have transformed my complexion. Their professional treatments and expert guidance have given me healthy, radiant skin I can confidently show off."',
            name: 'Ramesh',
            userImage: userLogo2,
            rating: 4,
        },
        {
            caption: 'Built Confidence',
            subCaption:
                '"After visiting the Koza aesthetics, my complexion has never looked better. The personalized treatments and expert advice truly transformed my skin and boosted my confidence."',
            name: 'Arpita',
            userImage: userLogo3,
            rating: 4,
        },
        {
            caption: 'Amazing Experience',
            subCaption:
                '"I\'ve had an amazing experience at Koza Skin Care Center! Their expertise and personalized approach have transformed my skin, leaving it glowing and rejuvenated."',
            name: 'Ravi',
            userImage: userLogo1,
            rating: 4,
        },
        {
            caption: 'Highly Proffesional',
            subCaption:
                '"After visiting the Koza aesthetics, my complexion has never looked better. The personalized treatments and expert advice truly transformed my skin and boosted my confidence."',
            name: 'Ramesh',
            userImage: userLogo2,
            rating: 4,
        },
        {
            caption: 'Built Confidence',
            subCaption:
                '"I\'ve had an amazing experience at Koza Skin Care Center! Their expertise and personalized approach have transformed my skin, leaving it glowing and rejuvenated.',
            name: 'Arpita',
            userImage: userLogo3,
            rating: 4,
        },
    ]

    return (
        <div className="bg-testBG py-4">
            <div>
                <div className="flex flex-col gap-4 p-3 justify-center text-center overflow-hidden w-[90%] xl:w-[52%] mx-auto mt-7 ">
                    <p className="text-[30px] lg:text-4xl font-semibold text-[#35023F] ">
                        What our clients say about us
                    </p>
                    <p className="text-base font-normal  ">
                        There are 100s of clients who visited our Koza
                        aesthetics centre and had a positive impact in their
                        lives
                    </p>
                </div>

                <div className="my-0 px-6 sm:px-20 py-10 min-h-full">
                    <Slider {...settings}>
                        {testimonials.map(
                            (
                                {
                                    name = '',
                                    caption = '',
                                    subCaption = '',
                                    userImage = '',
                                    rating,
                                },
                                index
                            ) => (
                                <div
                                    className="py-10 px-1 lg:px-3 flex"
                                    key={index}
                                >
                                    <div className="bg-[#ffffff80] flex-1 rounded-lg mx-4 px-3 md:px-6 py-6 min-h-full w-auto flex flex-col h-full sm:h-[400px] gap-1 justify-around items-start">
                                        <div className="flex flex-col items-start gap-3 object-contain">
                                            <StarRating rating={rating} />
                                            <p className=" text-lg sm:text-2xl sm:leading-9 font-medium text-[#35023F] ">
                                                {caption}
                                            </p>
                                            <p className="text-[#000] text-start text-sm sm:text-base leading-6">
                                                {subCaption}
                                            </p>
                                        </div>
                                        <div className="flex flex-row gap-4 justify-start items-center bottom-0 font-normal">
                                            <img
                                                className="h-10 w-10 sm:h-16 sm:w-16 rounded-full mx-auto"
                                                src={userImage}
                                                alt="userPic"
                                            />
                                            <p className="text-black text-md sm:text-xl">
                                                {name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default SimpleSlider