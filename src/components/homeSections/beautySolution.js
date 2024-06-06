import React from "react";
import doctor from "../../assets/doctor.svg";
import CommonHeading from "../common/commonHeading";

const BeautySolution = () => {
  return (
    <>
      <div className="bg-primary">
        <div className="relative  min-h-screen md:min-h-[48vh]">
          <div className="flex flex-row-reverse md:grid grid-cols-2 gap-4">
            <div className="pl-14 w-[85%] lg:w-[70%] py-[9%] lg:py-[30%]">
              <CommonHeading
                title="WE ARE ONE STOP SOLUTION FOR ALL BEAUTY & WELLNESS CONCERNS"
                description="We are dedicated to unlocking your true radiance. Explore our
                range of personalized treatments and let your inner beauty shine
                through. Your journey to self-confidence begins here"
                bgSkin
              />
            </div>
            <div className="py-4 md:px-10">
              <img
                src={doctor}
                alt="doctor"
                className="w-full md:w-[80%] ml-[28px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeautySolution;
