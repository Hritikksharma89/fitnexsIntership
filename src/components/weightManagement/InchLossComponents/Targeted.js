import React from 'react'
import Do from '../../common/Do'
import Target from '../../../assets/weightMangement/TargetedImg.png'

const Targeted = () => {
  const data = [
    {
      description: 'Say goodbye to those stubborn inches in problem areas like your tummy, hips, thighs, arms, and back with our specialized spot reduction therapies. Our treatments are designed to focus on specific areas, allowing you to lose 1-2 inches from a single spot in just one session',
    },
    {
      description: 'Our spot reduction therapies are usually a combination of multiple techniques which are customised in an effective way to address specific areas of concern, providing concentrated inch loss, improved muscle tone, and a more sculpted appearance. Say hello to a firmer and more confident you with our targeted treatments.',
    },
  ]
  return (
    <>
      <div className=''>
        <Do
          data={data}
          mainTitle="Targeted inch loss"
          mainDescription="“Lose those extra inches from tummy, hips, thighs, arms”"
          backgroundImage={Target}
          action="Book Appointment Now"
          bulletsNotNeeded
          pointsCentered
          titleNotNeeded
          largerGapOnPoints
        />
      </div>
    </>
  )
}
export default Targeted
