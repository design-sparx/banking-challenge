import React, { useState } from 'react'
import ContactForm from '../components/ContactUs/ContactForm'
import { NavLinksData } from '../mocks/NavLinksData'
import TopNavbar from '../shared/TopNavbar'
import Footer from './Footer'
import { FooterLinksData } from '../mocks/FooterLinksData'
import CookiesBanner from '../shared/CookiesBanner'

const ContactUs = () => {
    const [cookiesOpen, setCookiesOpen] = useState(true)

    const handleClose = () => {
        setCookiesOpen(false)
    }
    return (
        <div>
            <TopNavbar links={NavLinksData.links} />
            <ContactForm />
            <Footer data={FooterLinksData.data}></Footer>
            <CookiesBanner opened={cookiesOpen} onClose={handleClose} />
        </div>
    )
}

export default ContactUs
