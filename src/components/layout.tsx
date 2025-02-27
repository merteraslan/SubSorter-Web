import React from 'react'
import { ReactNode } from "react"
import "../styles/layout.css"
import Navbar from './Navbar'

interface LayoutProps {
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <div className="global-wrapper">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout 