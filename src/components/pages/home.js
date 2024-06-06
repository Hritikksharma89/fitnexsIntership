import React from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import HomeCare from "../homeLanding/homeCare";
import ChooseKoza from "../homeLanding/chooseKoza";
import AesthetiCare from "../homeLanding/relaxCare";
import HomeFace from "../homeLanding/homeface";
import SimpleSlider from "../homeLanding/testimonial";
import BookAppointmentForm from "../common/BookAppointmentForm";
import appointmentPic from "../../assets/homeImg/AppointmentPic.png"
const Home = () => {
  return (
    <div className="">
      <Header />
      <HomeFace />
      <HomeCare />
      <AesthetiCare />
      <ChooseKoza />
      <SimpleSlider />
      <BookAppointmentForm appointmentPic={appointmentPic} isReversed />
      <Footer />
    </div>
  );
};

export default Home;
