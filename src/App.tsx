import React from 'react'
import './App.css'
import { MantineProvider } from '@mantine/core'
import { Route, Routes } from 'react-router-dom'
import {
    CardsPage,
    ContactUsPage,
    DashboardPage,
    FaqsPage,
    LandingPage,
} from './pages'

function App() {
    return (
        <div className="App">
            <MantineProvider>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/home" element={<DashboardPage />} />
                    <Route path="/cards" element={<CardsPage />} />
                    <Route path="/faqs" element={<FaqsPage />} />
                    <Route path="/contact-us" element={<ContactUsPage />} />
                </Routes>
            </MantineProvider>
        </div>
    )
}

export default App
