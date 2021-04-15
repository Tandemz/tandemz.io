const menus = [
  ['fr', require('./src/data/fr/menus.json')],
  ['en', require('./src/data/en/menus.json')],
];

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    ...require('./site-metadata.json'),
    en: require('./site-metadata.json'),
    fr: require('./site-metadata-fr.json'),
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
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
      options: {
        defaultLocale: 'en',
      },
    },
    {
      resolve: `@stackbit/gatsby-plugin-menus`,
      options: {
        sourceUrlPath: `fields.url`,
        pageContextProperty: `menus`,
        menus: {
          ...require('./src/data/menus.json'),
          ...menus.reduce((res, [lang, config]) => {
            Object.keys(config).forEach((key) => {
              res[`${key}_${lang}`] = config[key];
            });
            return res;
          }, {}),
        },
      },
    },
    {
      resolve: 'gatsby-tandemz-gtm',
      options: {
        gtmId: 'GTM-MZBWH9T',
        configs: {
          dev: {
            gtmPreview: 'env-5',
            gtmAuth: '9APlEd5ZFUghA6qmaCok8w',
          },
          staging: {
            gtmPreview: 'env-7',
            gtmAuth: 'WlR5Tyk1UZLjDaikEPK7uQ',
          },
          prod: {
            gtmPreview: 'env-1',
            gtmAuth: '89zgLvQPHqBx2C2wn6XNwg',
          },
        },

        env:
          process.env.BRANCH === 'master'
            ? 'prod'
            : process.env.BRANCH === 'staging'
            ? 'staging'
            : 'dev',
      },
    },
  ],
};
