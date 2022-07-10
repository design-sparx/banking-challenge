import React, { useState } from 'react'
import Hero from '../components/Landing/Hero'
import { NavLinksData } from '../mocks/NavLinksData'
import TopNavbar from '../shared/TopNavbar'
import GetStarted from '../components/Landing/GetStarted'
import { GetStartedData } from '../mocks/GetStartedData'
import Features from '../components/Landing/Features'
import { FeaturesData } from '../mocks/FeaturesData'
import MobileDownload from '../components/Landing/MobileDownload'
import { Affix, Button, Divider, Transition } from '@mantine/core'
import Footer from '../shared/Footer'
import { FooterLinksData } from '../mocks/FooterLinksData'
import CookiesBanner from '../shared/CookiesBanner'
import AuthFormModal from '../components/Auth/AuthFormModal'
import { ArrowUp } from 'tabler-icons-react'
import { useWindowScroll } from '@mantine/hooks'
import { Helmet } from 'react-helmet'

const Landing = () => {
    const [cookiesOpen, setCookiesOpen] = useState(true)
    const [authModalOpen, setAuthModalOpen] = useState(false)
    const [scroll, scrollTo] = useWindowScroll()

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
                <title>Netabank | Home</title>
            </Helmet>
            <TopNavbar
                links={NavLinksData.links}
                handleAuthModalOpen={handleAuthModalOpen}
            />
            <Hero />
            <GetStarted data={GetStartedData.data} />
            <Divider />
            <Features data={FeaturesData.data} />
            <Divider />
            <MobileDownload />
            <Footer data={FooterLinksData.data}></Footer>
            <CookiesBanner opened={cookiesOpen} onClose={handleCookiesClose} />
            <AuthFormModal
                opened={authModalOpen}
                onClose={handleAuthModalClose}
            />
            <Affix position={{ bottom: 20, right: 20 }}>
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                    {(transitionStyles) => (
                        <Button
                            leftIcon={<ArrowUp size={18} />}
                            style={transitionStyles}
                            onClick={() => scrollTo({ y: 0 })}
                        >
                            Scroll to top
                        </Button>
                    )}
                </Transition>
            </Affix>
        </div>
    )
}

export default Landing
