import React from 'react'
import ImageScale from '../common/reverseBolierPlate'
import image from '../../assets/hair/scalpPurify.png'
import bgimage from '../../assets/hair/scalpPurifyBg.png'
import ButtonGradient from '../common/buttonGradient'

const ScalpPurify = () => {
    let data = [
        {
            title: 'Koza aesthetic care advanced scalp purify and dandruff removal therapy',
            largerTitle:true,
            text: `Developed with new generation scalp clearing actives to reduce dandruff causing microbes & control excess scalp oil, this advanced therapy thoroughly cleanses the scalp using anti-fungal actives to remove scalp flakes and relieve itching. The service follows a unique 3 staged action  cleanse and revive the scalp, nourish and smoothen the dandruff prone hair and lastly reinforce and protect the hair shaft.`,
            front: image,
            bgimg: bgimage,
            isReversed: true,
        },
    ]
    return (
        <>
            <div>
                <div className='md:px-20'>
                    <ImageScale contentMatter={data} />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-center text-[28px] md:text-[34px] lg:text-[40px] leading-[35px] py-2 md:leading-[50px] font-semibold">
                        Note
                    </p>
                    <p className=" text-center py-3 w-[98%] sm:w-[95%] lg:w-[83%] m-auto text-[18px] md:text-[24px] ">
                        While there are various products and shampoos in the
                        market which claim to cure dandruff, these products may
                        or may not work for every individual. These products
                        contain generic ingredients which may not be suitable
                        for someone's specific condition. It may even adversely
                        affect a person, leading to hair fall or making the hair
                        dry and frizzy. It is recommended to use a dermatologist
                        prescribed shampoo only. Appropriate shampoo according
                        to the scalp type is prescribed by our experts to keep
                        dandruff problems under check.
                    </p>
                    <div className="flex justify-center py-3 ">
                        <ButtonGradient actionRequired="Book Appointment Now" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScalpPurify
