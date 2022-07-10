import React, { useState } from 'react'
import FaqsHeader from '../components/Faqs/FaqsHeader'
import { FaqsData } from '../mocks/FaqsData'
import { NavLinksData } from '../mocks/NavLinksData'
import TopNavbar from '../shared/TopNavbar'
import FaqsBody from '../components/Faqs/FaqsBody'
import Footer from '../shared/Footer'
import { FooterLinksData } from '../mocks/FooterLinksData'
import CookiesBanner from '../shared/CookiesBanner'
import AuthFormModal from '../components/Auth/AuthFormModal'

const Faqs = () => {
    const [cookiesOpen, setCookiesOpen] = useState(true)
    const [authModalOpen, setAuthModalOpen] = useState(false)

    const handleCookiesClose = () => {
        setCookiesOpen(false)
    }

    const handleAuthModalClose = () => {
        setAuthModalOpen(false)
    }

    const handleAuthModalOpen = () => {
        setAuthModalOpen(true)
    }

    return (
        <div>
            <TopNavbar
                links={NavLinksData.links}
                handleAuthModalOpen={handleAuthModalOpen}
            />
            <FaqsHeader categories={FaqsData.categories} />
            <FaqsBody />
            <Footer data={FooterLinksData.data}></Footer>
            <CookiesBanner opened={cookiesOpen} onClose={handleCookiesClose} />
            <AuthFormModal
                opened={authModalOpen}
                onClose={handleAuthModalClose}
            />
        </div>
    )
}

export default Faqs
