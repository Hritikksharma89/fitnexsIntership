import React from 'react'
import NumericBullets from '../common/NumericBullets'
import image from '../../assets/Acne-scar/images/aboutThis.png'

const WhoShouldTakeThis = () => {
    let description = [
        {
            id: '1',
            description:
                'For Skin Brightening & Pigmentation, rejuvenating therapy is combined with main line of treatments',
        },
        {
            id: '2',
            description:
                'For Acne Scar Reduction, rejuvenating therapy can be combined with Micro needling and Laser to enhance results',
        },
        {
            id: '3',
            description:
                'rejuvenating therapy can be used as Anti-Ageing treatments or as a maintenance therapy.',
        },
        {
            id: '4',
            description: 'rejuvenating therapy helps in maintaining Skin Health',
        },
        {
            id: '5',
            description:
                'rejuvenating therapy gives good results when combined with Eye Peels for Dark Circles',
        },
        {
            id: '6',
            description:
                'For Hair Fall & Hair regrowth rejuvenating therapy is combined with Hair Meso Therapies and Hair Booster Therapies',
        },
        {
            id: '7',
            description:
                'Post Hair Transplant, rejuvenating therapy helps in boosting Hair Regrowth',
        },
    ]

    return (
        <>
            <div>
                <div className="py-2 md:py-5 bg-white">
                    <div className="mt-8">
                        <NumericBullets
                            description={description}
                            img={image}
                            title="Who should take this?"
                            hideTitleDesc
                            topicNotNeeded
                            hideSubtitle
                        />
                    </div>
                    <div className="bg-gradient-to-r from-[#602639] from-2.3% via-[#7C3057] via-72.44% to-[#39063F] to-97.51% py-12">
                        <p className="w-[75%] m-auto text-[24px] text-center text-[#FFFFFF] py-6">
                            The addition of rejuvenating therapy to micro needling may speed up
                            the healing process and stimulate skin renewal,
                            potentially producing better results than micro
                            needling alone.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhoShouldTakeThis
