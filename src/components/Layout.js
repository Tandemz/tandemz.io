import React from 'react';
import { Helmet } from 'react-helmet';
import _ from 'lodash';

import { safePrefix } from '../utils';
import Header from './Header';
import Footer from './Footer';
import '../sass/main.scss';

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
