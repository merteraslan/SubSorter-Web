/**
 * Configure your Gatsby site with this file.
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `SubSorter - YouTube Subscription Feed Organizer`,
    description: `Enhance your YouTube subscription feed by hiding shorts, filtering streams, and bundling multiple videos from the same creator.`,
    author: `@merteraslan`,
    siteUrl: `https://merteraslan.github.io/subsorter-web/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `subsorter-landing-page`,
        short_name: `subsorter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#dc2626`,
        display: `minimal-ui`,
        icon: `src/images/subsorter-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `inter\:400,500,600,700`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add your Google Analytics tracking ID here
        trackingIds: [
          "GA-TRACKING-ID", // Replace with your Google Analytics tracking ID when ready
        ],
        // This object gets passed to the gtag config command
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
  ],
  // Use this when deploying to GitHub Pages
  pathPrefix: "/subsorter",
}