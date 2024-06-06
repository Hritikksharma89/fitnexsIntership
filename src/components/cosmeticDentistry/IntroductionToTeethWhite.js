import React from "react";
import introimg from "../../assets/cosmeticDentist/teethintro.png";
import introimgback from "../../assets/cosmeticDentist/teethingtroback.png";
import ImageScale from "../common/reverseBolierPlate";

const IntroductionToTeethWhite = () => {
  let data = [
    {
      title: "Renewed Skin Texture",
      text: `<div>A radiant smile is universally cherished, and teeth whitening has emerged as one of the most sought-after cosmetic dentistry procedures to achieve it.</div>
      <div>This quick, non-invasive, and budget-friendly solution has captured the attention of both men and women, offering a variety of options that cater to diverse budgets, schedules, and preferences.</div>
      <div>Whether you prefer the swiftness of professionally administered one-hour whitening sessions at a dental office or a more flexible approach with at-home bleaching kits from your local drugstore, teeth whitening solutions are readily available.</div>`,
      front: introimg,
      bgimg: introimgback,
    },
  ];
  return (
    <>
      <div className="my-24">
        <ImageScale heading="Introduction to teeth whitening" contentMatter={data} />
      </div>
    </>
  );
};

export default IntroductionToTeethWhite;
