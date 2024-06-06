import React from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonGradient from '../common/buttonGradient'
import Header from '../layout/header'
import Footer from '../layout/footer'
const PageNotFound = () => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    return (
        <>
            <Header />
            <div
                className="h-screen w-screen flex flex-col justify-center items-center gap-y-4 md:gap-y-10 text-center
            bg-gradient-to-r from-[#39063F] from-2.3% via-[#7C3057] via-72.44% to-[#602639] to-97.51% text-transparentBG bg-clip-text"
            >
                <p className="flex text-4xl">Website under construction...</p>
                <ButtonGradient actionRequired="Go Back" onClick={goBack} />
            </div>
            <Footer />
        </>
    )
}

export default PageNotFound
