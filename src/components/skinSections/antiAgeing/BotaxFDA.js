import React from 'react'
import NumericBullets from '../../common/NumericBullets'
import botoximg from '../../../assets/skinImg/antiageingimg/botoximg.png'

const BotaxFDA = () => {
    const countingArr = [
        {
            id: 1,
            topic: 'Non-surgical solution for lines & wrinkles',
            description:
                'Many women want to experience flawless skin without the aid of surgical enhancement. Invasive in nature, the treatment can help to treat wrinkles and fine lines on your forehead, neck, and around the mouth.',
        },
        {
            id: 2,
            topic: 'Decreases excessive sweating',
            description:
                'Many men and women suffer from excessive under arm sweating which causes a lot of embarrassment. A simple treatment using can help to treat this and minimize the regularity of this problem. ',
        },
        {
            id: 3,
            topic: 'May reduce migraines',
            description:
                'Few patients have reported a decrease in the in their migraine headaches. This then can be beneficial for those who suffer from chronic headaches. ',
        },
    ]
  return (
    <>
        <NumericBullets 
            img={botoximg}
            description={countingArr}
            titleDescription='Benefits of Treatment' boldLargeDescription
            subtitle="Due to its various benefits, many men and women opt for the treatment to improve their facial aesthetics. Here are a few of its benefits"
        />
    </>
  )
}
export default BotaxFDA