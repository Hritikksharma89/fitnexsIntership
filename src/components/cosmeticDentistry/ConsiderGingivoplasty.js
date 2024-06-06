import React from 'react'
import image from '../../assets/cosmeticDentist/considerGingivoplasty.png'
import BulletsOnTextCard from '../common/BulletOnTextCard'

const ConsiderGingivoplasty = () => {
        
    let description = [
        {
            id: '1',
            topic: 'Have irregular gumlines',
            description:
                'If you have an uneven or asymmetrical gumline that affects the aesthetics of your smile, gingivoplasty can create a more balanced and pleasing appearance.',
        },
        {
            id: '2',
            topic: 'Suffer from a "Gummy Smile"',
            description:
                'Excessive gum tissue that is visible when you smile can create a "gummy smile." Gingivoplasty can reduce the amount of exposed gum tissue, achieving a more proportional and confident smile.',
        },
        {
            id: '3',
            topic: 'Experience gum-related health issues',
            description:
                'Individuals with gum-related health concerns, such as gum infections or difficulty maintaining proper oral hygiene due to irregular gum tissue, may find relief and improved oral health through gingivoplasty.',
        },
        {
            id: '4',
            topic: 'Seek cosmetic enhancements',
            description:
                'Those looking to enhance the aesthetics of their smile for personal or professional reasons can benefit from this procedure, as it can be a valuable component of a smile makeover.',
        },
    ]
    let img = image
    return (
        <div className='my-20'>
            <div className='px-4 md:pl-20 md:pr-24'>
                <BulletsOnTextCard
                    title='Who should consider gingivoplasty?'
                    titleDescription='Gingivoplasty is a procedure that can benefit individuals who'
                    description={description}
                    img={img}
                    isReversed={true}
                />
            </div>
            <div className="bg-gradient-to-r from-[#632A3E] to-[#370541] text-center text-[#fff] mt-10 py-8 px-16">
                <p className='text-[18px] md:text-[1.5rem] md:leading-[36px] font-normal'>
                    In summary, gingivoplasty is a versatile procedure that offers
                    both aesthetic and oral health benefits. Whether you have
                    genetic, traumatic, or aesthetic concerns related to your gum
                    tissue, gingivoplasty can help you achieve a more balanced and
                    beautiful smile. To explore whether this procedure is suitable
                    for your unique needs, consult with Koza’s qualified dental
                    professional who can assess your condition and discuss a
                    personalized treatment plan tailored to your goals and
                    preferences.
                </p>
            </div>
        </div>
    )
}

export default ConsiderGingivoplasty
