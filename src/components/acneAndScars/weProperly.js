import React from "react";

import facial from '../../assets/Acne-scar/images/cleanse.png'
import facialmakeup from '../../assets/Acne-scar/images/facialmakeup.png'
import PicCatalog from "../common/PicCatalog";
import TextCard from "../common/textCard";

const WeProperly = () => {
               
   return (
       <>

           <div
               className="bg-no-repeat my-5 bg-cover py-14"
               style={{ backgroundImage: `url(${facial})` }}
           >

               <div className="w-[90%] mx-auto">
                   <PicCatalog
                       title="How is it done?"
                       secondTitleNotNeeded
                       className="p-2 xl:ml-24 py-5"
                       img={facialmakeup}
                       description="<div>First, we properly cleanse the skin - we will remove all makeup along with dust from the skin. Then microdermabrasion machine is connected with a handheld device that is moved across your face starting from the forehead then coming down to the cheeks, nose and chin and lastly the neck part. It is not a painful procedure, one will only feel a small amount of suction coming out of the handheld device, it has tips of different sizes for different areas of the body.</div> <div>And this will gently remove all the dead skin from the face along with impurities deep from the pores.</div>"
                       isTextWhite
                   />
               </div>
           </div>
       </>
   )
};
export default WeProperly;
