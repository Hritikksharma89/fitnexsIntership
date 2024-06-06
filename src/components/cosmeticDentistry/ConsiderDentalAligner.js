import React from "react";
import NumericBullets from "../common/NumericBullets";
import considerAlignmentImg from "../../assets/cosmeticDentist/considerDentalAligner.svg";

const ConsiderDentalAligner = () => {
  let title = "";
  let subtitle = "";
  let description = [
    {
      id: "1",
      topic: "Desire a discreet solution",
      description: `If you value aesthetics and wish to straighten your teeth without the noticeable appearance of braces, dental aligners offer an inconspicuous alternative.
        `,
    },
    {
      id: "2",
      topic: "Seek comfort and convenience",
      description:
        "Those looking for a comfortable and convenient orthodontic solution that allows for easy removal during meals and oral care will benefit from dental aligners.",
    },
    {
      id: "3",
      topic: "Have various orthodontic concerns",
      description:
        "Dental aligners can effectively address a wide range of orthodontic issues, making them suitable for individuals with crowded teeth, gaps, overbites, underbites, and more.",
    },
    {
      id: "4",
      topic: "Desire predictable results",
      description:
        "Dental aligners are known for their precision and predictability in achieving desired results. If you appreciate a well-defined treatment plan, aligners are an excellent choice.",
    },
    {
      id: "5",
      topic: "Value shorter treatment time",
      description: `If you're seeking a solution that can potentially achieve results in a shorter time frame, dental aligners may align with your goals.`,
    },
  ];
  let img = considerAlignmentImg;
  return (
    <>
      <div>
        <div className="flex flex-col gap-2 items-center text-center mb-12">
          <p className="font-semibold text-[2rem] md:text-[2.5rem] lg:leading-[3.125rem] my-6">
            Who should consider dental aligners??
          </p>
          <p className="text-[#3E3E3E] text-[1rem] md:text-[1.5rem] leading-[1.8125rem] font-normal px-4">
            Dental aligners are a suitable option for individuals who
          </p>
        </div>
        <div className="mt-4">
          <NumericBullets
            title={title}
            subtitle={subtitle}
            hideSubtitle
            hideTitleDesc
            description={description}
            img={img}
            isReversed={true}
          />
        </div>
        <div className="bg-gradient-to-r from-[#632A3E] to-[#370541] my-24 py-8 px-16">
          <p className="text-[18px] md:text-[1.5rem] md:leading-[36px] font-normal text-[#FFFFFF] text-center">
            In summary, dental aligners offer a discreet, comfortable, and
            versatile solution for individuals seeking orthodontic treatment.
            Whether you're addressing aesthetic concerns or specific dental
            issues, aligners provide the opportunity to achieve the smile you've
            always wanted. To determine if dental aligners are the right choice
            for your orthodontic needs, consult with Koza’s qualified dentist
            who can create a personalized treatment plan tailored to your goals
            and preferences.
          </p>
        </div>
      </div>
    </>
  );
};

export default ConsiderDentalAligner;
