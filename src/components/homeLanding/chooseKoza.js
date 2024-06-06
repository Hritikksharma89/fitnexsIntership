import React from "react";
import groupIcon from "../../assets/new-landing/icons/groupIcon.png";
import approval from "../../assets/new-landing/icons/approval-symbol.png";
import mdi_paper from "../../assets/new-landing/icons/mdi_paper.png";
import heroicons from "../../assets/new-landing/icons/heroicons_users-solid.png";


const ChooseKoza = () => {

    const matter = [
      {
        Icon: groupIcon,
        text: "Professionally Certified Team",
      },

      {
        Icon: approval,
        text: "US FDA Approved Technology",
      },
      {
        Icon: mdi_paper,
        text: "Highly Standardized Protocols",
      },
      {
        Icon: heroicons,
        text: "Happy & Satisfied Customers",
      },
    ];

    return (
      <>
        <div className="bg-gradient-to-r from-[#632A3D] to-[#350340] text-[#fff] py-4 lg:py-10 ">
          <div className=" w-[90%] sm:w-[80%]  mx-auto text-center my-4 py-3 md:py-7">
            <div className=" text-[28px] sm:text-[33px] lg:text-[40px] font-medium py-2  md:leading-[35px] lg:leading-[50px]">
              Why to choose KOZA Aesthetics
            </div>
            <p className=" text-[14px] sm:text-[16px] font-normal leading-[30px] md:leading-[37px] py-2 md:py-4 w-[75%] mx-auto   ">
              Their are multiple way to treat your skin and hair problems, and
              our specialist will provide you the best way possible
            </p>
          </div>

          <div className=" w-full sm:w-[90%] lg:w-[80%] mx-auto text-center py-3 sm:py-7   sm:gap-x-8 ">
            <div className=" grid  sm:grid-cols-2 gap-x-20">
              {matter.map(({ Icon, text }, index) => (
                <div
                  key={index}
                  className=" flex  gap-2 items-center justify-center py-2 md:py-7 "
                >
                  <img
                    src={Icon}
                    alt=" group"
                    className=" w-[40px] sm:w-[50px] h-[40px] sm:h-[50px]"
                  />
                  <p className=" text-[15px] sm:text-[20px] font-medium  leading-[30px] p ">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
} 
export default ChooseKoza; 