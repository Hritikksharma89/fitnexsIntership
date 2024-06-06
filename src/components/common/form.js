

import cx from "classnames";
import React from "react"; 


const  FormPage = ({ dark }) => {

    return (
      <div
        className={cx(" m-auto bg-white py-4" ,
        {
             'bg-gradient-to-b from-[#749AF3] to-[#93a7da]' : dark
        }
        )}
      >
        <div className="  text-center text-[23px] sm:text-[26px] md:text-[36px] w-full sm:w-[50%] m-auto font-[600] pt-6">
          <span>Relax, unwind, and enjoy the </span>
          <span>luxurious indulgence at Aesthetic Care.</span>
        </div>
        <div className="md:flex flex-col-3 justify-center items-center pt-5 gap-4 w-[95%] sm:w-[80%] m-auto ">
          <div className="">
            <label className=" font-semibold text-[16px] sm:text-2xl">
              Name
            </label>
            <input className=" bg-[#FFFFFF] border-solid border-[2px] py-2 px-4  rounded-lg w-full" />
          </div>
          <div className="">
            <label className=" font-semibold  text-[16px] sm:text-2xl">
              Number
            </label>
            <input className="bg-[#FFFFFF] border-solid border-[2px] py-2 px-4 rounded-lg w-full" />
          </div>
          <div className="">
            <label className=" font-semibold  text-[16px] sm:text-2xl">
              Concern
            </label>
            <input className="bg-[#FFFFFF]  border-solid border-[2px] py-2 px-4  rounded-lg w-full" />
          </div>
        </div>
        <div className="flex justify-center items-end align-middle pt-8 pb-12">
          <button className="text-[16px] text-[#000000] font-[500] shadow-2xl bg-white p-4 rounded-lg">
            Request a Call Back
          </button>
        </div>
      </div>
    );
}
export default FormPage; 