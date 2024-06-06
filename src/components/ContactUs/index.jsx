import BookAppointmentForm from '../common/BookAppointmentForm'
import Footer from '../layout/footer'
import Header from '../layout/header'
import appointmentPic from '../../assets/homeImg/AppointmentPic.png'
import SkinHairCare from '../aboutUs/SkinHairCare'
import ContactForm from './contactUsForm'

const ReadMore = () => {
    return (
        <>
            <Header />
            <div>
               
                <ContactForm
                    appointmentPic={appointmentPic}
                    isReversed
                />
            </div>
            <Footer />
        </>
    )
}
export default ReadMore
