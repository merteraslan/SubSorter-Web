/**
 * Configure your Gatsby site with this file.
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

module.exports = {
  // IMPORTANT: This must match your GitHub Pages repo name if you serve from a subfolder.
  pathPrefix: "/subsorter-web",

  siteMetadata: {
    title: `SubSorter - YouTube Subscription Feed Organizer`,
    description: `Enhance your YouTube subscription feed by hiding shorts, filtering streams, and bundling multiple videos from the same creator.`,
    author: `@merteraslan`,
    // If you prefer just the domain, use "https://merteraslan.github.io"
    // and let pathPrefix handle the "/subsorter-web" part:
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

        // For a PWA, you may want this to be "/subsorter-web/" so it starts in the subfolder:
        start_url: `/`,

        background_color: `#ffffff`,
        theme_color: `#dc2626`,
        display: `minimal-ui`,
        icon: `src/images/subsorter-icon.png`, // Path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `inter:400,500,600,700`,
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // Add your Google Analytics tracking ID here when ready
        trackingIds: [
          "GA-TRACKING-ID",
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
  ],
};
