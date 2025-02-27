module.exports = {
  pathPrefix: "/subsorter-web",
  siteMetadata: {
    // ... your metadata
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/static/videos`,
      },
    },
    // ... other plugins
  ],
};
