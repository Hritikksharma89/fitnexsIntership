/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit', //just in time so that it will take arbitrary values of tailwind css.
    purge: ['./*.html', './src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    // content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                aboutbg: "url('assets/About us/MicrosoftTeams-image (4).png')",
                FaceBg: "url('assets/skinImg/faceBg.png')",
                SkinExpBG: "url('assets/skinImg/SkinExpBG.png')",
                testimonialbg: "url('assets/testimonialTexture.png')",
                propelyBg: "url('assets/Acne-scar/images/bgProperly.png')",
                ProVampFac: 'url(assets/skinImg/ProVampFac.png)',
                bgCareServies: 'url(assets/new-landing/bgcareservices.png)',
                testBG: 'url(assets/homeImg/testimonialBG.png)',
                cosmeticDentistBG:
                    'url(assets/cosmeticDentist/cosmeticDentist.png)',
                cosmeticSurgeryBG:
                    'url(assets/cosmeticSurgery/cosmeticSurgery.png)',
                figureChange:
                    'url(assets/weightMangement/figureCorrectionImg.png)',
                cyroCool: 'url(assets/weightMangement/cyrobgImg.png)',
                WeightLossGainBG:
                    'url(assets/weightMangement/weightLossGainBG.png)',
                BodyCompositionAnalysisBG:
                    'url(assets/weightMangement/BodyCompositionAnalysisBG.png)',
                WhatWeDoBG: 'url(assets/weightMangement/whatWeDoBG.png)',

                // Important treatmentBG
                treatmentBG: 'url(assets/skinImg/treatmentBG.png)',
                Antiageingbg:
                    'url(assets/skinImg/antiageingimg/antiagingpic.png)',
                whatAreDarkCircle:
                    'url(assets/darkCircle/WhatAreDarkCircleBg .png)',

                MicroneedlingPrpBg:
                    'url(assets/Acne-scar/images/MicroneedingPrpBg.png)',
            },
        },
        colors: {
            primary: '#EDC08B',
            secondary: '#FFCF97',
            tertiary: '#000000',
            quaternary: '#ECAD62',
            transparentBG: '#00000000',
            paragraphBG: '#BD79E7',
            white: '#FFFFFF',
        },
    },
}
