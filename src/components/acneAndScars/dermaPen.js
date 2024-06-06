import React  from "react";
import Do from "../common/Do";
import image from "../../assets/Acne-scar/images/howDermaPenWork.png"
const Dermapen = () =>  {
  const data = [
      {
          description: "Inserting micro-needles into the skin causes minor trauma that promotes the deeper layer of skin, known as the dermis, to rebuild itself by producing more collagen",
      },
      {
          description: "Collagen is a protein that makes your skin appear firm, elastic, and youthful. You lose collagen as you age, as well as when your skin is injured by acne, surgical incisions, or over-stretching from pregnancy or weight gain.",
      },
      {
          description: "The Derma Pen tip can be adjusted from 0.25mm to 2.5mm to cater to individual skin conditions and treatment areas, providing an innovative, effective, and affordable skin rejuvenation option for patients.",
      },
      {
          description: "It’s important to understand that Derma Pen is not a quick fix. While you may notice your skin starting to look and feel younger after just a few days, subtle improvements will continue to appear for several weeks and even months. You may require multiple treatment options to achieve optimal results",
      },
  ]

  let mainTitle = 'How does derma pen work?'
  return (
      <div>
          <div className=" py-2 md:py-5">
              <Do
                  data={data}
                  backgroundImage={image}
                  titleNotNeeded
                  buttonNotNeeded
                  mainTitle={mainTitle}
                  colorForWhiteBG
                  largerGapOnPoints
              />
          </div>
      </div>
  )
}
export default Dermapen;