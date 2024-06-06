import React from "react";
import NumericBullets from "../common/NumericBullets";
import image from "../../assets/cosmeticDentist/benefitOfgingivoplasty.svg";

const BenefitsOfGingivoplasty = () => {
  let title = "Benefits of Gingivoplasty ";
  let description = [
    {
      id: "1",
      topic: "Aesthetic transformation",
      description:
        "One of the primary advantages of gingivoplasty is its ability to bring about a significant improvement in the appearance of your smile. Irregular or disproportionate gum tissue can detract from an otherwise beautiful set of teeth. By reshaping the gums, this procedure can create a more aesthetically pleasing smile, enhancing your overall facial symmetry",
    },
    {
      id: "2",
      topic: "Enhanced oral hygiene",
      description:
        "Gingivoplasty can help improve your oral hygiene. When the gums are irregularly shaped or excessively cover the teeth, it can be challenging to maintain proper oral hygiene. This can lead to a higher risk of gum diseases and dental issues. By reshaping the gums, gingivoplasty makes it easier to clean and care for your teeth and gums, reducing the risk of oral health problems.",
    },
    {
      id: "3",
      topic: "Correction of genetic or traumatic conditions",
      description:
        "Some individuals may have naturally irregular gum tissue due to genetic factors, while others may have experienced trauma that altered the shape of their gums. Gingivoplasty can correct these conditions, restoring a more natural and symmetrical gumline.",
    },
    {
      id: "4",
      topic: "Improved self-esteem",
      description:
        "A confident smile can significantly impact your self-esteem and self-confidence. Gingivoplasty can help you feel more at ease and proud of your smile, allowing you to express yourself with confidence in social and professional situations.",
    },
  ];
  let img = image;
  return (
    <>
      <div>
        <div className="my-12">
          <NumericBullets hideSubtitle hideTitleDesc title={title} description={description} img={img} />
        </div>
      </div>
    </>
  );
};

export default BenefitsOfGingivoplasty;
