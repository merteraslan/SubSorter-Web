import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  pathPrefix: "/SubSorter-Web", // Your actual repository name
  siteMetadata: {
    title: `SubSorter Documentation`,
    description: `Documentation for SubSorter browser extension`,
    siteUrl: `https://your-username.github.io/SubSorter-Web`, // Update with your username
  },
  // If you're not familiar with the "as const" syntax, you can skip it
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
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