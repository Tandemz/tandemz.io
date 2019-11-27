import React from 'react';
import { Helmet } from 'react-helmet';
import _ from 'lodash';

import { safePrefix } from '../utils';
import Header from './Header';
import Footer from './Footer';
import '../sass/main.scss';

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  url: 'http://www.tandemz.io',
  downloadUrl: 'http://app.tandemz.io',
  name: 'Tandemz',
  description:
    'Grâce à Tandemz, lancez vos interviews UX et vos tests utilisateurs sans prise de tête.',
  browserRequirements: 'Requires JavaScript. Requires HTML5.',
  version: '1.0.0',
  screenshot:
    'https://staging.tandemz.io/images/Entreprises%20-%20Liste%20des%20Annonces.svg',
  operatingSystem: 'All',
  author: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    url: 'http://www.tandemz.io',
    name: 'Tandemz',
    email: 'contact@tandemz.io',
    logo: 'https://staging.tandemz.io/images/Logotype.png',
    slogan: 'Catalyseur de vos tests utilisateurs',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'France',
      postalCode: '75005',
    },
    location: {
      '@type': 'PostalAddress',
      addressCountry: 'France',
      postalCode: '75005',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: 'contact@tandemz.io',
        contactType: 'customer service',
      },
    ],
  },
  offers: [
    {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '100',
        priceCurrency: 'EUR',
        referenceQuantity: 1,
        unitCode: 'MON',
      },
    },
  ],
  applicationCategory: 'DesignApplication',
};

export default class Body extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>
            {_.get(this.props, 'pageContext.frontmatter.title') &&
              _.get(this.props, 'pageContext.frontmatter.title') + ' - '}
            {_.get(this.props, 'pageContext.site.siteMetadata.title')}
          </title>
          <meta
            name="description"
            content={_.get(
              this.props,
              'pageContext.site.siteMetadata.description',
            )}
          />
          <meta
            name="keywords"
            content={_.get(
              this.props,
              'pageContext.site.siteMetadata.keywords',
            )}
          />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initialScale=1.0"
          />
          <meta name="google" content="notranslate" />
          <link rel="alternate" href="https://www.tandemz.io/" hreflang="fr" />
          <link
            rel="alternate"
            href="https://www.tandemz.io/"
            hreflang="x-default"
          />
          <link
            rel="icon"
            href={safePrefix(
              _.get(this.props, 'pageContext.site.siteMetadata.favicon'),
            )}
            type="image/x-icon"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Muli:400,400i,700,700i,900,900i"
            rel="stylesheet"
          />

          <script className="structured-data-list" type="application/ld+json">
            {JSON.stringify(websiteSchema)}
          </script>
          <meta property="og:title" content="Tandemz" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.tandemz.io" />
          <meta
            property="og:description"
            content={_.get(
              this.props,
              'pageContext.site.siteMetadata.description',
            )}
          />
          <meta
            property="og:image"
            content="https://www.tandemz.io/images/Logotype.png"
          />
        </Helmet>
        <div
          id="page"
          className={
            'site palette-' +
            _.get(this.props, 'pageContext.site.siteMetadata.palette')
          }
        >
          <Header {...this.props} />
          <main id="content" className="site-content">
            {this.props.children}
          </main>
          <Footer {...this.props} />
        </div>
      </React.Fragment>
    );
  }
}
