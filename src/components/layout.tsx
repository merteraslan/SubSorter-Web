import * as React from "react"
import { ReactNode } from "react"
import "../styles/layout.css"

interface LayoutProps {
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <div className="global-wrapper">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout 