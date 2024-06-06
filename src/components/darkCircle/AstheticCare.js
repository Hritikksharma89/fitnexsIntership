import React from 'react'
import PicCatalog from '../common/PicCatalog'
import image from '../../assets/darkCircle/astheticDarkCircle.png'

const AstheticCare = () => {
    const description = `
    <div>Koza aesthetic care is India’s leading Beauty & Wellness clinic. We are equipped with skincare experts, making our name synonymous with safe, modern, and effective skin and cosmetic treatments. Our mission is to help you regain confidence and put forth the best version of yourself. Consult with us for a permanent solution to your dark circles and eye puffiness problem.</div>
    <div>We can help you recover your complexion through evidence-based treatment methods and are transparent about the expected results to ensure customer satisfaction. We use the best-in-class treatments and technologies that are approved by the FDA standards. This ensures that the highest safety protocols are followed, and enables us to deliver great results for our patients.</div>`
    return (
        <>
            <div>
                <div className="py-2 md:py-5">
                    <PicCatalog
                        img={image}
                        description={description}
                        className="p-5"
                        isReversed
                        title="Why choose koza aesthetic care For dark circles treatment?"
                        secondTitleNotNeeded
                    />
                </div>
            </div>
        </>
    )
}

export default AstheticCare
