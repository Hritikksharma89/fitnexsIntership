import React from 'react'
import TextCard from '../common/textCard'
import ProVampFacTOP from '../../assets/skinImg/ProVampFacTOP.png'
import bg_ProVampFace from '../../assets/skinImg/bg_ProVampFace.png'

import PicCatalog from '../common/PicCatalog'

const SkinFacial = () => {
  
    return (
        <>
            

            <div className="pb-[10rem]">
                <div
                    className="my-5 bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${bg_ProVampFace})` }}
                >
                    <div className="w-[90%] mx-auto">
                        <PicCatalog
                            title="Process of Vampire facial"
                            className=" md:ml-10 translate-y-[16%]"
                            img={ProVampFacTOP}
                            isTextWhite
                            secondTitleNotNeeded
                            description="<p>
                            A Vampire Facial begins with drawing a vial of your blood and then separating it in a centrifuge to yield the platelets. 
                            Following the blood draw, the Vampire Facial will begin. Before the procedure begins the practitioner will apply a face numbing cream to help
                            aid in the discomfort – its not a painful procedure but the cream will address uneasiness. The skin experts at Koza AESTHETICS   may combine
                            rejuvenating therapy with face serums and Brightening agents to improve the session efficacy to work on pigmentation. It works beautifully by inducing
                            inflammation, triggering collagen and other regenerative properties.
                            </p>
                            <p>
                            rejuvenating therapy injections work by supplying growth factors to reduce the pigmentation. And being an independent treatment with no downtime, 
                            it can be done in conjunction with conventional treatments for melasma to add and enhance the effects. rejuvenating therapy is primarily a healing vehicle. 
                            It needs to be injected into the membrane below the skin.  Platelet-Rich Plasma has separate roles like increasing skin volume and adding 
                            new blood vessels to name a few. The way it works is by supplying the underlying skin membrane with collagen and tenascin stimulated by the 
                            transforming growth factors in rejuvenating therapy. These growth factors also promote formation of new blood vessels that in some cases results in 
                            disappearance of spider veins.
                            </p>"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default SkinFacial
