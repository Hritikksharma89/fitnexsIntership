import React from 'react'
import ImageScale from '../../common/reverseBolierPlate'
import bgDarkcricle from '../../../assets/skinImg/antiageingimg/bgcricle.png'
import frontcricle from '../../../assets/skinImg/antiageingimg/frontcricle.png'
import bgcheek from '../../../assets/skinImg/antiageingimg/bgcheek.png'
import frontcheek from '../../../assets/skinImg/antiageingimg/frontcheek.png'
import bglip from '../../../assets/skinImg/antiageingimg/bglip.png'
import lipfront from '../../../assets/skinImg/antiageingimg/frontlip.png'
import bgnasol from '../../../assets/skinImg/antiageingimg/bgnosole.png'
import nasolfront from '../../../assets/skinImg/antiageingimg/frontnosole.png'
import bgchin from '../../../assets/skinImg/antiageingimg/bgchin.png'
import chinfront from '../../../assets/skinImg/antiageingimg/frontchin.png'
import bgnose from '../../../assets/skinImg/antiageingimg/bgnose.png'
import nosefront from '../../../assets/skinImg/antiageingimg/frontnose.png'
const BotoxBag = () => {
    const contentMatter = [
        {
            title: 'Undereye bag and Dark circle',
            text: '<div>Most Asian men and women develop a hollowness under the eyes which gives an appearance of dark circles.</div><div>This may give a tired and dull appearance to the face even after a complete 8 hours of sleep. This can start as early as the age of just 18 years.</div><div>Reasons can be due to heredity, familial, improper sleep, stress, high power spectacles, eye strain and long-time viewing of electronic devices, weight loss, smoking, etc.</div><div>This can be corrected by hydrating the under-eye area by Hyaluronic acid filler and gives instant and gratifying results. The face looks naturally fresh.</div> ',
            front: frontcricle,
            bgimg: bgDarkcricle,
        },
        {
            title: 'Cheek Contouring Face Lift',
            text: 'As age progresses elasticity of skin decreases causing sagging on the skin and the cheeks becomes flat. Filler is used to achieve that fuller cheek and enhance the cheek contour. It gives an instant lift to the face and the face looks youthful again.',
            front: frontcheek,
            bgimg: bgcheek,
            isReversed: true,
        },
        {
            title: ' Lip Augmentation',
            text: 'Fuller lips are in trend! Whether it is the cupid’s bow or the lip margins that are your weakness, there is no reason left to stay away from the perfect lips. Fillers are given to get fuller lips along with proper well-defined natural looking lips in perfect shape that suits the individual’s face structure and features.',
            front: lipfront,
            bgimg: bglip,
        },
        {
            title: 'Nasolabial fold and Marionette lines',
            text: '<div>Sagging of skin with age and specially after childbirth gives rise to deep lines around the nose and mouth.</div><div>These lines around the side of the nose to the corner of lips and the lines extending from the corner of the lips to deep down the chin give older and hard look to the face.</div><div>With filler one can get rid of these lines and convert a sad looking face to a balanced and naturally contoured face with lifted face and subtle contours.</div>',
            front: nasolfront,
            bgimg: bgnasol,
            isReversed: true,
        },
        {
            title: 'Chin and Jawline shaping',
            text: 'A perfect jawline and an elongated chin are the perks of a beautiful face. An oval contoured face which is considered the most beautiful for women, or a square masculine jaw for the men, it can all be achieved within an hour! Filler can help to get the desired chin and jaw without any surgical procedure.',
            front: chinfront,
            bgimg: bgchin,
        },
        {
            title: 'Temples, Nose and Forehead shaping',
            text: '<div>Forehead reshaping is done to remove glabellar lines (the lines between eyebrows). Fillers fill up those wrinkles and fine lines of the forehead to give a fuller look.</div><div>Nose reshaping can also be done with filler to get the desired shape of nose. Temples are the hollow on the sides of forehead that occur with ageing or genetics.</div><div>The desired fullness and convexity of the forehead can be achieved with a little volume of filler.</div>',
            front: nosefront,
            bgimg: bgnose,
            isReversed: true,
        },
    ]
    return (
        <>
            <div>
                <ImageScale contentMatter={contentMatter} />
            </div>
        </>
    )
}

export default BotoxBag
