import React from "react";

const Appointment = () => {
  return (
    <div className="relative bg-secondary min-h-screen">
      <div className="absolute inset-0 bg-testimonialbg bg-cover bg-no-repeat origin-center min-h-screen opacity-50"></div>
      <div className="absolute top-[5%] md:top-[7%] lg:top-[20%] left-[4%] grid md:grid-cols-2 gap-3">
        <div className="text-center font-semibold text-[20px] md:text-[32px] lg:text-[52px] md:pt-[4%] lg:pt-0">
          Relax, unwind and enjoy the luxurious indulgence at
          <span className="text-[#FFFFFF]">KOZA</span> Aesthetic Care.
        </div>
        <div className="flex justify-center items-center pb-5">
          <div className="flex flex-col justify-center items-center bg-[#000000] rounded-lg pt-10 px-8 md:px-20 ">
            <h2 className="text-center text-[#FFFFFF] font-semibold">
              Get Appointment TODAY!
            </h2>
            <hr className="bg-secondary w-full my-3 h-[2px]" />
            <hr className="bg-secondary w-[70%] mb-3 h-[2px]" />
            <input
              placeholder="Your Name"
              className="bg-[#3E3E3E] rounded-lg py-5 px-3 lg:px-10 mb-3"
            />
            <input
              placeholder="Phone number"
              className="bg-[#3E3E3E] rounded-lg py-5 px-3 lg:px-10 mb-3"
            />
            <input
              placeholder="MM / DD / YYY"
              className="bg-[#3E3E3E] rounded-lg py-5 px-3 lg:px-10 mb-3"
            />
            <div>
              <button className="flex justify-center items-center px-5 lg:px-12 py-5 rounded-[28px] mb-5 text-[#000000] bg-[#FFFFFF] font-semibold">
                Make An Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
