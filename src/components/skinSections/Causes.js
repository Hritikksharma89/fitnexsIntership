import React from 'react'
import NumericBullets from '../common/NumericBullets'
import CausesImg from '../../assets/skinImg/CausesImg.png'
const Causes = () => {
    const pointsArray = [
        { id: 1, description: 'Sun exposure' },
        { id: 2, description: 'Hormonal changes' },
        { id: 3, description: 'Skin conditions' },
        { id: 4, description: 'Age-related factors' },
        { id: 5, description: 'Medications' },
        { id: 6, description: 'Skin trauma or injury' },
        { id: 7, description: 'Hormone disorders' },
        { id: 8, description: 'Nutritional deficiencies' },
    ];
    return (
        <div>
            <div className="mt-10">
                <NumericBullets
                    img={CausesImg}
                    title="Causes of uneven skin tone & pigmentation"
                    topicNotNeeded
                    description={pointsArray}
                />
            </div>
        </div>
    )
}
export default Causes;
