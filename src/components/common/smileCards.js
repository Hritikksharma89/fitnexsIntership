import React from "react";
import threeDots from "../../assets/threeDots.jpg";
import smileImg from "../../assets/Ellipse 78.png";
import starimg from "../../assets/star.png";
import blackDots from "../../assets/blackthreeDots.js.png";
import cx from "classnames";

const SmileCards = ({ skinChange }) => {
  const content = [
    {
      id: 1,
      Image: smileImg,
      text: "I visited koza clinic for my skin and it was really great experience for me...within few days only I got to know the results and I felt very happy for that..The team was very friendly as they clearly explained everything what and all Happens...Thank you so much...  ❤️",
      icons: starimg,
    },
    {
      id: 2,
      Image: smileImg,
      text: "One of the best clinic. Satisfied with treatment, doctors and staff. I am really satisfied",
      icons: starimg,
    },
    {
      id: 3,
      Image: smileImg,
      text: "Hydra facial is really good treatment to do because it makes my skin glowing and healthy. The initial results typically last a few days, but my overall skin health is improved after a week.. ",
      icons: starimg,
    },
    {
      id: 4,
      Image: smileImg,
      text: "Koza is a modern, well equipped skin care clinic with very professional and empathetic staff and more than anything else, (in my experience) it shows result of the treatment faster than expected. They do adjust and are flexible with your requirements during the procedure and sessions .",
      icons: starimg,
    },
    {
      id: 5,
      Image: smileImg,
      text: "Worry about your Hair & Skin ? Then Asthetic Care is the place for you. Excellent service with high standard professionals and staffs. Must try.",
      icons: starimg,
    },
  ];
  return (
    <div
      className={cx("bg-black py-14 my-10 relative", {
        "bg-gradient-to-b from-[#749AF3] via-[#7692d4] to-[#839edd]":
          !skinChange,
      })}
    >
      <div className="text-center py-5">
        <button className="bg-white px-3 py-1 text-[24px] rounded-[5px] mb-2">
          Testimonial
        </button>
        {skinChange ? (
          <h1 className=" text-[27px] sm:text-[33px] lg:text-[40px] text-white font-semibold">
            <span className="text-[#007FBB]">What Our</span> Customers Are
          </h1>
        ) : (
          <h1 className=" text-[27px] sm:text-[33px] lg:text-[40px] text-white font-semibold">
            <span className="text-black">Here from</span> our clients
          </h1>
        )}
        <p
          className={cx(
            "sm:text-[16px] w-[90%] md:w-[70%] xl:w-[50%] mx-auto py-3 mb-20 text-black",
            {
              "text-[#423f3f]": skinChange,
            }
          )}
        >
          With so much love from our patients in the digital and physical world,
          we lead all competitive brands with a significant margin in results,
          liking, services, and value for money quality offerings. We are in
          immense gratitude to our esteemed clients whom we give the utmost
          priority and value their feedback.
        </p>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-3 mx-3 gap-y-20 xl:gap-y-3 ">
          {content.map(({ Image, text, icons }, index) => (
            <div key={index} className="flex flex-col items-center h-full">
              <div className="bg-[#fff] rounded-[7px] text-center flex-grow">
                <div className="w-[95%] mx-auto -mt-16">
                  <div className="flex justify-center items-center">
                    <img
                      src={Image}
                      alt="smile"
                      className={cx(
                        "border-[12px] rounded-full border-[#7692d4] ",
                        {
                          "border-black": skinChange,
                        }
                      )}
                    />
                  </div>
                  {skinChange ? (
                    <img src={blackDots} alt="star" className=" ml-7 z-20 " />
                  ) : (
                    <img src={threeDots} alt="star" className=" ml-7 z-20 " />
                  )}

                  <img src={icons} alt="star" className="mx-auto" />
                  <p
                    className={cx(
                      "text-thin text-[12px] flex-grow px-2 -mt-8 md:-mt-3 py-4 text-black ",
                      {
                        " text-[#749AF3]": !skinChange,
                      }
                    )}
                  >
                    {text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmileCards;
