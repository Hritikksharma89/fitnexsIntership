import React from 'react'
import ImageScale from '../../common/reverseBolierPlate'
import Ageing from '../../../assets/skinImg/antiageingimg/Ageing.png'
import bgAgeing from '../../../assets/skinImg/antiageingimg/bgAgeing.png'
import reversal from '../../../assets/skinImg/antiageingimg/front02.png'
import bgreversal from '../../../assets/skinImg/antiageingimg/bg02.png'
import Facials from '../../../assets/skinImg/antiageingimg/front03.png'
import bgFacials from '../../../assets/skinImg/antiageingimg/bg03.png'
import Muscle from '../../../assets/skinImg/antiageingimg/front04.png'
import bgMuscle from '../../../assets/skinImg/antiageingimg/bg04.png'
import TREATMENT from '../../../assets/skinImg/antiageingimg/lastimg.png'

const SkinAgeing = () => {
    const contentMatter = [
        {
            sectionHeading: 'Anti ageing facial',
            title: 'What is it?',
            text: 'Ageing process is slowed down with anti-ageing facials which use products and techniques designed to slow the aging process, brighten the skin, and reduce wrinkles. If you want a more youthful complexion, you can select from a variety of anti-aging facial treatments ranging from vitamin-infused serums to light therapy facials to microdermabrasion. ',
            front: Ageing,
            bgimg: bgAgeing,
        },
    ];
    const contentMatterTwo = [
        {
            title: 'Age reversal RF therapy',
            text: '<div>Age reversal takes down years from your face. It helps you softens wrinkles, lift your skin, and improve lines near your nose and lips. We include your under-eye area to give a fresh and natural look to your face.</div><div>Furthermore, we plump your face by highlighting your cheek bones and create natural blush line to give you a youthful face cut.</div><div>We lift the neck area and rejuvenate wrinkles on hand to completely re-engineer your look, which leads to give you a bolder and younger overall appearance.</div>',
            front: reversal,
            bgimg: bgreversal,
            isReversed: true,
        },
        {
            title: 'Age arrest facials',
            text: '<div>This includes medi facials, photo facials and medic therapies that help in maintaining collagen and moisture of skin to prevent further ageing. This ensures that even if your biological age increases annually, your age with respect to your appearance won’t!</div><div>It keeps in check the fine lines, wrinkles and dullness of skin. These facials can be taken on a 30, 45 or 60 day intervals as determined by our dermatologist according to your skin type.</div>',
            front: Facials,
            bgimg: bgFacials,
        },
        {
            sectionHeading:  'Muscle Relaxers',
            title: 'What it is?',
            text: '<div>Also known as Botulinum toxin type A, is formed from the bacteria which cause botulism. The botulinum toxin causes a reduction in muscle activity temporarily by blocking the nerve activity in the muscles.</div><div>It is known to be used for the treatment of cervical dystonia and muscle spasms in the upper and lower limbs as well. It is also used in treating severe underarm sweating.</div><div>Certain eye conditions which have been caused due to nerve disorders are also treated using this.</div><div>Overactive bladder and incontinence caused due to nerve disorders like spinal cord injury etc. are also treated using it. It is also used in cosmetic procedures to temporarily reduce facial wrinkles.</div>',
            front: Muscle,
            bgimg: bgMuscle,
            isReversed: true,
        },
    ]

    return (
        <>
            <div>
                <ImageScale contentMatter={contentMatter} />
                <ImageScale heading='What’s at koza aesthetic care?' matter='We provide 2 kinds of treatments' contentMatter={contentMatterTwo} />
                <div className="grid sm:grid-cols-2 my-3 gap-y-5">
                    <div className="flex justify-stretch">
                        <img
                            src={TREATMENT}
                            alt="imh"
                            className="object-contain sm:px-0 px-3"
                        />
                    </div>
                    <div className="flex gap-x-2 p-2 h-[100%] justify-center items-center">
                        <div className="px-6  ">
                            <p className="text-[20px] lg:text-[24px] font-semibold my-[1px] lg:my-3">
                                Ideal candidate for treatment
                            </p>

                            <p className="text-[15px] lg:text-[18px] my-[1px] lg:my-2 w-[95%]">
                                The ideal candidate for the treatment has
                                to be in excellent physical health and above 18
                                years of age. The degree of effectiveness of the
                                treatment may vary from one patient to another.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkinAgeing
