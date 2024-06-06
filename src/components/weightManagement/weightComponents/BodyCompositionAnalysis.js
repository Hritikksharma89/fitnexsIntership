import React from 'react'
import bodyCompositionAnalysis from '../../../assets/weightMangement/BodyCompositionAnalysis.png'
import TextCard from '../../common/textCard'

const BodyCompositionAnalysis = () => {
    const para = [
        `At KOZA Aesthetic Care, we believe in precision and personalization. Before recommending a weight loss package, 
      we conduct a comprehensive Body Composition Analysis. This cutting-edge assessment provides a deep understanding of your body's composition, 
      including crucial details such as body fat percentage, muscle mass, bone density, and water content.`,
        `By analysing your body composition through parameters like BMI, BMR, fat%, lean%, age, gender, you can understand why you weigh what you weigh.`,
        `By delving into these specifics, we gain valuable insights into your unique physiology and
      can tailor a weight loss program that precisely addresses your needs and goals.`,
        `Two people of same sex and body weight may look completely different from each other because they have a different body composition.`,
        `This data-driven approach ensures that your weight loss journey is both effective and safe, leading to lasting results and improved overall health.`,
    ]
    return (
        <div>
            <div className="bg-BodyCompositionAnalysisBG bg-cover">
                <div className="bg-[#2B2B2B80]">
                    <div className="min-w-full min-h-max text-[#fff] p-8 z-10">
                        <TextCard
                            cardTitle="Body composition analysis"
                            paragraphs={para}
                            img={bodyCompositionAnalysis}
                            action="BOOK APPOINTMENT NOW"
                            isReversed
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyCompositionAnalysis
