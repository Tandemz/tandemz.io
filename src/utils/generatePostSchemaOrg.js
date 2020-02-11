import _ from 'lodash';
import moment from 'moment';
import safePrefix from './safePrefix';

export const generatePostSchemaOrg = (pageContext, { image, author }) => {
  const { frontmatter } = pageContext;

  const siteMeta = _.get(pageContext, 'site.siteMetadata') || {};
  const url = safePrefix(pageContext.url, siteMeta.siteUrl);

  return JSON.stringify({
    '@context': 'http://schema.org',
    '@type': 'Article',

    name: frontmatter.title,
    image,
    url,
    abstract: frontmatter.excerpt,
    author,
    publisher: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      url: 'http://www.tandemz.io',
      name: 'Tandemz',
    },

    articleBody: pageContext.html,
    dateCreated: moment(frontmatter.date).format(),
    datePublished: moment(frontmatter.date).format(),
    keywords: frontmatter.keywords || frontmatter.hashtags.join(','),
  });
};
