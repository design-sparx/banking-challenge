import React, { useState } from 'react'
import Hero from '../components/Landing/Hero'
import { NavLinksData } from '../mocks/NavLinksData'
import TopNavbar from '../shared/TopNavbar'
import GetStarted from '../components/Landing/GetStarted'
import { GetStartedData } from '../mocks/GetStartedData'
import Features from '../components/Landing/Features'
import { FeaturesData } from '../mocks/FeaturesData'
import MobileDownload from '../components/Landing/MobileDownload'
import { Divider } from '@mantine/core'
import Footer from './Footer'
import { FooterLinksData } from '../mocks/FooterLinksData'
import CookiesBanner from '../shared/CookiesBanner'

const Landing = () => {
    const [cookiesOpen, setCookiesOpen] = useState(true)

    const handleClose = () => {
        setCookiesOpen(false)
    }

    return (
        <div>
            <TopNavbar links={NavLinksData.links} />
            <Hero />
            <GetStarted data={GetStartedData.data} />
            <Divider />
            <Features data={FeaturesData.data} />
            <Divider />
            <MobileDownload />
            <Footer data={FooterLinksData.data}></Footer>
            <CookiesBanner opened={cookiesOpen} onClose={handleClose} />
        </div>
    )
}

export default Landing
