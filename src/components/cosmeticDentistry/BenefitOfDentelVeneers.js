import React from 'react'
import ImageScale from '../common/reverseBolierPlate'
import blueLady from '../../assets/cosmeticDentist/blueLady.svg'
import blueLadyBg from '../../assets/cosmeticDentist/blueLadyBg.svg'
import yellowLadyBg from '../../assets/cosmeticDentist/yellowLadyBg.png'
import yellowLady from '../../assets/cosmeticDentist/yellowLady.png'
import smilingMan from '../../assets/cosmeticDentist/smilingMan.png'
import smilingManBg from '../../assets/cosmeticDentist/smilingManBg.png'
import porcelainGirl from '../../assets/cosmeticDentist/porcelainGirls.png'
import porcelainGirlBg from '../../assets/cosmeticDentist/porcelainGirlBg.png'
import bracegirlimg from '../../assets/cosmeticDentist/bracesGirl.png'
import bracegirlimgBg from '../../assets/cosmeticDentist/bracesGirlsBg.png'

const BenefitOfDentelVeneers = () => {
    let data = [
        {
            title: 'Composite veneers',
            text: `Composite veneers offer several advantages, especially in terms of cost. On average, they are about half the price of porcelain veneers. This cost-effectiveness can be a crucial factor, particularly because most veneer treatments are not covered by insurance, leaving you to cover the expenses out-of-pocket. This affordability can significantly impact your smile makeover budget.`,
            subtitle: `“Affordable and convenient”`,
            front: blueLady,
            bgimg: blueLadyBg,
            isReversed: true,
        },
        {
            text: '<div>Another notable advantage of composite veneers is their efficiency. Unlike porcelain veneers, which are crafted in an offsite lab and require multiple visits, composite veneers can often be fabricated on the same day as your appointment.</div> <div>This same-day treatment, known as direct composite veneers or composite bonding, involves the skilled application of tooth-colored resin directly to your teeth.</div><div>The dentist sculpts and shapes the resin as needed, hardening it with a high-intensity light. This process is typically quicker and less invasive than porcelain veneer placement.</div>',
            front: yellowLady,
            bgimg: yellowLadyBg,
        },
        {
            text: '<div>Perhaps the most compelling advantage of composite veneers is their reversibility. Unlike porcelain, which necessitates reshaping of your natural teeth to accommodate the veneer, composite veneers require minimal prep work.</div><div>This means that your natural teeth are not permanently altered to an extent where the composite material cannot be removed and replaced if necessary, providing you with flexibility. </div>',
            front: smilingMan,
            bgimg: smilingManBg,
            isReversed: true,
        },
        {
            title: 'Porcelain veneers',
            subtitle: `“Unmatched durability”`,
            text: "<div>While composite veneers have their merits, porcelain veneers excel in one critical area: durability.</div> <div> Porcelain is an exceptionally strong material, even when compared to modern resin improvements.</div> <div>Well-maintained porcelain veneers can last between 10 to 15 years, significantly longer than the five- to seven-year average lifespan of composites. </div> <div>When considering veneer options, it's essential to weigh this durability against the cost difference. Porcelain veneers may cost more upfront, but their extended lifespan often makes them a better long-term investment.</div>",
            front: porcelainGirl,
            bgimg: porcelainGirlBg,
        },
        {
            text: '<div>In conclusion, the choice between composite and porcelain veneers depends on your unique priorities. If cost, convenience, and reversibility are paramount, composite veneers offer an appealing solution. </div> <div> On the other hand, if you prioritize long-lasting durability and are willing to invest more upfront, porcelain veneers may be the better choice. </div> <div>Ultimately, both options can provide you with a captivating smile makeover, and a consultation with Koza’s experienced cosmetic dentist can help you determine which material aligns best with your needs and goals.</div> ',
            front: bracegirlimg,
            bgimg: bracegirlimgBg,
            isReversed: true,
        },
    ]

    return (
        <div>
            <ImageScale heading='Benefits of Dental Veneers' contentMatter={data} />
        </div>
    )
}

export default BenefitOfDentelVeneers
