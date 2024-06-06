import React from 'react'
import CommonHeading from '../common/commonHeading'
import bgimg from '../../assets/cosmeticDentist/cosmeticDentist.png'

const CosmeticDentistry = () => {
    return (
        <>
            <div className="relative w-full min-h-full ">
              <div className=" h-[85vh] sm:h-[80vh] md:h-[75vh] lg:h-[85vh] xl:h-full  min-h-full">
                  <img
                      src={bgimg}
                      alt="background"
                      className="min-w-full object-cover h-full "
                  />
              </div>
              <div className="absolute inset-0 bg-[#353535]/40 h-[85vh] sm:h-full min-h-full" />
              <CommonHeading
                  title="Cosmetic Dentistry"
                  description="At Koza , we offer Cosmetic dentistry treatments to help you in tooth whitening and bring back your smile. "
              />
            </div>
            {/* <div className="relative top-0">
        <div className="bg-cosmeticDentistBG bg-center md:bg-cover h-[30rem] sm:h-[48rem] sm:min-w-full brightness-50"></div>
        <div className="absolute top-2 sm:top-[20%] min-w-full ">
          <CommonHeading
            title="Cosmetic dentistry"
            description="At Koza , we offer cosmetic denistry treatments to help you in tooth whitening and bring back your smile."
          />
        </div>
      </div> */}
        </>
    )
}

export default CosmeticDentistry
