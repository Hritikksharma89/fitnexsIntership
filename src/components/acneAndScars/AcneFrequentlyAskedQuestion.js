import React, { useState } from 'react'
import plus from '../../assets/plusIcon.svg'
import minus from '../../assets/minusIcon.svg'

const AskedQuestion = () => {
    const data = [
        {
            question: 'What is Acne? ',
            answer: '<div>Acne is the most common skin condition of all, the disease occurs when hair follicles become clogged with dead skin cells.</div> <br> <div>Acne refers to the pimples, blackheads and bumps which appear on skin because of a disturbance in the oil glands. Most acne is found on the face, the neck, back, chest and shoulders. Acne’s prevalence is the strongest in teenage years but it’s not exclusive to those years alone. Adults belonging to any age group can suffer from it because of various external or internal factors.</div><br><div>Acne is not a life-threatening condition, but it does come in way of people’s personal aesthetic satisfaction. It is a pretty common occurrence as study shows that around 80% of people in the world between the ages of 11 to 30 experience acne breakouts at some point in their lives. At KOZA Aesthetic care, we get to the root of the type of acne on a person’s face and create the best acne treatment.</div> ',
        },
        {
            question: 'Why does acne happen?',
            answer: '<div>There’s no particular answer as to why acne outbreaks occur. But after years of thorough research, the following reasons are what the experts came up with:</div><br><li>Increase of hormones in a teenager</li><br><li>Increase of hormones in a teenager</li><br><li>Increase of hormones in a teenager</li><br><li>Exposure to excessive pollution</li><br><li>Stress and Anxiety</li><br><li>Genetically transferred</li> <br> <li>Certain medicines consisting of substances like androgen hormones and lithium can cause acne as well.</li><br><li>Oily Skin</li><br> <div>Technically, when sebaceous glands (oil producing glands) are overactive in the follicles, these glands produce too much sebum or oil like substance which forms a plug mixed with dead skin cells leading to the blockage of follicle.</div><br> <div>Sometimes acne gets filled with bacteria making the surrounding skin appear red and sore.</div>',
        },
        {
            question:
                'How do I diagnose acne? When should I see a dermatologist for acne treatment? ',
            answer: '<div>Mild acne usually goes away in a short period of time with the help of conventional skin-care products available at the nearest stores. But when the acne stubbornly places itself on a person’s face for a long time, and the over-the-counter products are completely ineffective – that’s when a dermatologist needs to be consulted. </div> <br> <div>Usually, there are four grades of acne (based on its severity).</div><br><div>Usually, there are four grades of acne (based on its severity).</div><br><div>The first grade is the most moderate stage, and the fourth grade is the most severe. To differentiate between the grades of acne efficiently, a dermatologist should be responsible. </div> <br><div>It’s important to distinguish acne from acne look-a likes and then to devise a procedure to effectively cure it. KOZA Aesthetic Care skin experts provides one of the most effective acne treatment in Bangalore</div>',
        },
        {
            question:
                'Can acne be completely cured? Will my acne ever go away? ',
            answer: '<div> Acne is a skin condition which cannot be completely cured. But without treatment, its condition will only worsen further. Recent medicinal developments have opened the gates of treating acne effectively and diminishing its harsh effect on the skin. Even though it can’t cure acne completely, it stops the acne from increasing and leading to scars later on. </div><br> <div>Although there are instances in which, with proper medications and treatments, patients have been able to combat acne permanently.</div>',
        },
        {
            question: 'What acne treatments are best for me?',
            answer: '<div>Acne treatment is available for the following regions of the body:</div><br><li>Chin acne treatment </li><br><li>Back acne treatmen</li><br><li>Back acne treatmen</li><br><li>Cystic acne treatment</li><br><li>Cystic acne treatment </li>',
        },
        {
            question: 'What is the possible line of treatments?',
            answer: '<div>Acne in these regions can be treated in the following ways:</div><br><li>Topical Treatment– This includes the external application of creams, lotions and gels on the affected areas. They are usually inexpensive and effectively treat mild acne. It’s easy to get your hands on them at the nearest stores. Benzoyl peroxide, sulpha antibiotics, azelaic acid, retinoids, salicylic acid come under topical treatments. They limit and diminish the accumulation of bacteria within the acne and prevent further deterioration. Our Dermatologist will suggest basis the Acne condition. </li><br> <li>Oral Antibiotics  </li><br><li>Isotretinoin</li><br><li>Chemical Peels (Click to Read More)</li> ',
        },
        {
            question: 'Can my food cause acne breakouts? ',
            answer: '<div>Eating habits do reflect upon the skin, but that cannot be the only reason for which acne breakouts occur. Eating habits are accompanied by various other factors ranging from pollution, to hormones and etc.</div>',
        },
    ]

    const data2 = [
        {
            question: 'What are Acne Scars? How do people get Acne Scars?',
            answer: `<div>You think active acne is one of the most irritating dermatological conditions you could suffer through, until you're forced to deal with acne scars. We're not talking about the little dark or red marks that go away with time, exfoliation, and scar facing spot treatments. Instead, we're talking about atrophic scarring—aka indented scars that form below the upper layer of skin tissue as a result of severe acne that prevents the skin from being able to regenerate tissue correctly, leaving behind uneven texture in shapes known as ice-pick, rolling, and boxcar scars.</div><br><div>Acne like cysts or nodules which are considered to be “inflammatory acne”, lead to long-term scarring because they penetrate beneath the upper layer of the skin. </div><br> <div>Some individuals are more prone to acne scars compared to others because of picking/touching, ignoring acne treatment and also because of genetics. Our clinic is known to provide outstanding services regarding acne scar treatment in Gurgaon. The highly experienced dermatologists in our clinic do their best to diagnose and treat such blemishes.</div>`,
        },

        {
            question: 'Are there different types of acne scars?',
            answer: '<div>There are two main types of acne scars:</div><br><li>Depressed Acne Scars– These scars are deep-pitted are the most common kind of acne scars. They are caused by inflammatory acne. </li><br><p>Depressed scars can be further classified into the following three types:</p><br><li>Rolling Scars– They are broadened pits on the skin which have rounded edges. The texture is rough and is caused by severe damage beneath the surface of the skin. </li><br><li>Boxcar Scars– These are similar to rolling scars in terms of the depth of the depression but they are more defined and have strong edges. </li><br><li>Ice Pick Scars– These scars are not broad. They appear like tiny dot-like depressions, a little bigger than the size of our hair follicles, but covering it up is the most challenging task for dermatologists.</li><br><li>Raised Acne Scars– These scars are not as prevalent as depressed scars. They are much more prominent compared to depressed scars and require a tough treatment procedure. It usually looks like a small/big bump.</li><br><p>Raised Acne Scars– These scars are not as prevalent as depressed scars. They are much more prominent compared to depressed scars and require a tough treatment procedure. It usually looks like a small/big bump.</p><br><li>Keloid Scars– Because of the formation of excess collagen, extra scar tissues get formed and elevate the scar further on the surface. Collagen seems to build around the acne scar, making it grow in size.</li><li>Hypertrophic Scars– This is also caused in the presence of excess collagen, but its intensity is less severe than that of Keloid Scars. They are not as prominent as Keloids. It appears reddish in colour.</li>',
        },
        {
            question: 'What Acne Scar Treatment Options Are Available?',
            answer: '<div>Treatment is extremely important to prevent further deterioration of the existing acne scar. Ignorance of the skin blemishes often lead to the scars getting worse with passing time, as the depression or pits tend to get deeper. Our clinic offers fruitful acne scar removal treatment.</div><br><p>The common treatments for Acne Scars are as follows:</p><br><li>Microdermabrasion (Click to Read More) </li><br><li>Chemical Peels (Click to Read More) </li><br><li>DermaPen (Click to Read More) </li><br><li>Microneedling rejuvenating therapy (Click to Read More)</li><br><li>Dermal Fillers (Click to Read More) </li><br><li>How much does it cost to eradicate Acne Scars?</li><br><p>The cost of the treatment depends entirely on the intensity and severity of the acne scars. Even if the condition of the acne scar is severe, we make sure to devise a treatment taking into consideration the patient’s needs.</p>',
        },
    ]

    const [openIndex, setOpenIndex] = useState(-1)

    const handleAccordian = (index) => {
        if (openIndex === index) {
            setOpenIndex(-1)
        } else {
            setOpenIndex(index)
        }
    }
    const [openIndex2, setOpenIndex2] = useState(-1)

    const handleAccordian2 = (index) => {
        if (openIndex2 === index) {
            setOpenIndex2(-1)
        } else {
            setOpenIndex2(index)
        }
    }
    return (
        <>
            <div className=" bg-white py-2 md:py-10">
                <p className="text-center text-[40px] font-semibold">
                    Frequently asked questions
                </p>

                <div className="grid grid-cols-2 gap-20 w-[90%] m-auto mt-8">
                    <div>
                        <p className="font-semibold text-[24px]">Acne</p>
                        <div>
                            {data?.map(({ question, answer }, index) => {
                                const isopen = openIndex === index
                                return (
                                    <div
                                        key={index}
                                        className="border-b border-[#D3D3D3] py-8"
                                    >
                                        <div
                                            onClick={() =>
                                                handleAccordian(index)
                                            }
                                            className="flex justify-between"
                                        >
                                            <p>{question} </p>
                                            <div>
                                                {isopen ? (
                                                    <img
                                                        src={minus}
                                                        alt="minus"
                                                        className=""
                                                    />
                                                ) : (
                                                    <img
                                                        src={plus}
                                                        alt="plusIcon"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                        {isopen && (
                                            <div
                                                className="mt-2"
                                                dangerouslySetInnerHTML={{
                                                    __html: answer,
                                                }}
                                            />
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-[24px]">Acne Scar</p>
                        <div>
                            {data2?.map(({ question, answer }, index) => {
                                const isopen2 = openIndex2 === index
                                return (
                                    <div
                                        key={index}
                                        className="border-b border-[#D3D3D3] py-8"
                                    >
                                        <div
                                            onClick={() =>
                                                handleAccordian2(index)
                                            }
                                            className="flex justify-between  "
                                        >
                                            <p>{question} </p>
                                            <div>
                                                {isopen2 ? (
                                                    <img
                                                        src={minus}
                                                        alt="minus"
                                                        className=""
                                                    />
                                                ) : (
                                                    <img
                                                        src={plus}
                                                        alt="plusIcon"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                        {isopen2 && (
                                            <div
                                                className="mt-2"
                                                dangerouslySetInnerHTML={{
                                                    __html: answer,
                                                }}
                                            />
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AskedQuestion
