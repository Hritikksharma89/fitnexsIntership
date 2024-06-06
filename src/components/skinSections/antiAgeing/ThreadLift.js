import React from 'react'
import PicCatalog from '../../common/PicCatalog'
import filterimg from '../../../assets/skinImg/antiageingimg/saggingskin.png'
import performedimg from '../../../assets/skinImg/antiageingimg/cleansed.png'
const ThreadLift = () => {
  return (
      <>
          <div className="py-4 md:py-10">
              <div className="text-center text-[28px] sm:text-[33px] lg:text-[40px] leading-[30px] md:leading-[50px] font-semibold">
                  Thread lift
              </div>
              <div className="py-3">
                  <PicCatalog
                      img={filterimg}
                      isReversed
                      second_title="What it is?"
                      titleNotNeeded
                      description="<div>This treatment is equally sought out in males and females. Sagging skin is a common issue after the age of 30, and collagen induction is the method to lift up the sagging skin.</div><div>In the thread lift procedure, collagen threads are used to lift and tighten the sagging skin.</div><div>It is a single sitting procedure that results in collagen build up inside the skin causing lifting and tightening of skin.</div><div>It takes 3 months to show complete results.</div>"
                  />
              </div>

              <div className='py-3'>
                  <PicCatalog
                      img={performedimg}
                      second_title="How is it performed?"
                      description="<div>First, the face is cleansed and local anaesthetic cream is applied for about 40 mins then we use very fine tissue friendly nano threads i.e. collagen threads are inserted into the skin that work exactly the same as our collagen fibres that are present in the skin naturally. These fibres are very safe.</div><div>After complete insertion of fibres into the skin, it gives proper lifting to the skin. Skin instantly looks firm and tight. A small amount of tenderness can be felt for few days.</div>"
                  />
              </div>
          </div>
      </>
  )
}

export default ThreadLift