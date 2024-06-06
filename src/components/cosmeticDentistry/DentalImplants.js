import React from 'react'
import TextCard from '../common/textCard'
import DentalImplantsImg from '../../assets/cosmeticDentist/dentalImplants.svg'

const DentalImplants = () => {
  const para = [
    `A dental implant is a remarkable solution that has revolutionized the field of modern dentistry. Crafted from biocompatible materials, typically titanium, it takes the form of a tiny metal screw.`,
    `Surgically implanted into the jawbone, this small but powerful device serves as a dependable replacement for a missing tooth's root.`,
    `Once in place, a dental implant becomes the sturdy foundation upon which artificial teeth, such as crowns, bridges, or dentures, can be securely anchored.`,
    `This innovative technology has transformed the lives of countless individuals by restoring both the functionality and aesthetics of their smiles.`,
  ]
  return (
    <>
      <div className="my-10 px-4">
        <TextCard
          cardTitle="Dental implants"
          containerClass='lg:!mt-[10%]'
          title="What is it?"
          className="!text-[1.5rem] !leading-[2.25rem]"
          paragraphs={para}
          img={DentalImplantsImg}
          isReversed={true}
          buttonNotNeeded={true}
        />
      </div>
    </>
  )
}

export default DentalImplants
