import React from "react";
import bgimg from '../../assets/About us/bg_aboutus.png'
import CommonHeading from "../common/commonHeading.js";

const Elevating = () => {
  return (
    <>
      <div className="relative w-full min-h-full">
        <div className="h-[85vh] sm:h-[80vh] md:h-[75vh] lg:h-[85vh] xl:h-full  min-h-full">
          <img
            src={bgimg}
            alt="background"
            className="min-w-full object-cover h-full "
          />
        </div>
        <div className="absolute inset-0 bg-[#353535]/40 h-[85vh] sm:h-full  min-h-full" />
        <CommonHeading
          title="Elevating Beauty, Nurturing Wellness: The Koza Philosophy"
          description="KOZA is our beautiful dream of creating a space where anybody can
            come and experience the overall wellbeing in addition to taking care
            of their health and Beauty"
        />
      </div>
    </>
  );
};

export default Elevating;
