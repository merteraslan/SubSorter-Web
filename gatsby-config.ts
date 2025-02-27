import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  pathPrefix: "/your-repo-name", // Replace with your GitHub repository name
  siteMetadata: {
    title: `Your Extension Documentation`,
    description: `Documentation for your browser extension`,
    siteUrl: `https://your-username.github.io/your-repo-name`, // Replace with your GitHub Pages URL
  },
  // If you're not familiar with the "as const" syntax, you can skip it
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "docs",
        path: `${__dirname}/content/docs`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
  ],
}

export default config 