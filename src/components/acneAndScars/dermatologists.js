import React from 'react'
import bg_needling from '../../assets/Acne-scar/bg_needling.png'
import Dermapen from '../../assets/Acne-scar/Dermapen.png'
import PicCatalog from '../common/PicCatalog'

const Dermatologists = () => {
  return (
      <>
          <div
              className="bg-no-repeat my-5 bg-cover py-10"
              style={{ backgroundImage: `url(${bg_needling})` }}
          >
              <p className="text-[2rem] sm:text-[2.5rem] font-semibold leading-[3.125rem] pt-4 text-white text-center py-2">
                  Micro needling - DERMAPEN
              </p>
              <div className="w-[90%] mx-auto py-2 md-py-5">
                  <PicCatalog
                      second_title="What is Derma Pen?"
                      className=" p-3 xl:ml-24"
                      img={Dermapen}
                      description="<div>Derma Pen is a form of micro-needling that dermatologists recommend for various skin conditions, including depressed acne scars, surgical scarring, wrinkles, stretch marks, and more</div><div>The procedure involves tiny micro punctures on the skin with tiny, sterile needles in a unique, spring-loaded needle tip for safe, controlled treatment and enhanced results. </div> <div>It increases the production of collagen. The collagen breaks down the fibrous tissue and replaces it with regular tissue leaving your skin revitalized and blemish-free.</div>"
                      isTextWhite
                    
                  />
              </div>
          </div>
      </>
  )
}

export default Dermatologists