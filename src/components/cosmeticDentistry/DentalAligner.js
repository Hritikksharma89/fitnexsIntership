import React from "react";
import ImageScale from "../common/reverseBolierPlate";
import dentalAlignerBgImg from "../../assets/cosmeticDentist/dentalAlingnerBg.svg";
import dentalAlignerImg from "../../assets/cosmeticDentist/dentalAligner.svg";

const DentalAligner = () => {
  let data = [
    {
      title: "What it is?",
      text: `<div>Dental aligners represent a modern and discreet solution for achieving a beautifully aligned smile. Whether you are dealing with misaligned teeth or seeking to correct bite issues, these aligners are designed to provide effective results. </div>
      <div>Utilizing molds or advanced digital scans, dental aligners are custom-crafted to meet your unique dental needs. This series of nearly invisible plastic aligners exerts gentle, controlled pressure on your teeth and jaw, facilitating gradual and precise orthodontic corrections. </div>
      <div>Say goodbye to traditional metal braces, as dental aligners offer a discreet and comfortable alternative to transform your smile. </div>`,
      front: dentalAlignerImg,
      bgimg: dentalAlignerBgImg,
    },
  ];

  return (
    <div className="my-10">
      <ImageScale heading="Dental Aligners" contentMatter={data} />
    </div>
  );
};
export default DentalAligner;
