import React from 'react'
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import FigureCorrection from './FigureCorrection'
import AvailableTech from './AvailableTech'
import Targeted from './Targeted'
import Transformation from './Transformation'
import Benfits from './Benfits'
import greenApplePic from '../../../assets/weightMangement/greenApple.png'
import BookAppointmentForm from '../../common/BookAppointmentForm'

const WeightInchLoss = () => {
    return (
        <div>
            <Header />
            <div>
                <FigureCorrection />
                <Targeted />
                <AvailableTech />
                <Transformation />
                <Benfits />
                <BookAppointmentForm
                    appointmentPic={greenApplePic}
                    isReversed
                    hideFogEffect
                />
            </div>

            <Footer />
        </div>
    )
}

export default WeightInchLoss
