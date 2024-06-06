import React from "react";
import cx from "classnames";
import AppointmentPic from "../../assets/homeImg/AppointmentPic.png";
import CalendarIcon from "../../assets/octiconCalendar.png";
import ProfileIcon from "../../assets/ProfImg.png";
import PhoneIcon from "../../assets/Mobile.png";
import ButtonGradient from "../common/buttonGradient";

const Appointment = (isReversed) => {
  return (
    <>
      <div className="grid sm:grid-cols-12 gap-4 my-4 justify-center">
        <div className="grid sm:col-span-10 justify-center md:row-start-1 md:translate-x-20 lg:translate-x-24 px-4">
          <p className="text-[28px] lg:text-[36px] xl:text-[40px] font-semibold leading-[50px] text-center">
            Book Appointment
          </p>
          <p className="text-[14px] lg:text-[18px] text-center">
            Please fill the form below and expedite your consultation process.
          </p>
        </div>
        <div
          className="grid justify-center sm:col-span-2 row-start-1 md:-translate-x-8 lg:-translate-x-10 xl:-translate-x-32 sm:translate-y-6 md:translate-y-8 xl:translate-y-14
          italic text-left gap-y-0 md:pr-4 lg:pr-2 text-[#ccc] font-normal text-[20px] lg:text-2xl"
        >
          <p className="">Let’ s Get in Touch</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 justify-stretch">
        <div className="flex gap-x-2 p-2 h-[100%] justify-center items-center">
          <form className="px-6">
            <div className="flex flex-col justify-center gap-4 ">
              <span className="relative border rounded-md p-4 border-[#D3D3D3]">
                <input
                  className="outline-none h-6 w-auto lg:w-96"
                  type="text"
                  name="YourName"
                  placeholder="Your Name"
                />
                <img
                  src={ProfileIcon}
                  alt="ProfileIcon"
                  className="absolute z-10 right-0 top-0 p-5"
                />
              </span>
              <span className="relative border rounded-md p-4 border-[#D3D3D3]">
                <input
                  className="outline-none h-6 w-auto lg:w-96 "
                  type="text"
                  name="PhoneNumber"
                  placeholder="Phone Number"
                />
                <img
                  src={PhoneIcon}
                  alt="PhoneIcon"
                  className="absolute z-10 right-0 top-0 py-4 px-4"
                />
              </span>
              <div className="relative border rounded-md p-4 border-[#D3D3D3]">
                <input
                  className="outline-none h-6 w-auto lg:w-96 "
                  type="text"
                  name="DateOfAppointment"
                  placeholder="Date of Appointment"
                />
                <img
                  src={CalendarIcon}
                  alt="CalendarIcon"
                  className="absolute z-10 right-0 top-0 p-4"
                />
              </div>

              <ButtonGradient actionRequired="Book Appointment Now" />
            </div>
          </form>
        </div>

        <div
          className={cx(
            "flex flex-wrap object-contain overflow-hidden justify-center relative p-10",
            {
              "row-start-1 px-2": isReversed,
            }
          )}
        >
          <img
            src={AppointmentPic}
            alt="pic"
            className="object-contain sm:px-0 px-3"
          />
          <div className="absolute right-0 w-20 lg:w-36 h-[330px] md:h-[200px] xl:h-[446px] bg-gradient-to-l from-[#fff] from-30%"></div>
          <div className="absolute bottom-0 h-10 md:h-36 w-[500px] md:w-[390px] lg:w-[490px] xl:w-[720px] bg-gradient-to-t from-[#fff] from-30%"></div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
