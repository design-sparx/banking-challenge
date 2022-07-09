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
    Page404,
} from './pages'

function App() {
    return (
        <div className="App">
            <MantineProvider>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/home" element={<DashboardPage />} />
                    <Route path="/cards" element={<CardsPage />} />
                    <Route path="/help" element={<FaqsPage />} />
                    <Route path="/contact-us" element={<ContactUsPage />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </MantineProvider>
        </div>
    )
}

export default App
