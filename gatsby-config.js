module.exports = {
  siteMetadata: {
    title: `WEBINNO.IO`,
    description: ``,
    author: `Innovative Web Services`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -70,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WEBINNO - Innovative Web Services | webinno.io`,
        short_name: `WEBINNO`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `static/assets/img/favicon.png`,
      },
    },
  ],
}
