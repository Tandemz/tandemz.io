module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    ...require('./site-metadata.json'),
    siteUrl:
      process.env.BRANCH === 'master'
        ? 'https://www.tandemz.io'
        : 'https://staging.tandemz.io',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-source-data`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => process.env.BRANCH,
        env: {
          master: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
          staging: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'fr',
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-component`],
      },
    },
    {
      resolve: `gatsby-remark-page-creator`,
      options: {},
    },
    {
      resolve: `@stackbit/gatsby-plugin-menus`,
      options: {
        sourceUrlPath: `fields.url`,
        pageContextProperty: `menus`,
        menus: require('./src/data/menus.json'),
        menus: {
          main: [
            {
              identifier: 'participants',
              title: 'Get paid to participate',
              weight: 4,
              url:
                'https://app.tandemz.io/anonymous/subscribe-panel/6f4eea7d-4149-4c8f-8b7a-a624f574c2f8',
            },
          ],
        },
      },
    },
  ],
};
