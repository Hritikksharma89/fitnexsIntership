import React from 'react'
import Benifts from '../../../assets/weightMangement/beniftsImg.png'
import Do from '../../common/Do'

const Benfits = () => {
    const data = [
        {
            title: 'Cellulite reduction',
            description:'NSLS effectively targets and reduces cellulite, giving you smoother skin.',
        },
        {
            title: 'Circumference reduction',
            description:'Witness a significant reduction in body circumference, achieving the desired shape.',
        },
        {
            title: 'Body shaping',
            description:'Reshape your body and regain your confidence with our advanced technology.',
        },
        {
            title: 'Collagen renewal',
            description:'The treatment promotes collagen renewal, improving skin elasticity and texture.',
        },
        {
            title: 'Skin tightening',
            description:'Enjoy firmer and tighter skin, making you look and feel rejuvenated.',
        },
    ]
    return (
        <div>
            <Do
                backgroundImage={Benifts}
                mainTitle='Benefits of NSLS'
                hideMainDescription
                data={data}
                itemGap="gap-y-8"
                buttonNotNeeded
            />
        </div>
    )
}

export default Benfits
