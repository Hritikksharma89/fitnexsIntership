import React from 'react'
import SkinExpTop from '../../assets/skinImg/SkinExpTop.png'
import TextCard from '../common/textCard'
import bg_Aesthetics from '../../assets/skinImg/bg_Aesthetics.png'
import PicCatalog from '../common/PicCatalog'

const KozaAesthetics = () => {
    
    return (
        <>
            

            <div className="pb-[2rem] md:pb-[13rem] ">
                <div
                    className="bg-cover bg-no-repeat "
                    style={{ backgroundImage: `url(${bg_Aesthetics})` }}
                >
                    <div className="w-[90%]  mx-auto">
                        <PicCatalog
                            title="Talk to your skin experts at Koza Aesthetics"
                            className=" translate-y-[20%] "
                            secondTitleNotNeeded
                            img={SkinExpTop}
                            isTextWhite
                            description="
                                <div>
                                Skin experts at Koza AESTHETICS can help you identify the cause of your hyperpigmentation and work with you to develop an appropriate treatment plan.
                                </div> 
                                <div>
                                No matter what treatment you ultimately choose, it’s important to protect your skin from further sun damage and hyperpigmentation. Wearing sunscreen every day is a must. 
                                You should apply sunscreen every morning — even when it’s cloudy! — and reapply as needed throughout the day. Be sure to use a sunscreen with SPF 30 or higher.
                                </div>"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default KozaAesthetics
