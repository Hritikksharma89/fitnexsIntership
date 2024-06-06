import React from 'react'
import QFacial from '../../assets/QFacial.png'
import QFacialBenefits from '../../assets/QFacialBenefits.png'
import VampireFacial from '../../assets/skinImg/VampFac.png'
import PicCatalog from '../common/PicCatalog'
import NumericBullets from '../common/NumericBullets'

const QVampire = () => {
    const countingArr = [
        {
            id: 1,
            description:
                'It removes acne scars and heals the tissues permanently to give you a smooth looking face',
        },
        {
            id: 2,
            description:
                'It boosts the self-esteem and gives you a younger looking skin',
        },
        {
            id: 3,
            description:
                'It treats the facial pigmentation and removes the discoloration',
        },
        {
            id: 4,
            description:
                ' It eliminates the dead skin cells and wipes away the blemishes and uneven skin tone',
        },
        {
            id: 5,
            description:
                'It thoroughly cleanses the skin and rejuvenates from within the tissues',
        },
        {
            id: 6,
            description:
                'It ensures to provide minimal side effects to the skin',
        },
        {
            id: 7,
            description:
                'It decreases the unwanted hair growth and remove them permanently as well',
        },
        {
            id: 8,
            description: 'It is used as a tattoo removal treatment as well',
        },
    ]
    return (
        <>
            {/*first section*/}
            <div className=" py-5 ">
                <div className=" py-2 md:py-5">
                    <PicCatalog
                        title="Q switch laser"
                        img={QFacial}
                        secondTitleNotNeeded
                        description="Treatment is an effective facial treatment that removes dark spots,
            freckles and tattoos from the skin. It rejuvenates the skin and
            enhances it from deep within the layers. Giving you a naturally
            glowing skin, the treatment is recommended by specialists all around
            the world for patients having wrinkled skin."
                    />
                </div>

                {/* second section*/}
                <div className="pr-20 py-2 md:py-5">
                    <NumericBullets
                        title="Benefits of Q-switch laser treatment"
                        subtitle="Q-Switch laser tighten the skin and remove the sagging face. It heals the wrinkles and removes the dark spots."
                        topicNotNeeded
                        hideTitleDesc
                        img={QFacialBenefits}
                        description={countingArr}
                        isReversed="true"
                    />
                </div>

                {/* third section*/}
                <div className=" py-2 md:py-5">
                    <PicCatalog
                        title="What is vampire facial?"
                        secondTitleNotNeeded
                        img={VampireFacial}
                        description="A vampire Facial is actually a form of rejuvenating therapy that was developed to
                        treat age-related skin issues, as well as hyperpigmentation and
                        scarring. rejuvenating therapy stands for Platelet Rich Plasma and was first seen
                        as a treatment for pain, arthritis and other injuries in the body.
                        The procedure used platelets from the patient’s own blood and
                        reinjected them into the concern area where there was damaged
                        tissue."
                        isReversed="false"
                    />
                </div>
            </div>
        </>
    )
}

export default QVampire
