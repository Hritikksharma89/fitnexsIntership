import React from 'react'
import Anatomy from './anatomy'
import Slider from 'react-slick'
import tick from '../../assets/About us/download.png'
import whatsapp from '../../assets/whatsapp.png'
import { Link } from 'react-scroll'

const HomeFace = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    verticalSwiping: true,
    arrows: false
  }
  return (
    <div className='bg-gradient-to-r from-[#632A3D] to-[#350340] min-h-[100vh] md:min-h-[74.8vh] lg:min-h-[94vh] xl:min-h-[75vh] sm:overflow-hidden mb-[95px] sm:mb-1 '>
      <div className='relative  '>
        <div className='grid md:grid-cols-2 gap-4 w-[96%] xl:w-[85%] mx-auto'>
          <div className=' hidden sm:block'>
            <div className='absolute  top-[7%] left-10 lg:left-20 xl:left-24 w-[78%] sm:w-1/2 mx-auto my-1 xl:my-5 pt-[2rem] xl:pt-12 '>
              <div className=' text-[#fff] text-[25px] lg:text-[33px] xl:text-[38px] w-[97%] lg:w-[90%]    '>
                We are one stop solution for all Beauty & Wellness treatments
              </div>
              <p className='text-[#D7D7D7] text-[13px] lg:text-[14px] w-[90%] lg:w-[80%] py-2 lg:py-7 font-normal '>
                We are dedicated to unlocking your true radiance. Explore our
                range of personalized treatments and let your inner beauty shine
                through. Your journey to self-confidence begins here
              </p>
              <div className='  md:w-[300px] h-full py-2  '>
                <p className=' py-3 text-[18px] lg:text-[21.51px] text-[#DBDBDB] font-medium '>
                  Discover our entire services That you need
                </p>
                <div className=' bg-[#fff] py-[0.5px]' />
                <div className=' text-[#fff] flex  gap-4 my-2 py-2'>
                  <div className=' text-[16px] lg:text-[18.51px] text-[#fff] '>
                    Explore now
                  </div>
                  <Link
                    to='nextSection'
                    smooth
                    className='cursor-pointer'>
                    <img
                      src={tick}
                      alt='icons'
                      className='animate-[bounce_2s_ease-in-out_infinite] cursor-pointer'
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=' sm:hidden w-[98%] py-10 px-3'>
            <Slider {...settings}>
              <div className='text-[#fff] text-[20px] md:text-[30px] h-[100px] lg:text-[40px] text-center  font-semibold '>
                <h3>
                  We are one stop solution for all Beauty & Wellness treatments
                </h3>
              </div>
              <div className='text-[#fff] text-[12px] md:text-[14px] h-[100px] text-center  font-thin'>
                <h3>
                  We are dedicated to unlocking your true radiance. Explore our
                  range of personalized treatments and let your inner beauty
                  shine through. Your journey to self-confidence begins here
                </h3>
              </div>
            </Slider>
          </div>
          <div className='w-[90%] lx:w-[85%] mx-auto top-[20px]'>
            <Anatomy />
          </div>
          <div className=' sm:hidden absolute top-[448px] left-0 w-full bg-[#fff]'>
            <div className=' text-[#000]  h-full  p-4  '>
              <h1 className=' pb-3 text-[15px]  text-center'>
                Discover our entire services and know more about us
              </h1>
              <hr className=' text-[#000] py-1' />
              <div className=' text-[#000] flex  gap-4 my-2 py-2 justify-center'>
                <h1 className=' text-[18px] '>Explore now </h1>
                <Link
                  to='nextSection'
                  smooth
                  className='cursor-pointer'>
                  <img
                    src={tick}
                    alt='icons'
                    className='animate-[bounce_2s_ease-in-out_infinite]'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='fixed z-50 -right-[25px] sm:right-5  bottom-24 sm:top-[520px] overflow-hidden '>
          <a href='https://wa.me/919606009079?text=Hi'>
            <img
              src={whatsapp}
              alt='imh'
              className='w-[50%] sm:w-full'
            />
          </a>
        </div>
      </div>
    </div>
  )
}
export default HomeFace
