import React from "react";
import image from "../../assets/cosmeticDentist/benefitOfDentalImplantsImg.svg";
import NumericBullets from "../common/NumericBullets";

const BenefitOfDentalImplants = () => {
  let description = [
    {
      id: "1",
      topic: "Restored functionality",
      description:
        "Dental implants provide a level of functionality that is unparalleled in tooth replacement options. Unlike traditional dentures, which may slip or limit your dietary choices, implants allow you to eat, speak, and laugh with confidence, just as you would with natural teeth.",
    },
    {
      id: "2",
      topic: "Preservation of jawbone",
      description:
        "When a tooth is lost, the underlying jawbone can gradually deteriorate due to lack of stimulation. Dental implants effectively mimic natural tooth roots, stimulating the jawbone and preventing bone loss. This preservation of the jawbone not only maintains facial structure but also enhances long-term oral health.",
    },
    {
      id: "3",
      topic: "Enhanced aesthetics",
      description:
        "Dental implants offer a seamless and natural-looking solution to replace missing teeth. Whether it's a single tooth or multiple teeth, implants blend harmoniously with your existing teeth, ensuring a beautiful and consistent smile.",
    },
    {
      id: "4",
      topic: "Durability and longevity",
      description:
        "Dental implants are designed to be a permanent solution. With proper care and regular dental check-ups, they can last a lifetime, eliminating the need for frequent replacements or adjustments that may be necessary with other tooth replacement options.",
    },
    {
      id: "5",
      topic: "Improved oral health",
      description: `Unlike traditional bridges, which require the alteration of adjacent healthy teeth, dental implants do not compromise the integrity of neighboring teeth. This means your natural teeth remain untouched, promoting overall oral health.`,
    },
  ];
  let img = image;
  return (
    <>
      <div>
        <NumericBullets
          title="Benefits of Dental Implants"
          hideSubtitle
          hideTitleDesc
          description={description}
          img={img}
        />
      </div>
    </>
  );
};

export default BenefitOfDentalImplants;
