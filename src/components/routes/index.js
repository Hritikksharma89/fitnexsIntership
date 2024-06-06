import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReadMore from '../aboutUs'
import Acnescar from '../acneAndScars'
import Dentistry from '../cosmeticDentistry/index'
import Home from '../pages/home'
import SkinSection from '../skinSections'
import WeightInchLoss from '../weightManagement/InchLossComponents/WeightInchLoss'
import CryoCoolSection from '../weightManagement/CryoCool/CryoCoolIndex'
import WeightSection from '../weightManagement/weightComponents'
import Surgery from '../cosmeticSurgery'
import AntiAgeingPage from '../skinSections/antiAgeing'
import AntiDandruff from '../antidandruff'
import Transplantation from '../transplantationHair'
import PageNotFound from '../pages/PageNotFound'
import DarkCircle from '../darkCircle'
import PrivacyPolicy from '../pages/privacyPolicy'
import TermsConditions from '../pages/termsConditions'
import ContactUs from '../ContactUs'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<ReadMore />} />
            <Route path="/ContactUs" element={<ContactUs />} />

            <Route path="/weight-management" element={<WeightSection />} />
            <Route path="/inchLoss" element={<WeightInchLoss />} />
            <Route path="/cryocool" element={<CryoCoolSection />} />
            <Route path="/skin" element={<SkinSection />} />
            <Route path="/acne" element={<Acnescar />} />
            <Route path="/anti-ageing" element={<AntiAgeingPage />} />
            <Route path="/darkCircle" element={<DarkCircle />} />
            <Route path="/antiDandruff" element={<AntiDandruff />} />
            {/* <Route path="/antiDandruff" element={<AntiDandruff />} /> */}
            <Route path="/hairTransplant" element={<Transplantation />} />
           
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/term-condition" element={<TermsConditions />} />

            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AllRoutes
