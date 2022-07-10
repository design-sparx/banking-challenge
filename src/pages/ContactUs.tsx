import React, { useState } from 'react'
import ContactForm from '../components/ContactUs/ContactForm'
import { NavLinksData } from '../mocks/NavLinksData'
import TopNavbar from '../shared/TopNavbar'
import Footer from '../shared/Footer'
import { FooterLinksData } from '../mocks/FooterLinksData'
import CookiesBanner from '../shared/CookiesBanner'
import AuthFormModal from '../components/Auth/AuthFormModal'
import { Helmet } from 'react-helmet'

const ContactUs = () => {
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
            <Helmet>
                <title>Netabank | Contact</title>
            </Helmet>
            <TopNavbar
                links={NavLinksData.links}
                handleAuthModalOpen={handleAuthModalOpen}
            />
            <ContactForm />
            <Footer data={FooterLinksData.data}></Footer>
            <CookiesBanner opened={cookiesOpen} onClose={handleCookiesClose} />
            <AuthFormModal
                opened={authModalOpen}
                onClose={handleAuthModalClose}
            />
        </div>
    )
}

export default ContactUs
