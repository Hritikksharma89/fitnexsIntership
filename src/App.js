import AllRoutes from './components/routes'
import { createContext, useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useLocation } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
import Cookies from './components/cookies'
import whatsapp from './assets/whatsapp.png'


export const AppContext = createContext()
function App() {
    const { pathname } = useLocation()
    const scrollTop = () => scroll.scrollToTop()

    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        scrollTop()
    }, [pathname])

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)

        // this function is not calling directly after refreshing so we've used setTimeout
        setTimeout(() => {
            scrollTop()
        }, 50)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <AppContext.Provider value={scrollY}>
            <AllRoutes />
            <Cookies />
            <div className="fixed z-50 -right-[25px] sm:right-5  bottom-25 sm:top-[520px] overflow-hidden ">
                    <a href="https://wa.me/919606009079?text=Hi">
                        <img
                            src={whatsapp}
                            alt="imh"
                            className="w-[50%] sm:w-full"
                        />
                    </a>
                </div>

        </AppContext.Provider>
    )
}

export default App
