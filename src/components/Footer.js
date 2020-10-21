import React from 'react';
import _ from 'lodash';

import { Link, safePrefix, htmlToReact } from '../utils';
import Social from './Social';
import SubscribeForm from './SubscribeForm';

export default class Footer extends React.Component {
  render() {
    return (
      <footer id="colophon" className="site-footer">
        <div className="footer-top outer">
          <div className="inner">
            <div className="footer-widgets">
              <div className="widget footer-branding">
                {_.get(
                  this.props,
                  'pageContext.site.siteMetadata.footer.logo_img',
                ) ? (
                  <p className="site-logo">
                    <Link to={safePrefix('/')} title="Retour à l'accueil">
                      <img
                        src={safePrefix(
                          _.get(
                            this.props,
                            'pageContext.site.siteMetadata.footer.logo_img',
                          ),
                        )}
                        alt="Logo de Tandemz"
                      />
                    </Link>
                  </p>
                ) : (
                  <p className="site-title">
                    <Link
                      to={safePrefix('/')}
                      title={_.get(
                        this.props,
                        'pageContext.site.siteMetadata.header.title',
                      )}
                    >
                      {_.get(
                        this.props,
                        'pageContext.site.siteMetadata.header.title',
                      )}
                    </Link>
                  </p>
                )}
                {_.get(
                  this.props,
                  'pageContext.site.siteMetadata.footer.tagline',
                ) && (
                  <p className="site-description">
                    {_.get(
                      this.props,
                      'pageContext.site.siteMetadata.footer.tagline',
                    )}
                  </p>
                )}
              </div>
              <nav className="widget footer-navigation">
                <div className="footer-nav-inside">
                  {_.get(this.props, 'pageContext.menus.secondary') &&
                    _.get(
                      this.props,
                      'pageContext.site.siteMetadata.footer.has_nav',
                    ) && (
                      <div className="secondary-nav">
                        <h3 className="widget-title">
                          {_.get(
                            this.props,
                            'pageContext.site.siteMetadata.footer.nav_title',
                          )}
                        </h3>
                        <ul className="secondary-menu">
                          {_.map(
                            _.get(this.props, 'pageContext.menus.secondary'),
                            (item, item_idx) => (
                              <li key={item_idx}>
                                <Link
                                  to={safePrefix(_.get(item, 'url'))}
                                  title={_.get(item, 'title')}
                                >
                                  {_.get(item, 'title')}
                                </Link>
                              </li>
                            ),
                          )}
                          {_.map(
                            _.get(
                              this.props,
                              'pageContext.site.siteMetadata.footer.links',
                            ),
                            (link, link_idx) => (
                              <Link
                                key={link_idx}
                                title={_.get(link, 'text')}
                                to={_.get(link, 'url')}
                                {...(_.get(link, 'new_window')
                                  ? { target: '_blank', rel: 'noopener' }
                                  : null)}
                              >
                                {_.get(link, 'text')}
                              </Link>
                            ),
                          )}
                        </ul>
                      </div>
                    )}
                  {_.get(this.props, 'pageContext.menus.legal') &&
                    _.get(
                      this.props,
                      'pageContext.site.siteMetadata.footer.has_nav',
                    ) && (
                      <div className="legal-nav">
                        <h3 className="widget-title">
                          {_.get(
                            this.props,
                            'pageContext.site.siteMetadata.footer.legal_title',
                          )}
                        </h3>
                        <ul className="legal-menu">
                          {_.map(
                            _.get(this.props, 'pageContext.menus.legal'),
                            (item, item_idx) => (
                              <li key={item_idx}>
                                <Link
                                  to={safePrefix(_.get(item, 'url'))}
                                  title={_.get(item, 'title')}
                                >
                                  {_.get(item, 'title')}
                                </Link>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    )}
                  {_.get(
                    this.props,
                    'pageContext.site.siteMetadata.footer.has_social',
                  ) && (
                    <div className="social-nav">
                      <h3 className="widget-title">
                        {_.get(
                          this.props,
                          'pageContext.site.siteMetadata.footer.social_title',
                        )}
                      </h3>
                      <Social {...this.props} />
                    </div>
                  )}
                </div>
              </nav>
              {_.get(
                this.props,
                'pageContext.site.siteMetadata.footer.has_subscribe',
              ) && (
                <div className="widget footer-subscribe">
                  <h3 className="widget-title">
                    {_.get(
                      this.props,
                      'pageContext.site.siteMetadata.footer.subscribe_title',
                    )}
                  </h3>
                  {_.get(
                    this.props,
                    'pageContext.site.siteMetadata.footer.subscribe_content',
                  ) && (
                    <p>
                      {htmlToReact(
                        _.get(
                          this.props,
                          'pageContext.site.siteMetadata.footer.subscribe_content',
                        ),
                      )}
                    </p>
                  )}
                  <SubscribeForm {...this.props} />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="site-info outer">
          <div className="inner">
            {htmlToReact(
              _.get(this.props, 'pageContext.site.siteMetadata.footer.content'),
            )}
            &nbsp;
          </div>
        </div>
      </footer>
    );
  }
}
