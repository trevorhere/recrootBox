module.exports = {
  siteMetadata: {
    title: `T / L`,
    description: `Web site for Trevor Lane`,
    author: `@hiTrevorHere`,
  },
  plugins: [
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1A202D`,
        theme_color: `#1A202D`,
        display: `minimal-ui`,
        icon: `src/images/ok.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-69073529-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Trade Winds`, 
          },
          {
            family: `Roboto Mono`,
            variants: [`400`, `700`]
          },
          {
            family: `Roboto`,
            subsets: [`latin`]
          },
        ],
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
