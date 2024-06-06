
import React from "react";

import cx from "classnames";

const CommonSide = ({
  isReversed ,
  Maintitle,
  subtext,
  content,
  slideimg,
}) => {
  return (
    <>
      <div
        className={cx(" sm:flex   w-[97%]  mx-auto", {
          "flex-row-reverse": !isReversed,
        })}
      >
        <div className="  w-full sm:w-1/2 m-2 px-1 sm:px-6   ">
          <h1 className=" text-[28px] sm:text-[34px] lg:text-[40px] ">
            {Maintitle}
          </h1>
          <p className=" text-[14px] sm:text-[18px] py-3 ">{subtext}</p>
          <div>
            {
              <div className="w-full">
                {content.map(({ id, topic, subtitle }) => (
                  <div className=" flex flex-row gap-4 py-1 " key={id}>
                    <div className="   rounded-full w-10 lg:w-12 h-10  lg:h-12 flex items-center shrink-0 mt-2 justify-center py-2 bg-[#000] ">
                      <h1 className=" text-[#fff] p-3 text-[18px] lg:text-[22px] "> {id}</h1>
                    </div>
                    <div className=" py-2 flex ">
                      <h1 className=" text-[18px] sm:text-[20px] lg:text-[24px]  font-semibold  ">
                        {subtitle}
                      </h1>
                      <h1 className="text-[14px] sm:text-[15px] lg:text-[18px] ">{topic} </h1>
                    </div>
                  </div>
                ))}
              </div>
            }
          </div>
        </div>
        <div className="w-full sm:w-1/2 p-2 flex items-center justify-center">
          <img src={slideimg} alt="imh" className=" w-[88%] sm:w-[98%] lg:w-[88%]" />
        </div>
      </div>
    </>
  );
};
  export default CommonSide ;