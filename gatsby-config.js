const config = require('./data/SiteConfig')

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix


module.exports = {
    pathPrefix: config.pathPrefix,
    siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription
  },
  plugins: [{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/${config.contentDir}`
      }
    },`gatsby-plugin-react-helmet`,
            `gatsby-plugin-styled-components`,
            `gatsby-plugin-sass`,
            `gatsby-plugin-sharp`,
            `gatsby-transformer-sharp`,
            `gatsby-plugin-catch-links`,
            {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                `gatsby-remark-copy-linked-files`,
                {
                  resolve: `gatsby-remark-images`,
                  options: {
                    maxWidth: 256,
                    linkImagesToOriginal: false
                  }
                },
                `gatsby-remark-prismjs`,
                {
                  resolve: `gatsby-remark-responsive-iframe`
                },
                `gatsby-remark-autolink-headers`
              ]
            }
          },
    `gatsby-plugin-offline`         
    ],
}
