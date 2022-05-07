import React from 'react'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import Pricing from '../components/Pricing'
import SectionThree from '../components/SectionThree'
import SectionTwo from '../components/SectionTwo'

const Homepage = () => {
    // const feautures = useRef(null)
    // const feautureClick = () => feautures.current.scrollIntoView();
    //feautureClick={feautureClick}
    //refProp={feautures}
    return (
        <div>
            <Header  />
            <MainSection />
            <SectionTwo />
            <SectionThree  />
            <Pricing />
            <Faq />
            <Footer />
        </div>
    )
}

export default Homepage