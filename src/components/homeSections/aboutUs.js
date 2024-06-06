import React from "react";
import temasimg from "../../assets/div.image.png";
import phone from "../../assets/phone.png";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-secondary py-3">
      <div className="grid grid-rows-2 md:grid-cols-2  gap-3 p-2 w-full md lg:w-[80%] xl:w-[90%] mx-auto">
        <div className="row-span-2 m-1 p-1 my-2">
          <img src={temasimg} alt="team" />
        </div>
        <div className="row-start-1 md:row-start-auto p-2 m-2">
          <p className="text-[#666666] text-center text-[18px] md:text-[24px] mb-2 !bg-[#FFFFFF] rounded-lg w-[20%]">
            About Us
          </p>
          <h2 className="text-[25px] lg:text-[36px] font-semibold">
            Relax, unwind, and enjoy the luxurious indulgence at
            <span className="text-[#FFFFFF] text-[30px] xl:text-[40px] font-semibold">
              KOZA
            </span>
          </h2>
          <h2 className="text-[25px] lg:text-[36px] font-semibold">
            Aesthetic Care.
          </h2>
          <p className="py-4 px-1 text-[13px] md:text-[16px]">
            Your ultimate destination for comprehensive aesthetic excellence. At
            Koza, we understand that true beauty is a reflection of confidence
            and self-care. Our state-of-the-art center offers a harmonious blend
            of science, artistry, and innovation to bring out the hero within
            you.
          </p>
          <div></div>
        </div>
        <div className="p-2">
          <div className=" pt-2 bg-primary w-full md:w-[337px] lg:w-[420px] px-3 rounded-[10px]">
            <p className="text-[18px] lg:text-[24px] font-semibold">
              Providing world-class treatments
            </p>
            <h1 className="text-[18px] lg:text-[24px] font-semibold">
              since{" "}
              <span className="text-[23px] lg:text-[34px] text-[#FFFFFF]">
                2021
              </span>
            </h1>
          </div>
          <div className="text-[16px] lg:text-[20px] py-3">
            <p>Professionally Certified Team</p>
            <p className="py-1">US FDA Approved Technology</p>
            <p className="pb-1">Highly Standardized Protocols</p>
            <p>Happy & Satisfied Customers</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-around items-center flex-wrap w-full lg:w-[75%] pr-[116px]">
            <button
              className="hidden md:block  bg-[#000000] px-1 py-2 text-[#FFFFFF] rounded-[5px] mb-3 sm:mb-0"
              onClick={() => navigate("/aboutus")}
            >
              Read more
            </button>
            <div className="flex items-center">
              <div className="bg-[#FFFFFF] flex justify-center items-center shrink-0 rounded-full p-2">
                <img src={phone} alt="." className="w-8 h-8 sm:w-12 sm:h-12" />
              </div>
              <div className="ml-2">
                <p className="text-[12px] py-2">Need help? Call us:</p>
                <p className="text-[#666666] text-[18px] font-semibold">
                  (+91) 960 600 9079
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
