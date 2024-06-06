import React from "react";
import TestimonialSlides from "./testimonialSlides";

const Testimonial = () => {
  return (
    <div className="bg-[#000000] min-h-[80vh] p-5">
      <div className="flex flex-col md:grid grid-cols-2 md:gap-16">
        <div className="flex flex-col justify-center items-center py-[20%] pl-[4%]">
          <div className="self-start bg-[#FFFFFF] text-[#000000] w-[35%] md:w-[32%] lg:w-[20%] text-center rounded-[5px]">
            Testimonial
          </div>
          <div className="font-semibold text-[30px] lg:text-[50px]">
            <span className="text-secondary"> What Our</span>
            <span className="text-[#FFFFFF]">
              Customers Are Talking About Us
            </span>
          </div>
          <div className="text-[#949494] font-semibold pt-4">
            With so much love from our patients in digital and physical world,
            we lead all competitive brands with a significant margin in results,
            liking, services and value for money quality offerings. We are in
            immense gratitude of our esteemed clients whom we give the utmost
            priority and value their feedbacks.
          </div>
        </div>
        <div>
          <TestimonialSlides />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
