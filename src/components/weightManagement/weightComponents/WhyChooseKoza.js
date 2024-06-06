import React from 'react'
import NumericBullets from '../../common/NumericBullets'
import chooseKoza1 from '../../../assets/weightMangement/chooseKozaImg1.png'
import chooseKoza2 from '../../../assets/weightMangement/chooseKozaImg2.png'

const WhyChooseKoza = () => {
    const countingArr1 = [
        {
            id: 1,
            topic: 'Holistic approach',
            description: `We believe that true weight loss success comes from addressing not only the physical aspects but also the mental and emotional 
                aspects of your well-being. Our holistic approach considers the whole you, ensuring a comprehensive and sustainable transformation.`,
        },
        {
            id: 2,
            topic: 'Expert nutritional guidance',
            description: `Our team of experienced nutritionists and dietitians works closely with you to create personalized meal plans and dietary strategies that 
                are tailored to your unique needs and preferences. We believe in the power of balanced nutrition as a foundation for weight loss.`,
        },
        {
            id: 3,
            topic: 'Cutting-edge weight loss machines',
            description: `KOZA Aesthetic Care is equipped with state-of-the-art weight loss machines that use the latest technology to target stubborn fat, tighten skin,
                 and sculpt your body. These machines enhance the effectiveness of your weight loss journey.`,
        },
        {
            id: 4,
            topic: 'Ayurveda integration',
            description: `We blend modern science with ancient wisdom by incorporating Ayurveda principles into our programs. 
                Ayurveda helps harmonize your body, mind, and spirit, enhancing your overall health and vitality.`,
        },
        {
            id: 5,
            topic: 'Lifestyle correction',
            description: `Sustainable weight loss is not just about temporary changes; it's about making lasting adjustments to your lifestyle. 
                Our experts guide you through these changes, empowering you to maintain your desired weight in the long run.`,
        },
    ]
    const countingArr2 = [
        {
            id: 6,
            topic: 'Personalized support',
            description: `We understand that every individual is unique, and so are their weight loss needs. 
              Our personalized approach ensures that your journey is tailored to you, maximizing your chances of success.`,
        },
        {
            id: 7,
            topic: 'Proven results',
            description: `KOZA Aesthetic Care has a track record of helping countless clients achieve their weight loss goals. 
              Our success stories speak volumes about the effectiveness of our programs.`,
        },
        {
            id: 8,
            topic: 'Client-centred care',
            description: `We prioritize your comfort, convenience and satisfaction. Our friendly and supportive staff is always 
              ready to assist you throughout your journey with us.`,
        },
        {
            id: 9,
            topic: 'Affordable pricing',
            description: `We believe that everyone deserves access to effective weight loss programs. 
              Our pricing is competitive, ensuring that you receive exceptional value for your investment in your health.`,
        },
        {
            id: 10,
            topic: 'Long-term health benefits',
            description: `KOZA Aesthetic Care is not just about losing weight; it's about improving your overall health 
              and quality of life. By choosing us, you're investing in a healthier future.`,
        },
    ]
    return (
        <>
            <div className="mr-8 mt-[6rem]">
                <NumericBullets
                    title="Why Choose KOZA Aesthetic Care Over Other Brands?"
                    img={chooseKoza1}
                    description={countingArr1}
                    isReversed="true"
                    hideSubtitle
                />
            </div>
            <div className="mt-2 sm:mt-[2rem]">
                <NumericBullets
                    hideTitleDesc
                    hideSubtitle
                    img={chooseKoza2}
                    description={countingArr2}
                />
            </div>
            <div className="mx-0 my-16 px-2 md:px-[7rem] py-8 text-[#fff] text-center bg-gradient-to-r from-[#632A3E] to-[#370541]">
                <p className="font-normal text-[18px] sm:text-[20px] md:text-[24px]">
                    Ready to start your journey towards a healthier, happier
                    you? Contact KOZA Aesthetic Care today and discover the
                    difference our holistic approach can make in your weight
                    loss journey. Your transformation begins here.
                </p>
            </div>
        </>
    )
}

export default WhyChooseKoza
