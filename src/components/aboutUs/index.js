import BookAppointmentForm from '../common/BookAppointmentForm'
import Footer from '../layout/footer'
import Header from '../layout/header'
import Beyond from './beyond'
import Elevating from './evelating'
import WhatWeDoPage from './whatwedo'
import appointmentPic from '../../assets/homeImg/AppointmentPic.png'
import SkinHairCare from './SkinHairCare'

const ReadMore = () => {
    return (
        <>
            <Header />
            <div>
                <Elevating />
                <WhatWeDoPage />
                <Beyond />
                <BookAppointmentForm
                    appointmentPic={appointmentPic}
                    isReversed
                />
                <SkinHairCare />
            </div>
            <Footer />
        </>
    )
}
export default ReadMore
