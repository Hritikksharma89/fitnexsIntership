import React from "react";
import image from "../../assets/cosmeticDentist/considerDentalImg.svg";
import BulletsOnTextCard from "../common/BulletOnTextCard";

const ConsiderDentalImplants = () => {
  let description = [
    {
      id: "1",
      topic: "Have missing teeth",
      description:
        "Dental implants can replace a single missing tooth, multiple teeth, or even an entire arch of teeth. Whether your tooth loss is the result of injury, decay, or other factors, implants offer a comprehensive solution.",
    },
    {
      id: "2",
      topic: "Desire a permanent solution",
      description:
        "If you're looking for a long-term, permanent tooth replacement that feels and functions like natural teeth, dental implants are an excellent choice.",
    },
    {
      id: "3",
      topic: "Seek improved quality of life",
      description:
        "Dental implants can significantly enhance your quality of life by restoring your ability to eat, speak, and smile with confidence. They provide a stable and reliable solution that can positively impact your self-esteem and overall well-being.",
    },
    {
      id: "4",
      topic: "Want to preserve oral health",
      description:
        "Dental implants support oral health by preventing bone loss and preserving the integrity of adjacent teeth. They promote the longevity of your natural smile.",
    },
  ];
  let img = image;
  return (
    <>
      <div>
        <div className="mt-24 flex flex-col gap-2 items-center text-center">
          <p className="text-[#000] text-[1.5rem] md:text-[2.5rem] lg:leading-[3.125rem] font-semibold">
            Who Should Consider Dental Implants?
          </p>
          <p className="text-[#3E3E3E] font-normal text-[1rem] md:text-[1.5rem] leading-[2.25rem]">
            Dental implants are a suitable option for a wide range of
            individuals, including those who
          </p>
        </div>
        <div className="my-14">
          <BulletsOnTextCard
            description={description}
            img={img}
            isReversed={true}
          />
        </div>
        <div className="bg-gradient-to-r from-[#632A3E] to-[#370541] text-[#fff] my-24 py-8 px-16">
          <p className="text-center text-[18px] lg:text-[24px] font-normal md:leading-9">
            In summary, dental implants are a groundbreaking dental technology
            that offers numerous benefits, including restored functionality,
            jawbone preservation, enhanced aesthetics, durability, and improved
            oral health. They are a suitable option for anyone with missing
            teeth who desires a permanent and reliable solution to rejuvenate
            their smile and quality of life. If you're considering dental
            implants, consult with our qualified dental professional to
            determine the best course of action tailored to your individual
            needs and goals.
          </p>
        </div>
      </div>
    </>
  );
};

export default ConsiderDentalImplants;
