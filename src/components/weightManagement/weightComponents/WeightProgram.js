import React from 'react'
import PicCatalog from '../../common/PicCatalog'
import weightProgramImg from '../../../assets/weightMangement/weightProgramImg.png'

const WeightProgram = () => {
    return (
        <div className=" py-4 md:py-10">
            <PicCatalog
                title="KOZA aesthetic care weight maintenance program"
                description="KOZA Aesthetic Care provides an extensive support post weight loss program to its clients with Nutritional Guidance to maintain the results. "
                img={weightProgramImg}
                secondTitleNotNeeded
            />
        </div>
    )
}

export default WeightProgram
