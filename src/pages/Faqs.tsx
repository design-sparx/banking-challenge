import React, { useState } from 'react'
import FaqsHeader from '../components/Faqs/FaqsHeader'
import { FaqsData } from '../mocks/FaqsData'
import { NavLinksData } from '../mocks/NavLinksData'
import TopNavbar from '../shared/TopNavbar'
import FaqsBody from '../components/Faqs/FaqsBody'
import Footer from './Footer'
import { FooterLinksData } from '../mocks/FooterLinksData'
import CookiesBanner from '../shared/CookiesBanner'

const Faqs = () => {
    const [cookiesOpen, setCookiesOpen] = useState(true)

    const handleClose = () => {
        setCookiesOpen(false)
    }

    return (
        <div>
            <TopNavbar links={NavLinksData.links} />
            <FaqsHeader categories={FaqsData.categories} />
            <FaqsBody />
            <Footer data={FooterLinksData.data}></Footer>
            <CookiesBanner opened={cookiesOpen} onClose={handleClose} />
        </div>
    )
}

export default Faqs
