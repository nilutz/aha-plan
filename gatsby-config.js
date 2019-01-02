const config = require('./data/SiteConfig');

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    siteUrl: config.siteUrl + pathPrefix,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/${config.contentDir}`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/${config.contentDir}/blog/`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.siteGATrackingID,
        anonymize: true,
        respectDNT: true,
      },
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-netlify-identity-widget',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
                destinationDir: `${__dirname}/${config.contentDir}/pdfs`,
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 256,
              linkImagesToOriginal: false,
            },
          },
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-responsive-iframe',
          },
          'gatsby-remark-autolink-headers',
        ],
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#c62828',
        showSpinner: true,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitle,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'minimal-ui',
        icons: [
          {
            src: 'logos/favicon.png',
            type: 'image/png',
            sizes: '16x16',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
  ],
};
