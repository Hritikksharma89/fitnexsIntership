import React from "react";
import tick from "../../assets/new-landing/tickmark.png";
import bg_img from '../../assets/new-landing/AesthetiCare.png' ;
import frontimg from '../../assets/new-landing/frontimg.png'
import ButtonGradient from "../common/buttonGradient";
import Aesthetic from '../../../src/assets/About us/Aesthetic.png'

const AesthetiCare = () => {
    const content = [
      {
        icon: tick,
        text: " Professionally Certified Team",
      },
      {
        icon: tick,
        text: " FDA Approved Technology",
      },
      {
        icon: tick,
        text: "  Highly Standardized Protocols",
      },
      {
        icon: tick,
        text: " Happy & Satisfied Customers",
      },
    ];
  return (
      <>
          <div className="grid sm:grid-cols-2 my-4 py-3 sm:py-6 lg:py-10 gap-x-2 xl:gap-x-10">
              <div className="bg-bgCareServies bg-no-repeat ml-2 lg:ml-10 pl-1 lg:pl-10">
                  <h1 className="w-[98%] sm:w-[90%] text-[#35023F] text-[27px] sm:text-[30px] lg:text-[37px] font-medium leading-[52px]">
                      Relax, unwind, and enjoy the luxurious indulgence at
                      <span className="text-[29px] sm:text-[33px] lg:text-[41px] font-semibold">
                         {''} KOZA Aesthetic Care.
                      </span>
                  </h1>
                  <p className=" text-[#3E3E3E] text-[15px] sm:text-[16px] py-7 px-1">
                      Your ultimate destination for comprehensive aesthetic
                      excellence. At Koza, we understand that true beauty is a
                      reflection of confidence and self-care. Our
                      state-of-the-art center offers a harmonious blend of
                      science, artistry, and innovation to bring out the hero
                      within you.
                  </p>

                  <div>
                      <h1 className="font-semibold text-[20px] sm:text-[25px] text-[#3E3E3E] ">
                          {' '}
                          Providing World Class Treatment since{' '}
                          <span className=" text-[#35023F]">
                              {' '}
                              2021
                          </span>
                      </h1>

                      {content.map(({ icon, text }, index) => (
                          <div
                              key={index}
                              className=" mx-5 sm:mx-1 py-1 lg:py-3 "
                          >
                              <h1 className=" flex gap-4 text-[#4E4E4E] text-[15px] sm:text-[20px] py-1  lg:py-3 ">
                                  <img
                                      src={icon}
                                      alt="tick"
                                      className=" object-contain "
                                  />
                                  {text}
                              </h1>
                          </div>
                      ))}

                      <ButtonGradient actionRequired="Book Appointment Now" />
                  </div>
              </div>
              {/* <div className="mt-7 sm:mt-1 relative flex justify-start items-center  ">
          <img src={bg_img} alt="bgimg" className="object-contain" />

          <div className="  absolute left-0  bottom-[30px] sm:bottom-[217px]  lg:bottom-[267px] xl:bottom-[68px] ">
            <img
              src={frontimg}
              alt="mm"
              className=" w-[50%]  md:w-[65%] lg:w-[80%] hover-animation origin-bottom-left  "
            />
          </div>
        </div> */}
              <div className="relative py-10 mb-14 align-middle ">
                  <div className=" absolute right-0 w-[70%] max-h-[700px] h-full bg-gradient-to-b from-[#7E1F65] via-[#7E1F65] to-[#380641] rounded-[40px] object-right-bottom "></div>
                  <div className=" translate-y-[15%] sm:translate-y-[40%] xl:translate-y-[10%] ">
                      <div className=" relative w-[80%] ">
                          <img
                              src={Aesthetic}
                              alt="ds"
                              className="object-left   "
                          />
                          <div className=" absolute left-0 bottom-0">
                              <img
                                  src={frontimg}
                                  alt="front"
                                  className=" w-[50%]  md:w-[65%] lg:w-[80%] object-contain hover-animation origin-bottom-left"
                              />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
};
export default AesthetiCare;
