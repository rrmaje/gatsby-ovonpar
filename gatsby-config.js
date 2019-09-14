module.exports = {
  siteMetadata: {
    title: `Ovonpar`,
    description: `Start building market for your supply or distribution chain. Find latest quotes of the goods, enter orders to match bids and offers`,
    author: `Ovonpar Stock Ticker`,
  },
  plugins: [
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
        background_color: `#6049b1`,
        theme_color: `#6049b1`,
        display: `minimal-ui`,
        icon: `src/images/logo@2x.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
