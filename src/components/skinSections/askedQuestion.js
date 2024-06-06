import React, { useState } from "react";
import addIcon from "../../assets/addIcon.png";
import minusIcon from "../../assets/minusIcon.svg";
import plusIconRev from '../../assets/plusIcon.svg'
import minusIconRev from '../../assets/minusIconRev.svg'
import cx from 'classnames'
const AskedQuestion = ({colorReversal=false, hideBlackBG=false, hideWhiteBG=false,}) => {
  const data = [
    {
      question: "What is Pigmentation?",
      answer:
        "<div>Simply, pigmentation means colouring. This colouring disorder tends to affect the skin’s color. There are mainly two types of pigmentation.</div> <br> <div>Hyperpigmentation – this is when a certain patch of skin is darker than the area that surrounds it due to the affected area producing more melanin. </div><br><div> Hyperpigmentation – this is when a certain patch of skin is darker than the area that surrounds it due to the affected area producing more melanin.</div> ",
    },
    {
      question: "What are the Skin Pigmentation conditions treated?",
      answer:
        "<li>Vitiligo - It is accompanied by patches of light skin. </li><br> <li>Age spots also called liver spots or sun spots </li><br><li>Age spots also called liver spots or sun spots </li><br><li>Post-inflammatory hyperpigmentation that occurs after an inflammatory skin condition such as acne or eczema </li>",
    },
    {
      question: "What is the Procedure For Pigmentation treatment?",
      answer:
        "<div>There are a variety of home remedies that can be done to improve the effect of skin pigmentation such as using face packs, orange paste face masks, and Aloe Vera. There are other medically approved and clinically tested cosmetic procedures for those who suffer from serious cases of skin pigmentation. </div> <br> <li>Chemical Peels – this is used to treat hyperpigmentation </li><br> <li> Laser Therapy- laser treatments are considered by professionals as one of the most advanced skin care treatments available that help to remove age spots, sunspots, and freckles. </li><br> <li>Skin Needling – This treatment is mostly done on individuals with dark skin colours.  </li><br> <li>rejuvenating therapy – Platelet Rich Plasma Therapy also known as Vampire Facial is combined with other lines of treatment to improve Skin Rejuvenation & delivers improved results.</li>",
    },
    {
      question: "What Causes Pigmentation?",
      answer:
        "<div>Melanin in our bodies gives our skin its color. Depending on the amount of melanin that is created within you, your skin tone will differ from light to dark normally. Specific cells in the skin called melanocytes make melanin and when these cells are unhealthy or damaged it affects the production process of melanin in our bodies. Either too much or too little melanin will cause skin pigmentation disorders making the skin look lighter, darker, blotchy or discoloured. While some pigmentation disorders affect only small patches of skin others can spread over to the entire body. Some of the causes include </div> <br> <li>Genetics </li><br> <li>Suns exposure – to protect your skin from the sun’s harmful UV rays, the body produces more melanin. Therefore, when being exposed to the sun too much dark spots can occur. </li><br> <li>Suns exposure – to protect your skin from the sun’s harmful UV rays, the body produces more melanin. Therefore, when being exposed to the sun too much dark spots can occur. </li><br> <li>Skin Inflammation – after acne, eczema or lupus or any time of skin injury the affected area can turn dark. </li><br> <liMedication reactions – sometimes if certain medicines do not agree with you patches of the skin may turn grey or dark in color. Usually, antimalarial drugs and certain anti-depressants cause hyperpigmentation. </li>",
    },
    {
      question: "What is the cost of pigmentation treatment?",
      answer:
        "If you follow homemade, do it yourself remedies for your pigmentation to reduce it will not cost you anything. However, most of the time these are ineffective to tackle serious cases of hyperpigmentation or other. Therefore, medical assistance from a clinic is better sought. The cost of the treatment will depend on numerous factors such as the type of skin condition and the suitable treatment procedure. For example, laser treatment could be a little bit pricey per session it is highly effective and guarantees that the darkened spots will not return. At KOZA AESTHETICS   Skin Clinic, we offer safe and clinically tested treatments that are performed by specialists in dermatology.",
    },
    {
      question: "What is Lip lightening",
      answer:
        "<div>Dark lips are the most common issue faced by majority of men in India. It occurs due to various reasons such as smoking, heredity, genetics, or simply due to extra melanin deposition in the lip area. </div><br><div>It is the most prevalent problem faced by majority of men of all ages, but can be effectively cured, notwithstanding the period or extent for which dark lips has its effect. </div>",
    },
    {
      question: "What's at Koza AESTHETIC for Lip Lightening",
      answer:
        "<span>1.Lip peeling</span> <br> <span>2.Micro Pigmentation:</span><br><span>3.Lip Resurfacing</span>",
    },
  ];

  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <div className="">
        <div className={cx("bg-tertiary pt-4", {'bg-white':colorReversal})}>
          <p className={cx("text-[#FFF] text-[22px] md:text-[28px] lg:text-[40px] text-center font-semibold mx-auto",{'!text-[#000]':colorReversal})}>
            Frequently asked questions
          </p>
          <div className="mt-4 w-[95%] md:w-[80%] lg:w-[70%] m-auto">
            {data?.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border-b-2 border-[#D3D3D3] py-8 px-1 md:px-2"
                >
                  <div
                    className="flex justify-between cursor-pointer items-center"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className={cx("text-[#FFF] font-normal text-[1.125rem] px-1",{'!text-[#000]':colorReversal})}>
                      {item.question}
                    </span>
                    <span className="h-[30px] w-[30px] shrink-0">
                      <img
                        className={cx("shrink-0", {'hidden': hideBlackBG})}
                        src={isOpen ? minusIcon : addIcon}
                        alt={isOpen ? "minus" : "add"}
                      />
                      <img
                        className={cx("shrink-0", {'hidden': hideWhiteBG})}
                        src={isOpen ? minusIconRev : plusIconRev}
                        alt={isOpen ? "minus" : "add"}
                      />
                    </span>
                  </div>
                  {isOpen && (
                    <div
                      className="mt-2 text-[#D3D3D3]"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AskedQuestion;
