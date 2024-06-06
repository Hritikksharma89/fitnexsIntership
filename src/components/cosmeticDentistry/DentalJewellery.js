import React from 'react'
import ImageScale from '../common/reverseBolierPlate'
import BgImage from '../../assets/cosmeticDentist/dentalJewelleryBg.svg'
import FrontImage from '../../assets/cosmeticDentist/dentalJewelleryFront.svg'

const DentalJewellery = () => {
  let data = [
      {
          title:'What it is?',
          text:`<div>Dental jewellery, often referred to as a "Tooth Gem," is a captivating and non-invasive cosmetic dental enhancement that allows you to add a touch of sparkle to your smile.</div> <div>These miniature gems, rhinestones, or crystals are carefully affixed to a tooth's surface using a specialized bonding agent.</div> <div>What sets dental jewellery apart is its ability to enhance your smile without causing any damage to the enamel or compromising your oral health.</div> <div>It's a creative way to express your individuality and make a memorable fashion statement with your smile.</div>`,
          front: FrontImage,
          bgimg: BgImage,
      },
  ]
  return (
    <div>
      <ImageScale
        heading="Dental Jewellery (Tooth Gem)"
        contentMatter={data}
      />
    </div>
  )
}

export default DentalJewellery
