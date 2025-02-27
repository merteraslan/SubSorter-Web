import * as React from "react"
import { HeadFC, Link, PageProps, graphql } from "gatsby"

const IndexPage: React.FC<PageProps> = ({ data }) => {
    return (
        <main>
            <h1>Extension Documentation</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/getting-started">Getting Started</Link>
                    </li>
                </ul>
            </nav>
        </main>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Extension Documentation</title> 