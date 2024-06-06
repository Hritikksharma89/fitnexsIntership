import React from "react";
import TextCard from "../common/textCard";
import dentalVeeners from "../../assets/cosmeticDentist/dentalVeneer.png";

const DentalVeneers = () => {
  const para = [
    `Choosing dental veneers is a significant step towards achieving the stunning smile you've always dreamed of.
     These thin, custom-made shells are designed to enhance the aesthetics of your teeth but, 
     there is another vital decision to make: selecting the right material`,
    `The two primary materials used in the veneer fabrication process are composite resin and porcelain, 
     both capable of beautifully transforming your smile.`,
    `The choice between them hinges on your unique needs and priorities, such as cost, treatment time, and durability.`,
    `Let's delve into the differences between composite and porcelain veneers to help you make an informed decision.`
  ];
  return (
    <>
      <div className="my-16 px-4">
        <TextCard
          cardTitle="Dental Veneers"
          img={dentalVeeners}
          paragraphs={para}
          isReversed={true}
          buttonNotNeeded
        />
      </div>
    </>
  );
};

export default DentalVeneers;
