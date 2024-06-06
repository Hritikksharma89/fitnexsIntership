import React from "react";
import skin from "../../assets/About us/knowmore/1.jpg";
import Hair from "../../assets/About us/knowmore/2.jpg";
import Weightloss from "../../assets/About us/knowmore/3.jpg";
import Lasertreatment from "../../assets/About us/knowmore/4.jpg";
import CosmeticSurgery from "../../assets/About us/knowmore/5.jpg";
import Gynecology from "../../assets/About us/knowmore/6.jpg";
import FormPage from "../common/form";
import AboutServices from "../common/AboutServices";

const KnowMore = () => {
  const content = [
    {
      title: "Skin",
      imgM: skin,
    },
    {
      title: "Hair",
      imgM: Hair,
    },
    {
      title: "Weight loss",
      imgM: Weightloss,
    },
    {
      title: "Lasertreatment",
      imgM: Lasertreatment,
    },
    {
      title: "Cosmetic Procedures",
      imgM: CosmeticSurgery,
    },
    {
      title: "Cosmetic Alternatives",
      imgM: Gynecology,
    },
  ];
  return (
    <div>
      <div className="bg-[#749AF3]">
        <div className=" bg-black py-4 w-full">
          <p className="text-white w-[90%] md:w-[70%] lg:w-[60%] xl:w-[55%] mx-auto text-center py-4 text-[14px] sm:text-[18px]">
            {" "}
            Join us at Koza Aesthetic Care and experience a transformation that
            goes beyond aesthetics - one that encompasses confidence,
            self-assurance, and empowerment. Your journey to beauty and freedom
            begins here.{" "}
          </p>
        </div>
        <FormPage />
      </div>
    
      <AboutServices content={content} />
    </div>
  );
};
export default KnowMore;
