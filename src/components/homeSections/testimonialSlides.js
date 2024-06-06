import React from "react";
// import blackDots from "../../assets/blackthreeDots.js.png";
import starimg from "../../assets/star.png";
import test1 from "../../assets/test1.png";
import test2 from "../../assets/test2.png";

import cx from "classnames";
import Slider from "react-slick";

const TestimonialSlides = () => {
  const content = [
    {
      id: 1,
      Image: test1,
      text: "I visited koza clinic for my skin and it was really great experience for me...within few days only I got to know the results and I felt very happy for that..The team was very friendly as they clearly explained everything what and all Happens...Thank you so much...  ❤️",
    },
    {
      id: 2,
      Image: test2,
      text: "One of the best clinic. Satisfied with treatment, doctors and staff. I am really satisfied.",
    },
    {
      id: 3,
      Image: test1,
      text: "Hydra facial is really good treatment to do because it makes my skin glowing and healthy. The initial results typically last a few days, but my overall skin health is improved after a week.. ",
    },
    {
      id: 4,
      Image: test2,
      text: "Koza is a modern, well equipped skin care clinic with very professional and empathetic staff and more than anything else, (in my experience) it shows result of the treatment faster than expected. They do adjust and are flexible with your requirements during the procedure and sessions .",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full md:w-[80%] my-[10%]">
      <Slider {...settings} className="pt-[6%]">
        {content.map(({ Image, text }, index) => (
          <div key={index} className="">
            <div className="w-full mb-[20%]">
              <div className="flex justify-center items-center">
                <img
                  src={Image}
                  alt="smile"
                  className={cx(
                    "relative top-[90px] border-[8px] rounded-full border-[#000000] w-1/2"
                  )}
                />
              </div>

              <div className="bg-secondary min-h-[50vh] rounded-lg">
                {/* <div className="flex justify-start ml-4 pt-4">
                  <img src={blackDots} alt="star" className="" />
                </div> */}
                <div className="flex justify-center items-center pt-16">
                  <img src={starimg} alt="star" className="" />
                </div>
                <div className="text-thin text-[12px] text-center text-black py-5 min-h-full">
                  {text}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlides;
