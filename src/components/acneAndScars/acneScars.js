
import React from "react";
import CommonHeading from "../common/commonHeading";
import bgAcne from '../../assets/Acne-scar/images/bgAcne.png'


const AcneScarsBg = () => {
  return (
      <>
         

          <div className="relative w-full min-h-full   ">
              <div className=" h-[75vh] sm:h-[70vh] md:h-[70vh] lg:h-[70vh] xl:h-full  min-h-full">
                  <img
                      src={bgAcne}
                      alt="background"
                      className="min-w-full object-cover h-full "
                  />
              </div>
              <div className="absolute inset-0 bg-[#353535]/40 h-full  min-h-full " />
              <div className="  ">
                  <CommonHeading
                      title="Acne and Acne Scars"
                      className="mt-[20px]"
                      description="Don’t worry if you have acnes, at Koza we offer the best treatment for your acne and acne scars and we will give you a brightening skin"
                  />
              </div>
          </div>
      </>
  )
};
export default AcneScarsBg; 