import React from 'react'
import './App.css'
import { MantineProvider } from '@mantine/core'
import { Route, Routes } from 'react-router-dom'
import { DashboardPage } from './pages'

function App() {
    return (
        <div className="App">
            <MantineProvider>
                <Routes>
                    <Route path="/" element={<DashboardPage />}></Route>
                </Routes>
            </MantineProvider>
        </div>
    )
}

export default App
